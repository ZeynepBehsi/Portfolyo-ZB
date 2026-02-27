import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Typography, TextField, Button, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const SR = "'Sora', sans-serif";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('contact.form.successAlert'));
  };

  const socialLinks = [
    { icon: <EmailIcon sx={{ color: '#1a152e', fontSize: 18 }} />, label: t('contact.email'), href: 'mailto:zeynepbehsi@gmail.com', display: 'zeynepbehsi@gmail.com' },
    { icon: <LinkedInIcon sx={{ color: '#1a152e', fontSize: 18 }} />, label: t('contact.linkedin'), href: 'https://www.linkedin.com/in/zeynep-behsi/', display: 'linkedin.com/in/zeynep-behsi' },
    { icon: <GitHubIcon sx={{ color: '#1a152e', fontSize: 18 }} />, label: t('contact.github'), href: 'https://github.com/ZeynepBehsi', display: 'github.com/ZeynepBehsi' },
    {
      icon: <Box component="img" src="/researchgate-icon.webp" alt="ResearchGate" sx={{ width: 18, height: 18, objectFit: 'contain' }} />,
      label: 'ResearchGate',
      href: 'https://www.researchgate.net/profile/Zeynep-Behsi',
      display: 'researchgate.net/profile/Zeynep-Behsi',
    },
  ];

  return (
    <Box id="contact" component="section" sx={{ bgcolor: '#f2f1f3', py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 8, pb: 6, borderBottom: '1px solid #e4e4ea' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { md: 'flex-end' }, gap: 3 }}>
            <Typography variant="h2" sx={{ fontFamily: SR, fontWeight: 700, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#1a152e' }}>
              {t('contact.title')}
            </Typography>
          </Box>
        </Box>

        {/* Two-column layout */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 6, md: 8 }, alignItems: 'flex-start' }}>
          {/* Left — Contact links */}
          <Box sx={{ flex: '0 0 auto', width: { md: 300 } }}>
            <Stack spacing={0}>
              {socialLinks.map((item, i) => (
                <Box key={item.label}>
                  <Box
                    component="a"
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      py: 3,
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      '&:hover .contact-label': { color: '#1a152e' },
                      '&:hover .contact-arrow': { transform: 'translateX(4px)' },
                    }}
                  >
                    <Box sx={{ width: 36, height: 36, borderRadius: 1, bgcolor: '#FFFFFF', border: '1px solid #e4e4ea', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {item.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ fontFamily: SR, color: '#9b98a8', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', mb: 0.25 }}>
                        {item.label}
                      </Typography>
                      <Typography className="contact-label" sx={{ fontFamily: SR, color: '#2d2840', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s' }}>
                        {item.display}
                      </Typography>
                    </Box>
                  </Box>
                  {i < socialLinks.length - 1 && <Box sx={{ borderBottom: '1px solid #e4e4ea' }} />}
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Right — Form */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Box sx={{ width: { xs: '100%', md: 500 } }}>
            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={3}>
                {[
                  { key: 'name', type: 'text' },
                  { key: 'email', type: 'email' },
                  { key: 'subject', type: 'text' },
                ].map(({ key, type }) => (
                  <Box key={key}>
                    <Typography variant="body2" sx={{ color: '#1a152e', mb: 1, fontWeight: 600, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: SR }}>
                      {t(`contact.form.${key}`)}
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder={t(`contact.form.${key}Placeholder`)}
                      name={key}
                      type={type}
                      value={formData[key]}
                      onChange={handleChange}
                      required
                      size="small"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: '#FFFFFF',
                          color: '#1a152e',
                          fontFamily: SR,
                          borderRadius: 1,
                          '& fieldset': { borderColor: '#e4e4ea' },
                          '&:hover fieldset': { borderColor: '#d0cdd8' },
                          '&.Mui-focused fieldset': { borderColor: '#82b440', borderWidth: '1px' },
                          '& input': { fontFamily: SR, fontSize: '0.9rem' },
                        },
                      }}
                    />
                  </Box>
                ))}

                <Box>
                  <Typography variant="body2" sx={{ color: '#1a152e', mb: 1, fontWeight: 600, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: SR }}>
                    {t('contact.form.message')}
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder={t('contact.form.messagePlaceholder')}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={5}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: '#FFFFFF',
                        color: '#1a152e',
                        fontFamily: SR,
                        borderRadius: 1,
                        '& fieldset': { borderColor: '#e4e4ea' },
                        '&:hover fieldset': { borderColor: '#d0cdd8' },
                        '&.Mui-focused fieldset': { borderColor: '#82b440', borderWidth: '1px' },
                        '& textarea': { fontFamily: SR, fontSize: '0.9rem' },
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon sx={{ fontSize: '16px !important' }} />}
                    sx={{
                      bgcolor: '#FF6B35',
                      color: '#ffffff',
                      px: 4,
                      py: 1.25,
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      fontFamily: SR,
                      letterSpacing: '0.04em',
                      borderRadius: 9999,
                      boxShadow: 'none',
                      '&:hover': { bgcolor: '#82b440', boxShadow: 'none' },
                      transition: 'background-color 0.25s ease',
                    }}
                  >
                    {t('contact.form.submit')}
                  </Button>
                </Box>
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
