import { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Chip,
  Button,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar/Navbar';

const SR = "'Sora', sans-serif";

const CARD_STYLE = {
  bgcolor: '#ffffff',
  border: '1px solid #e4e4ea',
  borderRadius: 2,
  p: 3,
  boxShadow: '0 2px 12px rgba(26,21,46,0.06)',
};

const SECTION_TITLE_STYLE = {
  fontWeight: 700,
  color: '#1a152e',
  mb: 2,
  fontSize: '0.8rem',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontFamily: "'Sora', sans-serif",
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const timer = setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <Box sx={{ minHeight: '100vh', bgcolor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ mb: 2, color: '#1a152e', fontFamily: "'Sora', sans-serif" }}>Project not found</Typography>
            <Button onClick={() => navigate(-1)} startIcon={<ArrowBackIcon />} sx={{ color: '#1a152e', fontFamily: "'Sora', sans-serif" }}>
              Back to Projects
            </Button>
          </Box>
        </Box>
      </>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#ffffff' }}>
      <Navbar />

      {/* ── Header ── */}
      <Box
        sx={{
          pt: '80px',
          position: 'relative',
          height: { xs: 240, md: 300 },
          background: 'linear-gradient(160deg, #1a152e 0%, #2d2840 60%, #1a152e 100%)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.12,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pb: 4 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            sx={{
              color: 'rgba(255, 255, 255, 0.55)',
              mb: 2, p: 0,
              fontSize: '0.82rem',
              fontFamily: "'Sora', sans-serif",
              '&:hover': { color: '#ffffff', bgcolor: 'transparent' },
            }}
          >
            {t('portfolio.title')}
          </Button>
          <Typography
            variant="h3"
            sx={{ color: '#ffffff', fontWeight: 700, fontSize: { xs: '1.7rem', md: '2.4rem' }, lineHeight: 1.2, fontFamily: "'Sora', sans-serif" }}
          >
            {project.title}
          </Typography>
          {project.subtitle && (
            <Typography
              variant="h6"
              sx={{ color: 'rgba(255,255,255,0.65)', fontWeight: 400, mt: 0.5, fontSize: { xs: '0.95rem', md: '1.05rem' }, fontFamily: "'Sora', sans-serif" }}
            >
              {project.subtitle}
            </Typography>
          )}
          {project.company && (
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)', mt: 0.5, fontFamily: "'Sora', sans-serif" }}>
              {project.company} · {project.date}
            </Typography>
          )}
        </Container>
      </Box>

      {/* ── Content ── */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 5 } }}>

        {/* Project Details */}
        {project.details && (
          <Box sx={{ ...CARD_STYLE, mb: 3 }}>
            <Typography variant="subtitle1" sx={SECTION_TITLE_STYLE}>
              {t('portfolio.modal.projectDetails')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {project.details.map((item, i) => (
                <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#1a152e', mt: 0.8, flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ color: '#2d2840', lineHeight: 1.85, fontSize: '0.9rem', fontFamily: "'Sora', sans-serif" }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* Publication + Technologies */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3, mb: 3 }}>
          {project.publication && (
            <Box sx={CARD_STYLE}>
              <Typography variant="subtitle1" sx={SECTION_TITLE_STYLE}>
                {t('portfolio.modal.relatedPublication')}
              </Typography>
              {project.publicationTitle && (
                <Typography
                  variant="body2"
                  sx={{ color: '#1a152e', fontWeight: 600, mb: 1.5, lineHeight: 1.6, fontSize: '0.9rem', fontFamily: "'Sora', sans-serif" }}
                >
                  {project.publicationTitle}
                </Typography>
              )}
              <Chip
                label={`📄  ${project.publication}`}
                sx={{
                  bgcolor: '#ffffff',
                  color: '#2d2840',
                  border: '1px solid #e4e4ea',
                  fontSize: '0.85rem',
                  height: 32,
                  fontWeight: 500,
                  fontFamily: "'Sora', sans-serif",
                }}
              />
            </Box>
          )}

          <Box sx={CARD_STYLE}>
            <Typography variant="subtitle1" sx={SECTION_TITLE_STYLE}>
              {t('portfolio.modal.technologies')}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {(project.allTags || project.tags).map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    bgcolor: '#ffffff',
                    color: '#2d2840',
                    border: '1px solid #e4e4ea',
                    fontSize: '0.75rem',
                    height: 26,
                    fontWeight: 600,
                    fontFamily: "'Sora', sans-serif",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Demo + Source Code */}
        {(project.localEmbed || project.liveUrl || project.githubUrl) && (
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3, mb: 3 }}>
            {(project.localEmbed || project.liveUrl) && (
              <Box
                onClick={() => {
                  if (project.localEmbed) {
                    document.getElementById('simulation')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.open(project.liveUrl, '_blank');
                  }
                }}
                sx={{
                  ...CARD_STYLE,
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  justifyContent: 'center', gap: 1.5, cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(26,21,46,0.12)' },
                }}
              >
                <Box sx={{ width: 48, height: 48, borderRadius: '50%', bgcolor: '#1a152e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <LaunchIcon sx={{ color: '#ffffff', fontSize: 22 }} />
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1a152e', fontSize: '0.95rem', fontFamily: "'Sora', sans-serif" }}>
                  Demo
                </Typography>
                <Typography variant="body2" sx={{ color: '#6b6880', fontSize: '0.8rem', textAlign: 'center', fontFamily: "'Sora', sans-serif" }}>
                  {project.localEmbed ? 'View the interactive graph simulation' : 'Open live demo'}
                </Typography>
              </Box>
            )}

            {project.githubUrl && (
              <Box
                component="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  ...CARD_STYLE,
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  justifyContent: 'center', gap: 1.5, cursor: 'pointer',
                  textDecoration: 'none', transition: 'all 0.25s ease',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(26,21,46,0.12)' },
                }}
              >
                <Box sx={{ width: 48, height: 48, borderRadius: '50%', bgcolor: '#ffffff', border: '1px solid #e4e4ea', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <GitHubIcon sx={{ color: '#1a152e', fontSize: 22 }} />
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1a152e', fontSize: '0.95rem', fontFamily: "'Sora', sans-serif" }}>
                  Source Code
                </Typography>
                <Typography variant="body2" sx={{ color: '#6b6880', fontSize: '0.8rem', textAlign: 'center', fontFamily: "'Sora', sans-serif" }}>
                  View repository on GitHub
                </Typography>
              </Box>
            )}
          </Box>
        )}
      </Container>

      {/* Graph Simulation */}
      {project.localEmbed && (
        <Box id="simulation" sx={{ px: { xs: 2, md: 4 }, pb: 6 }}>
          <Box sx={{ bgcolor: '#ffffff', border: '1px solid #e4e4ea', borderRadius: 2, overflow: 'hidden', boxShadow: '0 2px 12px rgba(26,21,46,0.06)' }}>
            <Box sx={{ px: 3, pt: 3, pb: 1.5, borderBottom: '1px solid #e4e4ea', textAlign: 'center' }}>
              <Typography variant="subtitle1" sx={{ ...SECTION_TITLE_STYLE, fontSize: '1rem', mb: 1 }}>
                {t('portfolio.modal.graphSimulation')}
              </Typography>
              <Typography variant="body2" sx={{ color: '#6b6880', fontFamily: "'Sora', sans-serif" }}>
                {t('portfolio.modal.simulationDesc')}
              </Typography>
            </Box>
            <iframe
              src={project.localEmbed}
              title={`${project.title} Graph Simulation`}
              width="100%"
              style={{ border: 'none', display: 'block', height: 'calc(100vh - 80px)' }}
              allow="clipboard-write"
              allowFullScreen
            />

            {project.simulationNotes && (
              <Box sx={{ p: { xs: 3, md: 4 }, borderTop: '1px solid #e4e4ea' }}>

                <Typography variant="subtitle1" sx={{ ...SECTION_TITLE_STYLE, mb: 2 }}>
                  Interaction Modes
                </Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 2, mb: 3.5 }}>
                  {project.simulationNotes.modes.map((mode) => (
                    <Box key={mode.name} sx={{ bgcolor: '#ffffff', border: '1px solid #e4e4ea', borderRadius: 2, p: 2.5, borderLeft: '3px solid #82b440' }}>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: '#1a152e', mb: 1, fontFamily: "'Sora', sans-serif" }}>
                        {mode.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#2d2840', lineHeight: 1.75, fontFamily: "'Sora', sans-serif" }}>
                        {mode.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Typography variant="subtitle1" sx={{ ...SECTION_TITLE_STYLE, mb: 2 }}>
                  Edge Types — 3 Base Relationships + 3 Reverse Edges
                </Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 1.5, mb: 3.5 }}>
                  {project.simulationNotes.edgeTypes.map((edge, i) => (
                    <Box key={i} sx={{ bgcolor: '#ffffff', border: '1px solid #e4e4ea', borderRadius: 2, p: 2 }}>
                      <Typography
                        variant="body2"
                        sx={{ fontFamily: "'Fira Code', monospace", fontSize: '0.8rem', color: '#1a152e', fontWeight: 600, mb: 0.75 }}
                      >
                        {edge.source}{' '}
                        <Box component="span" sx={{ color: '#2d2840', fontWeight: 600 }}>
                          —{edge.relation}→
                        </Box>{' '}
                        {edge.target}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#2d2840', lineHeight: 1.65, fontFamily: "'Sora', sans-serif" }}>
                        {edge.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ bgcolor: '#f2f1f3', border: '1px solid #e4e4ea', borderRadius: 2, p: 2.5, mb: 3 }}>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#1a152e', mb: 1, textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: "'Sora', sans-serif" }}>
                    Why Reverse Edges?
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#2d2840', lineHeight: 1.8, fontFamily: "'Sora', sans-serif" }}>
                    {project.simulationNotes.reverseEdgeNote}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start', bgcolor: '#fffbeb', border: '1px solid #fde68a', borderRadius: 2, p: 2 }}>
                  <InfoOutlinedIcon sx={{ color: '#d97706', fontSize: 18, mt: 0.2, flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ color: '#92400e', lineHeight: 1.7, fontFamily: "'Sora', sans-serif" }}>
                    {project.simulationNotes.syntheticDataNote}
                  </Typography>
                </Box>

              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProjectDetail;
