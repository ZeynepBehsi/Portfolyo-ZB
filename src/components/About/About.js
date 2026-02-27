import { useTranslation } from 'react-i18next';
import { Box, Container, Typography, Button } from '@mui/material';

const SR = "'Sora', sans-serif";

const About = () => {
  const { t } = useTranslation();

  return (
    <Box id="about" component="section" sx={{ bgcolor: '#ffffff', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Header row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            mb: 8,
            gap: 3,
            pb: 6,
            borderBottom: '1px solid #e4e4ea',
          }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: SR,
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#1a152e',
                maxWidth: 520,
              }}
            >
              {t('about.title')}
            </Typography>
          </Box>
          <Button
            variant="contained"
            href="#contact"
            sx={{
              bgcolor: '#82b440',
              color: '#ffffff',
              px: 4,
              py: 1.5,
              fontWeight: 700,
              borderRadius: 9999,
              fontFamily: SR,
              alignSelf: { xs: 'flex-start', md: 'flex-end' },
              '&:hover': { bgcolor: '#6a9535' },
            }}
          >
            {t('about.cta')} →
          </Button>
        </Box>

        {/* Content */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 8 } }}>
          {[t('about.p1'), t('about.p2'), t('about.p3')].map((para, i) => (
            <Typography
              key={i}
              variant="body1"
              sx={{
                fontFamily: SR,
                color: '#2d2840',
                lineHeight: 1.85,
                fontSize: '1.05rem',
                gridColumn: i === 0 ? { xs: '1', md: '1 / -1' } : 'auto',
                fontWeight: i === 0 ? 500 : 400,
                ...(i === 0 && { fontSize: '1.15rem', color: '#1a152e' }),
              }}
            >
              {para}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About;
