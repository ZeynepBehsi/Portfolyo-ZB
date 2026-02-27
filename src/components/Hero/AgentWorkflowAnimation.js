import { useRef, useEffect } from 'react';
import { Box } from '@mui/material';

// ─── Palette ─────────────────────────────────────────────────────────────────
const C = {
  dark:   '#2D2D3F',
  green:  '#7CB342',
  orange: '#FF6B35',
  white:  '#FFFFFF',
};

// ─── Tool nodes ───────────────────────────────────────────────────────────────
const TOOLS = [
  { label: 'Search',    sym: '⌕',   fs: 14 },
  { label: 'Code',      sym: '</>',  fs: 9  },
  { label: 'Database',  sym: '⬡',   fs: 14 },
  { label: 'API',       sym: '⇌',   fs: 13 },
  { label: 'Document',  sym: '≡',   fs: 13 },
  { label: 'Reasoning', sym: '◉',   fs: 13 },
];

// ─── Animation phases (ms) ────────────────────────────────────────────────────
const PHASES = [
  { name: 'pulse',   dur: 550 },
  { name: 'send',    dur: 750 },
  { name: 'active',  dur: 420 },
  { name: 'receive', dur: 650 },
  { name: 'pause',   dur: 280 },
];
const CYCLE = PHASES.reduce((s, p) => s + p.dur, 0); // ~2650 ms per tool

