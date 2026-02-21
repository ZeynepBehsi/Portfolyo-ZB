import { Box, Container, Typography, Button, Stack } from '@mui/material';

const Hero = () => {
  return (
    <Box
      id="hero"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: 'linear-gradient(135deg, #014D4E 0%, #026c6d 50%, #013536 100%)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920") center/cover',
          opacity: 0.3,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: 650 }}>
          <Typography
            variant="h1"
            sx={{
              color: '#fff',
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              fontStyle: 'italic',
              mb: 1,
              textTransform: 'uppercase',
            }}
          >
            Merhaba, Ben
          </Typography>

          <Typography
            variant="h1"
            sx={{
              color: '#fff',
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 400,
              textTransform: 'uppercase',
              mb: 4,
            }}
          >
            İsim Soyisim
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              mb: 2,
              fontSize: '1.1rem',
            }}
          >
            Kısa bir tanıtım metni buraya gelecek.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              mb: 5,
              fontSize: '1rem',
            }}
          >
            Uzmanlık alanınız ve ilgi alanlarınız hakkında birkaç cümle.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
            <Button
              variant="contained"
              size="large"
              href="#portfolio"
              sx={{
                bgcolor: '#fff',
                color: '#014D4E',
                px: 5,
                py: 1.5,
                fontSize: '1rem',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                },
              }}
            >
              Projelerim
            </Button>
          </Stack>
        </Box>

        {/* Sağda kart carousel hint - opsiyonel */}
        <Box
          sx={{
            display: { xs: 'none', lg: 'flex' },
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 220,
              height: 280,
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400"
              alt="Project 1"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
