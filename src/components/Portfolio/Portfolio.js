import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Container, Typography, CardMedia, Button, Chip, Pagination, Stack } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { projects } from '../../data/projects';

const SR = "'Sora', sans-serif";
const ITEMS_PER_PAGE = 4;

const Portfolio = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const currentProjects = projects.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  const hasDetailPage = (p) => p.details || p.localEmbed;

  return (
    <Box id="portfolio" component="section" sx={{ bgcolor: '#ffffff', py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 8, pb: 6, borderBottom: '1px solid #e4e4ea' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { md: 'flex-end' }, gap: 3 }}>
            <Typography variant="h2" sx={{ fontFamily: SR, fontWeight: 700, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#1a152e' }}>
              {t('portfolio.title')}
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: SR, color: '#2d2840', maxWidth: 360, lineHeight: 1.75, fontSize: '1rem' }}>
              {t('portfolio.subtitle')}
            </Typography>
          </Box>
        </Box>

        {/* Project grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2, mb: 6 }}>
          {currentProjects.map((project, i) => (
            <Box
              key={project.id}
              onClick={() => hasDetailPage(project) && navigate(`/projects/${project.slug}`)}
              sx={{
                bgcolor: '#FFFFFF',
                border: '1px solid #e4e4ea',
                borderRadius: 2,
                overflow: 'hidden',
                cursor: hasDetailPage(project) ? 'pointer' : 'default',
                transition: 'all 0.25s ease',
                boxShadow: '0 1px 8px rgba(26,21,46,0.05)',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(26,21,46,0.1)' },
              }}
            >
              <CardMedia component="img" image={project.image} alt={project.title} sx={{ height: 200, objectFit: 'cover' }} />
              <Box sx={{ p: 3 }}>
                {/* Number + title */}
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 0.75 }}>
                  <Typography sx={{ fontFamily: SR, fontWeight: 700, fontSize: '0.7rem', color: '#9b98a8', letterSpacing: '0.08em' }}>
                    {String(i + 1 + (page - 1) * ITEMS_PER_PAGE).padStart(2, '0')}
                  </Typography>
                  <Typography variant="h6" sx={{ fontFamily: SR, fontWeight: 700, color: '#1a152e', fontSize: '1rem', letterSpacing: '-0.01em' }}>
                    {project.title}
                  </Typography>
                </Box>

                {project.subtitle && (
                  <Typography variant="body2" sx={{ fontFamily: SR, color: '#2d2840', fontWeight: 500, mb: 0.5, fontSize: '0.875rem' }}>
                    {project.subtitle}
                  </Typography>
                )}
                {project.company && (
                  <Typography variant="body2" sx={{ fontFamily: SR, color: '#9b98a8', mb: 1, fontSize: '0.825rem' }}>
                    {project.company} · {project.date}
                  </Typography>
                )}
                <Typography variant="body2" sx={{ fontFamily: SR, color: '#2d2840', mb: 2, fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {project.description}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                  {project.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" sx={{ bgcolor: '#ffffff', color: '#2d2840', border: '1px solid #e4e4ea', fontSize: '0.7rem', height: 22, fontFamily: SR, fontWeight: 600 }} />
                  ))}
                </Box>

                <Stack direction="row" spacing={2}>
                  {hasDetailPage(project) ? (
                    <Button size="small" startIcon={<LaunchIcon sx={{ fontSize: '14px !important' }} />}
                      onClick={(e) => { e.stopPropagation(); navigate(`/projects/${project.slug}`, { state: { scrollTo: 'simulation' } }); }}
                      sx={{ color: '#1a152e', p: 0, fontSize: '0.8rem', fontFamily: SR, fontWeight: 600, '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}>
                      {t('portfolio.demo')}
                    </Button>
                  ) : (
                    <Button size="small" startIcon={<LaunchIcon sx={{ fontSize: '14px !important' }} />}
                      href={project.liveUrl} onClick={(e) => e.stopPropagation()}
                      sx={{ color: '#1a152e', p: 0, fontSize: '0.8rem', fontFamily: SR, fontWeight: 600, '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}>
                      {t('portfolio.demo')}
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="small" startIcon={<GitHubIcon sx={{ fontSize: '14px !important' }} />}
                      href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                      sx={{ color: '#6b6880', p: 0, fontSize: '0.8rem', fontFamily: SR, '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}>
                      {t('portfolio.code')}
                    </Button>
                  )}
                </Stack>
              </Box>
            </Box>
          ))}
        </Box>

        {totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination count={totalPages} page={page} onChange={(_, v) => setPage(v)} size="large"
              sx={{ '& .MuiPaginationItem-root': { fontFamily: SR, color: '#2d2840' }, '& .Mui-selected': { bgcolor: '#1a152e !important', color: '#ffffff' } }} />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Portfolio;
