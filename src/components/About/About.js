import { Box, Container, Typography, Button } from '@mui/material';

const About = () => {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#fff',
        py: { xs: 8, md: 0 },
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            color: '#1a1a1a',
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            textTransform: 'uppercase',
            mb: 5,
            textAlign: 'center',
          }}
        >
          Hakkımda
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#555',
            mb: 3,
            lineHeight: 2,
            textAlign: 'center',
            fontSize: { xs: '1rem', md: '1.1rem' },
          }}
        >
          Merhaba, ben Zeynep BEHŞİ. Buraya kendiniz hakkında detaylı bir açıklama
          yazabilirsiniz. Eğitim geçmişiniz, deneyimleriniz ve uzmanlık alanlarınız
          hakkında bilgi verin.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#555',
            mb: 5,
            lineHeight: 2,
            textAlign: 'center',
            fontSize: { xs: '1rem', md: '1.1rem' },
          }}
        >
          Ziyaretçilerin sizi daha iyi tanımasını sağlayacak samimi bir metin olmalı.
          İlgi alanlarınız, hedefleriniz ve motivasyon kaynaklarınız hakkında birkaç
          cümle daha ekleyebilirsiniz.
        </Typography>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            size="large"
            href="#contact"
            sx={{
              bgcolor: '#014D4E',
              color: '#fff',
              px: 5,
              py: 1.5,
              fontSize: '1rem',
              '&:hover': {
                bgcolor: '#013536',
              },
            }}
          >
            İletişime Geç
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
