import { useTranslation } from 'react-i18next';
import { Box, Container, Typography, Grid, Link, Stack, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const SR = "'Sora', sans-serif";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Home',     href: '#hero'      },
    { label: 'About',    href: '#about'     },
    { label: 'Work',     href: '#portfolio' },
    { label: 'Research', href: '#articles'  },
    { label: 'Contact',  href: '#contact'   },
  ];

  return (
    <Box component="footer" sx={{ bgcolor: '#1a152e', pt: { xs: 8, md: 10 }, pb: { xs: 4, md: 5 } }}>
      <Container maxWidth="lg">
        {/* Top row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            pb: 6,
            mb: 6,
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            gap: 4,
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{ display: 'block', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', mb: 2, fontFamily: SR }}
            >
              Let's connect
            </Typography>
            <Typography
              sx={{
                fontFamily: SR,
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '4rem' },
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                color: '#ffffff',
              }}
            >
              {t('footer.description')}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <IconButton component="a" href="https://linkedin.com/in/zeynepbehsi" target="_blank"
              sx={{ color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 1, '&:hover': { color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' } }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton component="a" href="https://github.com/ZeynepBehsi" target="_blank"
              sx={{ color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 1, '&:hover': { color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' } }}>
              <GitHubIcon />
            </IconButton>
          </Stack>
        </Box>

        {/* Bottom row */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { sm: 'center' }, gap: 2 }}>
          <Typography sx={{ fontFamily: SR, color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>
            © {currentYear} {t('footer.copyright')}
          </Typography>
          <Stack direction="row" spacing={3} flexWrap="wrap">
            {links.map((l) => (
              <Link key={l.label} href={l.href} underline="none"
                sx={{ fontFamily: SR, color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', fontWeight: 500, transition: 'color 0.2s', '&:hover': { color: '#ffffff' } }}>
                {l.label}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
