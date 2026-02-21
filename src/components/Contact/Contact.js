import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Mesajınız gönderildi! (Backend bağlantısı yapılacak)');
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#f5f5f5',
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 5, md: 8 },
            alignItems: 'center',
          }}
        >
          {/* Sol Taraf - İletişim Bilgileri */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{
                color: '#1a1a1a',
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              İletişime Geçin
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#666',
                mb: 5,
                fontSize: '1rem',
                lineHeight: 1.8,
              }}
            >
              Projeleriniz, iş birlikleri veya herhangi bir soru için benimle
              iletişime geçebilirsiniz.
            </Typography>

            <Stack spacing={3}>
              {/* Email */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    border: '2px solid #014D4E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <EmailIcon sx={{ color: '#014D4E', fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: '#999', fontSize: '0.85rem' }}>
                    Email
                  </Typography>
                  <Typography
                    component="a"
                    href="mailto:zeynep.behsi@email.com"
                    sx={{
                      color: '#1a1a1a',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      '&:hover': { color: '#014D4E' },
                    }}
                  >
                    zeynep.behsi@email.com
                  </Typography>
                </Box>
              </Box>

              {/* LinkedIn */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    border: '2px solid #014D4E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <LinkedInIcon sx={{ color: '#014D4E', fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: '#999', fontSize: '0.85rem' }}>
                    LinkedIn
                  </Typography>
                  <Typography
                    component="a"
                    href="https://linkedin.com/in/"
                    target="_blank"
                    sx={{
                      color: '#1a1a1a',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      '&:hover': { color: '#014D4E' },
                    }}
                  >
                    linkedin.com/in/zeynepbehsi
                  </Typography>
                </Box>
              </Box>

              {/* GitHub */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    border: '2px solid #014D4E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <GitHubIcon sx={{ color: '#014D4E', fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: '#999', fontSize: '0.85rem' }}>
                    GitHub
                  </Typography>
                  <Typography
                    component="a"
                    href="https://github.com/"
                    target="_blank"
                    sx={{
                      color: '#1a1a1a',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      '&:hover': { color: '#014D4E' },
                    }}
                  >
                    github.com/zeynepbehsi
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>

          {/* Sağ Taraf - Form (Koyu teal arka plan + görsel overlay) */}
          <Box
            sx={{
              flex: 1,
              width: '100%',
              maxWidth: { md: 500 },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                bgcolor: '#014D4E',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920") center/cover',
                  opacity: 0.15,
                },
              }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  p: { xs: 3, md: 4 },
                }}
              >
              <Typography
                variant="h6"
                sx={{ color: '#fff', fontWeight: 600, mb: 3 }}
              >
                Mesaj Gönderin
              </Typography>

              <Stack spacing={2.5}>
                <Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 0.5, fontWeight: 500 }}>
                    Ad Soyad
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Adınız Soyadınız"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: '#fff',
                        '& fieldset': { borderColor: 'transparent' },
                        '&:hover fieldset': { borderColor: '#014D4E' },
                        '&.Mui-focused fieldset': { borderColor: '#014D4E' },
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 0.5, fontWeight: 500 }}>
                    E-posta
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="ornek@email.com"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: '#fff',
                        '& fieldset': { borderColor: 'transparent' },
                        '&:hover fieldset': { borderColor: '#014D4E' },
                        '&.Mui-focused fieldset': { borderColor: '#014D4E' },
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 0.5, fontWeight: 500 }}>
                    Konu
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Mesaj konusu"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: '#fff',
                        '& fieldset': { borderColor: 'transparent' },
                        '&:hover fieldset': { borderColor: '#014D4E' },
                        '&.Mui-focused fieldset': { borderColor: '#014D4E' },
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 0.5, fontWeight: 500 }}>
                    Mesaj
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Mesajınızı yazın..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: '#fff',
                        '& fieldset': { borderColor: 'transparent' },
                        '&:hover fieldset': { borderColor: '#014D4E' },
                        '&.Mui-focused fieldset': { borderColor: '#014D4E' },
                      },
                    }}
                  />
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{
                    bgcolor: '#fff',
                    color: '#014D4E',
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 1.5,
                    alignSelf: 'flex-end',
                    px: 4,
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                  }}
                >
                  Gönder
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);
};

export default Contact;
