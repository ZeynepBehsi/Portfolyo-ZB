import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppBar, Toolbar, Typography, Button, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText,
  Box, Container, useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const SR = "'Sora', sans-serif";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 60 });

  const navItems = [
    { labelKey: 'navbar.about',      href: '#about'      },
    { labelKey: 'navbar.portfolio',  href: '#portfolio'  },
    { labelKey: 'navbar.expertise',  href: '#expertise'  },
    { labelKey: 'navbar.articles',   href: '#articles'   },
    { labelKey: 'navbar.training',   href: '#training'   },
    { labelKey: 'navbar.contact',    href: '#contact'    },
  ];

  const textColor  = '#6b6880';
  const textHover  = '#1a152e';
  const logoColor  = '#1a152e';
  const activeLang = '#82b440';

  const drawer = (
    <Box sx={{ width: 280, height: '100%', bgcolor: '#ffffff', borderLeft: '1px solid #e4e4ea' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#1a152e' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.labelKey} disablePadding>
            <ListItemButton component="a" href={item.href} onClick={() => setMobileOpen(false)}
              sx={{ py: 1.75, px: 4, '&:hover': { bgcolor: '#f2f1f3' } }}>
              <ListItemText primary={t(item.labelKey)}
                primaryTypographyProps={{ color: '#2d2840', fontSize: '0.95rem', fontWeight: 500, fontFamily: SR }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" elevation={0}
        sx={{
          bgcolor: trigger ? 'rgba(255, 255, 255, 0.97)' : 'transparent',
          backdropFilter: trigger ? 'blur(12px)' : 'none',
          borderBottom: trigger ? '1px solid #e4e4ea' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1.25 }}>
            <Typography component="a" href="#hero"
              sx={{ fontFamily: SR, fontWeight: 700, fontSize: '1rem', color: logoColor, textDecoration: 'none', letterSpacing: '0.06em', transition: 'color 0.3s' }}>
              PORTFOLIO
            </Typography>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button key={item.labelKey} href={item.href}
                  sx={{ color: textColor, fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.03em', fontFamily: SR, minWidth: 0, px: 0.5, transition: 'color 0.2s', '&:hover': { bgcolor: 'transparent', color: textHover } }}>
                  {t(item.labelKey)}
                </Button>
              ))}

              {/* Lang toggle */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25, ml: 1 }}>
                {['en', 'tr'].map((lang, idx) => (
                  <Box key={lang} sx={{ display: 'flex', alignItems: 'center' }}>
                    {idx === 1 && <Typography sx={{ color: textColor, fontSize: '0.7rem', opacity: 0.4, mx: 0.5 }}>|</Typography>}
                    <Button onClick={() => i18n.changeLanguage(lang)} size="small"
                      sx={{ color: i18n.language === lang ? activeLang : textColor, fontWeight: i18n.language === lang ? 700 : 400, fontSize: '0.78rem', minWidth: 0, px: 0.5, fontFamily: SR, '&:hover': { bgcolor: 'transparent', color: textHover } }}>
                      {lang.toUpperCase()}
                    </Button>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Mobile */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
              <Button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en')} size="small"
                sx={{ color: '#1a152e', fontSize: '0.78rem', fontWeight: 600, minWidth: 0, px: 1, border: '1px solid #e4e4ea', borderRadius: 9999, fontFamily: SR, '&:hover': { bgcolor: '#f2f1f3' } }}>
                {i18n.language === 'en' ? 'TR' : 'EN'}
              </Button>
              <IconButton onClick={() => setMobileOpen(true)} sx={{ color: '#1a152e' }}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)} ModalProps={{ keepMounted: true }}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
