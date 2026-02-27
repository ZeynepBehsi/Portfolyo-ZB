import { useTranslation } from 'react-i18next';
import { useRef, useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const SR = "'Sora', sans-serif";

// Order: 1. AI Agents, 2. Graph ML, 3. Automation, 4. Time Series
const cards = [
  { key: 'aiAgents',   Icon: PsychologyIcon  },
  { key: 'graphML',    Icon: AccountTreeIcon },
  { key: 'automation', Icon: AutoFixHighIcon  },
  { key: 'timeSeries', Icon: TrendingUpIcon   },
];

const VisualPanel = ({ Icon }) => (
  <Box
    sx={{
      flex: '0 0 42%',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'rgba(255,255,255,0.025)',
      minHeight: { xs: 260, md: 'auto' },
    }}
  >
    {/* Decorative SVG rings + cardinal lines */}
    <Box
      component="svg"
      viewBox="0 0 200 200"
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '62%',
        height: '62%',
        pointerEvents: 'none',
      }}
    >
      <defs>
        <style>{`
          @keyframes ringBreathe {
            0%, 100% { opacity: 0.10; }
            50%       { opacity: 0.22; }
          }
          @keyframes ringBreathe2 {
            0%, 100% { opacity: 0.15; }
            50%       { opacity: 0.30; }
          }
        `}</style>
      </defs>

      <circle cx="100" cy="100" r="88" stroke="#82b440" strokeWidth="0.8" fill="none"
        style={{ animation: 'ringBreathe 5s ease-in-out infinite' }} />
      <circle cx="100" cy="100" r="68" stroke="#82b440" strokeWidth="0.8" fill="none"
        style={{ animation: 'ringBreathe 4s ease-in-out infinite 0.8s' }} />
      <circle cx="100" cy="100" r="48" stroke="#82b440" strokeWidth="0.8" fill="none"
        strokeDasharray="5 6"
        style={{ animation: 'ringBreathe2 3.5s ease-in-out infinite 0.4s' }} />
      <circle cx="100" cy="100" r="28" fill="rgba(130,180,64,0.07)"
        stroke="rgba(130,180,64,0.28)" strokeWidth="0.8" />

      <line x1="100" y1="2"   x2="100" y2="22"  stroke="rgba(130,180,64,0.4)" strokeWidth="1.2" />
      <line x1="100" y1="178" x2="100" y2="198" stroke="rgba(130,180,64,0.4)" strokeWidth="1.2" />
      <line x1="2"   y1="100" x2="22"  y2="100" stroke="rgba(130,180,64,0.4)" strokeWidth="1.2" />
      <line x1="178" y1="100" x2="198" y2="100" stroke="rgba(130,180,64,0.4)" strokeWidth="1.2" />

      <circle cx="100" cy="9"   r="2.5" fill="#82b440" opacity="0.55" />
      <circle cx="100" cy="191" r="2.5" fill="#82b440" opacity="0.55" />
      <circle cx="9"   cy="100" r="2.5" fill="#82b440" opacity="0.55" />
      <circle cx="191" cy="100" r="2.5" fill="#82b440" opacity="0.55" />

      <line x1="38"  y1="38"  x2="52"  y2="52"  stroke="rgba(130,180,64,0.2)" strokeWidth="0.8" />
      <line x1="148" y1="148" x2="162" y2="162" stroke="rgba(130,180,64,0.2)" strokeWidth="0.8" />
      <line x1="148" y1="38"  x2="162" y2="24"  stroke="rgba(130,180,64,0.2)" strokeWidth="0.8" />
      <line x1="38"  y1="162" x2="24"  y2="148" stroke="rgba(130,180,64,0.2)" strokeWidth="0.8" />
    </Box>

    {/* Centered icon */}
    <Box
      sx={{
        position: 'relative',
        zIndex: 2,
        width: { xs: 72, md: 90 },
        height: { xs: 72, md: 90 },
        borderRadius: '50%',
        bgcolor: 'rgba(130,180,64,0.10)',
        border: '1px solid rgba(130,180,64,0.32)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon sx={{ color: '#82b440', fontSize: { xs: 32, md: 40 } }} />
    </Box>
  </Box>
);

const ExpertiseCard = ({ cardKey, Icon, index, t }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.18 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: { xs: 'auto', md: '72vh' },
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'border-color 0.25s ease',
        '&:hover': { borderColor: 'rgba(130,180,64,0.28)' },
      }}
    >
      {/* Text — left side */}
      <Box
        sx={{
          flex: 1,
          p: { xs: 4, md: 7 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: SR,
            fontWeight: 700,
            fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.28)',
            letterSpacing: '0.14em',
            mb: 2.5,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.65s ease 0.05s, transform 0.65s ease 0.05s',
          }}
        >
          0{index + 1}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontFamily: SR,
            fontWeight: 700,
            color: '#ffffff',
            mb: 2,
            fontSize: { xs: '1.4rem', md: '1.9rem' },
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s',
          }}
        >
          {t(`expertise.cards.${cardKey}.title`)}
        </Typography>

        <Box
          sx={{
            display: 'inline-flex',
            mb: 3,
            alignSelf: 'flex-start',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.65s ease 0.25s, transform 0.65s ease 0.25s',
          }}
        >
          <Box
            sx={{
              bgcolor: 'rgba(130,180,64,0.12)',
              border: '1px solid rgba(130,180,64,0.28)',
              borderRadius: 1,
              px: 1.5,
              py: 0.5,
            }}
          >
            <Typography
              sx={{
                fontFamily: SR,
                color: '#82b440',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              {t(`expertise.cards.${cardKey}.highlight`)}
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="body1"
          sx={{
            fontFamily: SR,
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.9,
            mb: 2.5,
            fontSize: { xs: '0.95rem', md: '1.05rem' },
            maxWidth: 520,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.65s ease 0.35s, transform 0.65s ease 0.35s',
          }}
        >
          {t(`expertise.cards.${cardKey}.description`)}
        </Typography>

        <Typography
          sx={{
            fontFamily: SR,
            color: 'rgba(255,255,255,0.32)',
            fontSize: '0.82rem',
            lineHeight: 1.7,
            fontStyle: 'italic',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.65s ease 0.45s, transform 0.65s ease 0.45s',
          }}
        >
          {t(`expertise.cards.${cardKey}.keywords`)}
        </Typography>
      </Box>

      {/* Visual — right side */}
      <VisualPanel Icon={Icon} />
    </Box>
  );
};

const Expertise = () => {
  const { t } = useTranslation();

  return (
    <Box
      id="expertise"
      component="section"
      sx={{
        bgcolor: '#1a152e',
        py: { xs: 8, md: 11 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ mb: 8, pb: 6, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: SR,
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#ffffff',
            }}
          >
            {t('expertise.title')}
          </Typography>
        </Box>

        {/* Cards */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {cards.map(({ key, Icon }, i) => (
            <ExpertiseCard key={key} cardKey={key} Icon={Icon} index={i} t={t} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Expertise;
