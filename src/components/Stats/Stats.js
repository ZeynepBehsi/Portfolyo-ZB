import { Box, Container, Typography, Grid } from '@mui/material';
import { stats } from '../../data/stats';

const SR = "'Sora', sans-serif";

const Stats = () => (
  <Box
    id="stats"
    component="section"
    sx={{
      bgcolor: '#1a152e',
      pt: { xs: 8, md: 10 },
      pb: { xs: 14, md: 16 },
      position: 'relative',
      overflow: 'hidden',
      /* subtle grid texture */
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      },
    }}
  >
    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      {/* Label */}
      <Typography
        variant="overline"
        sx={{
          display: 'block',
          color: 'rgba(255,255,255,0.4)',
          letterSpacing: '0.15em',
          mb: 6,
          fontFamily: SR,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        By the numbers
      </Typography>

      <Grid container spacing={0}>
        {stats.map((stat, i) => (
          <Grid item xs={6} md={3} key={i}>
            <Box
              sx={{
                py: { xs: 4, md: 5 },
                px: { xs: 3, md: 4 },
                borderLeft: i === 0 ? 'none' : { xs: i % 2 === 0 ? 'none' : '1px solid rgba(255,255,255,0.08)', md: '1px solid rgba(255,255,255,0.08)' },
                borderTop: { xs: i >= 2 ? '1px solid rgba(255,255,255,0.08)' : 'none', md: 'none' },
              }}
            >
              <Typography
                sx={{
                  fontFamily: SR,
                  fontWeight: 700,
                  fontSize: { xs: '3rem', md: '4.5rem' },
                  lineHeight: 1,
                  color: '#82b440',
                  letterSpacing: '-0.03em',
                  mb: 1.5,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                sx={{
                  fontFamily: SR,
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.45)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>

    {/* Diagonal divider → Expertise (gray) */}
    <Box
      component="svg"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 60, display: 'block', zIndex: 2 }}
    >
      <polygon points="0,40 1440,0 1440,60 0,60" fill="#f2f1f3" />
    </Box>
  </Box>
);

export default Stats;
