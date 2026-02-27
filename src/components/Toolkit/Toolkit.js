import { Box, Container, Typography, Grid } from '@mui/material';
import { toolkit } from '../../data/toolkit';

const SR = "'Sora', sans-serif";

const Toolkit = () => (
  <Box
    id="toolkit"
    component="section"
    sx={{ bgcolor: '#ffffff', py: { xs: 8, md: 11 } }}
  >
    <Container maxWidth="lg">
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          mb: 8,
          gap: 2,
        }}
      >
        <Box>
          <Typography
            variant="overline"
            sx={{ display: 'block', color: '#6b6880', letterSpacing: '0.15em', mb: 1.5, fontFamily: SR }}
          >
            Skills & Tools
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: '#1a152e',
              fontSize: { xs: '2.2rem', md: '3rem' },
              fontWeight: 700,
              letterSpacing: '-0.02em',
              fontFamily: SR,
              lineHeight: 1.1,
            }}
          >
            Toolkit
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: '#2d2840',
            maxWidth: 340,
            fontFamily: SR,
            lineHeight: 1.75,
            fontSize: '1rem',
          }}
        >
          Technologies and tools I work with — from data processing pipelines to graph-based AI systems.
        </Typography>
      </Box>

      {/* Skill bars */}
      <Grid container spacing={{ xs: 4, md: 5 }}>
        {toolkit.map((item, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Box>
              {/* Label row */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 1.25 }}>
                <Typography
                  sx={{
                    fontFamily: SR,
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: '#1a152e',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: SR,
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: '#1a152e',
                  }}
                >
                  {item.pct}%
                </Typography>
              </Box>

              {/* Track */}
              <Box
                sx={{
                  width: '100%',
                  height: 3,
                  bgcolor: '#e4e4ea',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    width: `${item.pct}%`,
                    height: '100%',
                    bgcolor: '#82b440',
                    borderRadius: 2,
                    transition: 'width 0.6s ease',
                  }}
                />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Toolkit;
