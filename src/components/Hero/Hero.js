import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Typography, Button } from '@mui/material';
import { keyframes } from '@mui/system';
import AgentWorkflowAnimation from './AgentWorkflowAnimation';

const SR = "'Sora', sans-serif";

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

const TITLES = ['Data Scientist', 'AI Researcher'];


const Hero = () => {
  const { t } = useTranslation();
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    const current = TITLES[titleIdx];
    let timeout;
    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), 1800);
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 400);
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setTitleIdx((i) => (i + 1) % TITLES.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, titleIdx]);

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        bgcolor: '#1a152e',
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
      {/* AI Agent Workflow Animation — right side */}
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute',
          right: 0,
          top: 0,
          width: '50%',
          height: '100%',
          zIndex: 0,
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, white 28%)',
          maskImage: 'linear-gradient(90deg, transparent 0%, white 28%)',
        }}
      >
        <AgentWorkflowAnimation />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pl: { xs: 3, sm: 4, md: 2 }, pr: { xs: 3, sm: 4, md: 4 } }}>
        {/* Greeting */}
        <Typography
          sx={{
            display: 'block',
            color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.06em',
            fontSize: { xs: '1.3rem', md: '1.55rem' },
            fontWeight: 600,
            mb: 2.5,
            fontFamily: SR,
          }}
        >
          {t('hero.greeting')}
        </Typography>

        {/* Name */}
        <Typography
          variant="h1"
          sx={{
            fontFamily: SR,
            fontWeight: 800,
            fontSize: { xs: '3rem', sm: '4.5rem', md: '6.5rem', lg: '8rem' },
            lineHeight: 0.93,
            letterSpacing: '-0.04em',
            color: '#ffffff',
            mb: 4,
            maxWidth: 900,
          }}
        >
          {t('hero.name')}
        </Typography>

        {/* Typewriter */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, minHeight: { xs: '2.2rem', md: '2.8rem' } }}>
          <Typography
            sx={{
              fontFamily: SR,
              fontWeight: 700,
              fontSize: { xs: '1.3rem', md: '1.75rem' },
              color: '#82b440',
              letterSpacing: '-0.01em',
            }}
          >
            {displayed}
          </Typography>
          <Box
            sx={{
              width: 2,
              height: { xs: '1.3rem', md: '1.75rem' },
              bgcolor: '#82b440',
              ml: '3px',
              animation: `${blink} 1s step-end infinite`,
            }}
          />
        </Box>

        {/* Static role line — all titles always visible */}
        <Typography
          sx={{
            fontFamily: SR,
            color: 'rgba(255,255,255,0.65)',
            fontSize: { xs: '1rem', md: '1.15rem' },
            fontWeight: 500,
            letterSpacing: '0.03em',
            mb: 5,
          }}
        >
          {TITLES.join('  ·  ')}
        </Typography>

        {/* Green accent line */}
        <Box sx={{ width: 52, height: 4, bgcolor: '#82b440', mb: 5, borderRadius: 9999 }} />

        {/* Keywords */}
        <Typography
          sx={{
            fontFamily: SR,
            color: 'rgba(255,255,255,0.60)',
            fontSize: { xs: '0.95rem', md: '1.05rem' },
            fontWeight: 400,
            lineHeight: 1.7,
            maxWidth: 560,
            mb: 4,
          }}
        >
          {t('hero.keywords')}
        </Typography>

        {/* CTA Button */}
        <Button
          variant="contained"
          size="large"
          href="#portfolio"
          sx={{
            bgcolor: '#FF6B35',
            color: '#ffffff',
            px: 4.5,
            py: 1.75,
            fontSize: '0.75rem',
            fontWeight: 700,
            borderRadius: 9999,
            fontFamily: SR,
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap',
            boxShadow: 'none',
            transition: 'background-color 0.25s ease',
            '&:hover': { bgcolor: '#e55a28', boxShadow: 'none' },
          }}
        >
          {t('hero.cta')} →
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
