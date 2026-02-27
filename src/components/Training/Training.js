import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';

const SR = "'Sora', sans-serif";

// Center node
const CX = 350, CY = 232, CR = 70;

// Outer nodes: 2x2 layout
const NODES = [
  { key: 'ds',     lines: ['Data Science', 'Fundamentals'],       x: 112, y: 105 },
  { key: 'ml',     lines: ['Machine Learning', '& Deep Learning'], x: 588, y: 105 },
  { key: 'ai',     lines: ['AI-Powered', 'Learning Program'],     x: 112, y: 360 },
  { key: 'career', lines: ['Career &', 'Consulting'],             x: 588, y: 360 },
];
const NR = 68;

const Training = () => {
  const { t } = useTranslation();

  return (
    <Box id="training" component="section" sx={{ bgcolor: '#ffffff', py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        {/* Header — title only */}
        <Box sx={{ mb: { xs: 6, md: 8 }, pb: 4, borderBottom: '1px solid #e4e4ea' }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: SR,
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#1a152e',
            }}
          >
            {t('training.title')}
          </Typography>
        </Box>

        {/* Two-column body */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
          }}
        >
          {/* Left — Mindmap */}
          <Box sx={{ flex: '0 0 54%', maxWidth: { md: '54%' }, width: '100%' }}>
            <Box
              component="svg"
              viewBox="0 0 700 465"
              sx={{ width: '100%', height: 'auto', display: 'block' }}
            >
              {/* Connection lines — drawn first */}
              {NODES.map((node) => {
                const dx = node.x - CX;
                const dy = node.y - CY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const ux = dx / dist;
                const uy = dy / dist;
                return (
                  <line
                    key={node.key}
                    x1={CX + ux * CR}
                    y1={CY + uy * CR}
                    x2={node.x - ux * NR}
                    y2={node.y - uy * NR}
                    stroke="#d0cfe8"
                    strokeWidth="2"
                    strokeDasharray="6 5"
                  />
                );
              })}

              {/* Outer nodes */}
              {NODES.map((node) => (
                <g key={node.key}>
                  <circle cx={node.x} cy={node.y} r={NR} fill="#2D2D3F" />
                  {node.lines.map((line, li) => {
                    const lineH = 19;
                    const totalH = (node.lines.length - 1) * lineH;
                    const yOff = li * lineH - totalH / 2;
                    return (
                      <text
                        key={li}
                        x={node.x}
                        y={node.y + yOff}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="white"
                        fontSize="13"
                        fontFamily="Sora, sans-serif"
                        fontWeight="600"
                      >
                        {line}
                      </text>
                    );
                  })}
                </g>
              ))}

              {/* Center node — drawn last */}
              <circle cx={CX} cy={CY} r={CR} fill="#FF6B35" />
              <text
                x={CX}
                y={CY}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="20"
                fontFamily="Sora, sans-serif"
                fontWeight="700"
              >
                Education
              </text>
            </Box>
          </Box>

          {/* Right — Description + Button */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            {/* Green accent line */}
            <Box sx={{ width: 44, height: 4, bgcolor: '#82b440', borderRadius: 9999 }} />

            <Typography
              variant="body1"
              sx={{
                fontFamily: SR,
                color: '#2d2840',
                fontSize: { xs: '1rem', md: '1.08rem' },
                lineHeight: 1.9,
              }}
            >
              {t('training.sideDesc')}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 2, alignItems: 'center' }}>
              <Button
                component={Link}
                to="/training"
                variant="contained"
                sx={{
                  bgcolor: '#1a152e',
                  color: '#ffffff',
                  px: 4,
                  py: 1.6,
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  borderRadius: 9999,
                  fontFamily: SR,
                  letterSpacing: '0.08em',
                  textTransform: 'none',
                  boxShadow: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'background-color 0.25s ease',
                  '&:hover': { bgcolor: '#82b440', boxShadow: 'none' },
                }}
              >
                {t('training.moreInfo')}
              </Button>

              <Button
                href="mailto:zeynepbehsi@gmail.com"
                variant="contained"
                sx={{
                  bgcolor: '#82b440',
                  color: '#ffffff',
                  px: 4,
                  py: 1.6,
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  borderRadius: 9999,
                  fontFamily: SR,
                  letterSpacing: '0.08em',
                  textTransform: 'none',
                  boxShadow: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'background-color 0.25s ease',
                  '&:hover': { bgcolor: '#5a8a2a', boxShadow: 'none' },
                }}
              >
                {t('training.cta')}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Training;