// ─── Component ───────────────────────────────────────────────────────────────
const AgentWorkflowAnimation = ({ width: propW, height: propH }) => {
  const wrapRef   = useRef(null);
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);
  const animRef   = useRef({
    activeIdx:  0,
    cycleStart: 0,
    hovered:    null,   // null | 'center' | number
    allActive:  false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap   = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext('2d');

    // ── Scale factor & layout cache ─────────────────────────────
    let S = 1;
    let layout = {};

    const computeLayout = () => {
      const W = wrap.offsetWidth;
      const H = wrap.offsetHeight;
      const cx = W / 2;
      const cy = H / 2;
      S = Math.min(W, H) / 560;
      const orbitR  = 182 * S;
      const centerR = 48  * S;
      const toolR   = 30  * S;
      const nodes   = TOOLS.map((_, i) => {
        const a = (i / TOOLS.length) * Math.PI * 2 - Math.PI / 2;
        return { x: cx + Math.cos(a) * orbitR, y: cy + Math.sin(a) * orbitR };
      });
      layout = { W, H, cx, cy, orbitR, centerR, toolR, nodes };
    };

    // ── Resize ──────────────────────────────────────────────────
    const onResize = () => {
      const W   = wrap.offsetWidth;
      const H   = wrap.offsetHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width        = W * dpr;
      canvas.height       = H * dpr;
      canvas.style.width  = W + 'px';
      canvas.style.height = H + 'px';
      ctx.scale(dpr, dpr);
      computeLayout();
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(wrap);
    onResize();

    // ── Helpers ──────────────────────────────────────────────────
    const lerp  = (a, b, t) => a + (b - a) * t;
    const ease  = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

    const hexRgb = (hex) => [
      parseInt(hex.slice(1, 3), 16),
      parseInt(hex.slice(3, 5), 16),
      parseInt(hex.slice(5, 7), 16),
    ];

    const radialGlow = (x, y, r, hex, alpha = 0.25) => {
      const [cr, cg, cb] = hexRgb(hex);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${cr},${cg},${cb},${alpha})`);
      g.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
      ctx.restore();
    };

    const dot = (x, y, r, hex) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = hex;
      ctx.fill();
      ctx.restore();
    };

    const getPhase = (elapsed) => {
      let acc = 0;
      for (const p of PHASES) {
        if (elapsed < acc + p.dur) return { name: p.name, t: (elapsed - acc) / p.dur };
        acc += p.dur;
      }
      return { name: 'pause', t: 1 };
    };

    // ── Mouse interaction ────────────────────────────────────────
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx   = e.clientX - rect.left;
      const my   = e.clientY - rect.top;
      const { cx, cy, centerR, toolR, nodes } = layout;
      const st   = animRef.current;

      if (Math.hypot(mx - cx, my - cy) < centerR * 1.5) {
        st.hovered = 'center'; st.allActive = true;
        canvas.style.cursor = 'pointer'; return;
      }
      for (let i = 0; i < nodes.length; i++) {
        if (Math.hypot(mx - nodes[i].x, my - nodes[i].y) < toolR * 1.6) {
          st.hovered = i; st.allActive = false;
          canvas.style.cursor = 'pointer'; return;
        }
      }
      st.hovered = null; st.allActive = false;
      canvas.style.cursor = 'default';
    };

    const onLeave = () => {
      animRef.current.hovered = null;
      animRef.current.allActive = false;
      canvas.style.cursor = 'default';
    };

    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);

    // ── Main draw loop ───────────────────────────────────────────
    const draw = (now) => {
      const st = animRef.current;

      // Advance cycle
      if (!st.cycleStart) st.cycleStart = now;
      let elapsed = now - st.cycleStart;
      if (elapsed >= CYCLE) {
        st.cycleStart = now; elapsed = 0;
        st.activeIdx  = (st.activeIdx + 1) % TOOLS.length;
      }

      const { name: phase, t: pt } = getPhase(elapsed);
      const { W, H, cx, cy, orbitR, centerR, toolR, nodes } = layout;
      const ai          = st.activeIdx;
      const aN          = nodes[ai];
      const { allActive, hovered } = st;

      ctx.clearRect(0, 0, W, H);

      // ── Orbit ring (dashed) ─────────────────────────────────
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, orbitR, 0, Math.PI * 2);
      ctx.setLineDash([3, 10]);
      ctx.strokeStyle = 'rgba(140,145,168,0.18)';
      ctx.lineWidth   = 1;
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // ── Edges ───────────────────────────────────────────────
      for (let i = 0; i < nodes.length; i++) {
        const n          = nodes[i];
        const edgeActive = !allActive && i === ai &&
          (phase === 'send' || phase === 'active' || phase === 'receive');
        const col   = allActive ? C.orange
                    : edgeActive ? C.green
                    : 'rgba(178,183,200,0.25)';
        const lw    = (allActive || edgeActive) ? 1.4 : 0.8;
        const alpha = (allActive || edgeActive) ? 0.82 : 1;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(n.x, n.y);
        ctx.strokeStyle = col;
        ctx.lineWidth   = lw * S;
        ctx.globalAlpha = alpha;
        ctx.stroke();
        ctx.restore();
      }

      // ── Particles — sequential flow ─────────────────────────
      if (!allActive && (phase === 'send' || phase === 'receive')) {
        const out = phase === 'send';
        const fx  = out ? cx : aN.x;
        const fy  = out ? cy : aN.y;
        const tx  = out ? aN.x : cx;
        const ty  = out ? aN.y : cy;
        const pColor = out ? C.green : C.orange;

        // Leading particle + 2 trailing (offset, radius)
        const trail = [[0, 3.5], [-0.2, 2.4], [-0.38, 1.6]];
        for (const [offset, pR] of trail) {
          if (pt + offset < 0) continue;
          const t  = clamp(ease(clamp(pt + offset, 0, 1)), 0, 1);
          const px = lerp(fx, tx, t);
          const py = lerp(fy, ty, t);
          radialGlow(px, py, pR * 5.5 * S, pColor, 0.38);
          dot(px, py, pR * S, pColor);
        }
      }

      // ── Particles — all-active (center hover) ───────────────
      if (allActive) {
        const tLoop = (now % 1350) / 1350;
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          for (const off of [0, 0.5]) {
            const t  = (tLoop + off) % 1;
            const px = lerp(cx, n.x, t);
            const py = lerp(cy, n.y, t);
            const ps = 2.8 * S;
            radialGlow(px, py, ps * 5.5, C.orange, 0.3);
            dot(px, py, ps, C.orange);
          }
        }
      }

      // ── Center node — pulse ring ─────────────────────────────
      if (phase === 'pulse') {
        const pR    = centerR * (1 + ease(pt) * 0.65);
        const alpha = (1 - pt) * 0.45;
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, pR, 0, Math.PI * 2);
        ctx.strokeStyle = allActive ? C.orange : C.green;
        ctx.lineWidth   = 2 * S;
        ctx.globalAlpha = alpha;
        ctx.stroke();
        ctx.restore();
      }

      // Center outer glow
      radialGlow(cx, cy, centerR * 2.8, allActive ? C.orange : C.green,
        allActive ? 0.22 : 0.12);

      // Center fill + border
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, centerR, 0, Math.PI * 2);
      ctx.fillStyle   = C.dark;
      ctx.fill();
      ctx.strokeStyle = allActive ? C.orange : C.green;
      ctx.lineWidth   = 2 * S;
      ctx.globalAlpha = 0.92;
      ctx.stroke();
      ctx.restore();

      // Center "AI / AGENT" text
      ctx.save();
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'middle';
      ctx.globalAlpha  = 1;
      ctx.font         = `bold ${Math.round(15 * S)}px Sora, sans-serif`;
      ctx.fillStyle    = allActive ? C.orange : C.green;
      ctx.fillText('AI', cx, cy - 7 * S);
      ctx.font      = `${Math.round(8 * S)}px Sora, sans-serif`;
      ctx.fillStyle = 'rgba(255,255,255,0.42)';
      ctx.fillText('AGENT', cx, cy + 9 * S);
      ctx.restore();

      // ── Tool nodes ───────────────────────────────────────────
      for (let i = 0; i < TOOLS.length; i++) {
        const n      = nodes[i];
        const tool   = TOOLS[i];
        const lit    = allActive ||
          (!allActive && i === ai && (phase === 'active' || phase === 'receive'));
        const isHov  = hovered === i;
        const nR     = toolR * (isHov ? 1.22 : 1);
        const nColor = lit ? C.orange : C.green;
        const [nr, ng, nb] = hexRgb(nColor);

        // Glow for lit / hovered
        if (lit || isHov) {
          radialGlow(n.x, n.y, nR * 2.8, nColor, lit ? 0.3 : 0.2);
        }

        // Node circle
        ctx.save();
        ctx.beginPath();
        ctx.arc(n.x, n.y, nR, 0, Math.PI * 2);
        ctx.fillStyle   = `rgba(${nr},${ng},${nb},${lit ? 0.18 : 0.07})`;
        ctx.fill();
        ctx.strokeStyle = nColor;
        ctx.lineWidth   = (lit ? 2 : 1.5) * S;
        ctx.globalAlpha = lit ? 1 : 0.72;
        ctx.stroke();
        ctx.restore();

        // Symbol
        ctx.save();
        ctx.font         = `${Math.round(tool.fs * S)}px Sora, monospace`;
        ctx.fillStyle    = lit ? C.orange : 'rgba(255,255,255,0.82)';
        ctx.textAlign    = 'center';
        ctx.textBaseline = 'middle';
        ctx.globalAlpha  = 1;
        ctx.fillText(tool.sym, n.x, n.y);
        ctx.restore();

        // Label on hover
        if (isHov) {
          ctx.save();
          ctx.font         = `${Math.round(9 * S)}px Sora, sans-serif`;
          ctx.fillStyle    = C.white;
          ctx.textAlign    = 'center';
          ctx.textBaseline = 'top';
          ctx.globalAlpha  = 0.88;
          ctx.fillText(tool.label, n.x, n.y + nR + 14 * S);
          ctx.restore();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
      ro.disconnect();
    };
  }, []);

  return (
    <Box
      ref={wrapRef}
      sx={{ width: propW ?? '100%', height: propH ?? '100%', position: 'relative' }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </Box>
  );
};

export default AgentWorkflowAnimation;
