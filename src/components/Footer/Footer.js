import { Box, Container, Typography, Grid, Link, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const footerLinks = {
  Sayfalar: [
    { label: 'Ana Sayfa', href: '#hero' },
    { label: 'Hakkımda', href: '#about' },
    { label: 'Projeler', href: '#portfolio' },
    { label: 'Makaleler', href: '#articles' },
  ],
  Kaynaklar: [
    { label: 'Blog', href: '#' },
    { label: 'Dökümanlar', href: '#' },
    { label: 'Kaynaklar', href: '#' },
  ],
  İletişim: [
    { label: 'ornek@email.com', href: 'mailto:ornek@email.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'GitHub', href: 'https://github.com' },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: '#fff',
        borderTop: '1px solid #eee',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo & Description */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#1a1a1a',
                mb: 2,
              }}
            >
              Portfolio
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: '#666', mb: 3, maxWidth: 250, lineHeight: 1.7 }}
            >
              Kısa bir açıklama metni. Çalışmalarınız ve uzmanlık alanlarınız hakkında.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                size="small"
                component="a"
                href="#"
                sx={{ color: '#666', '&:hover': { color: '#014D4E' } }}
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                component="a"
                href="#"
                sx={{ color: '#666', '&:hover': { color: '#014D4E' } }}
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                component="a"
                href="#"
                sx={{ color: '#666', '&:hover': { color: '#014D4E' } }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <Grid item xs={6} sm={4} md={2} key={title}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  color: '#1a1a1a',
                  mb: 2,
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                  letterSpacing: '0.05em',
                }}
              >
                {title}
              </Typography>
              <Stack spacing={1.5}>
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    underline="none"
                    sx={{
                      color: '#666',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s',
                      '&:hover': { color: '#014D4E' },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid #eee',
          }}
        >
          <Typography variant="body2" color="#999" align="center">
            © {currentYear} Portfolio. Tüm hakları saklıdır.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
