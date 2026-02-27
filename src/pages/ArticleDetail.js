import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { articles } from '../data/articles';

const ArticleDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 2, color: '#1a152e', fontFamily: "'Sora', sans-serif" }}>Article not found</Typography>
          <Button
            onClick={() => navigate('/')}
            variant="contained"
            sx={{ bgcolor: '#1a152e', color: '#ffffff', fontFamily: "'Sora', sans-serif", '&:hover': { bgcolor: '#13102a' } }}
          >
            Go Home
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#ffffff' }}>
      {/* Header */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(160deg, #1a152e 0%, #2d2840 60%, #1a152e 100%)',
          overflow: 'hidden',
          pt: { xs: 10, md: 12 },
          pb: { xs: 6, md: 8 },
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'url("https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=1920") center/cover',
            opacity: 0.05,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            sx={{
              color: 'rgba(255, 255, 255, 0.5)',
              mb: 4, px: 0,
              fontFamily: "'Sora', sans-serif",
              '&:hover': { color: '#ffffff', bgcolor: 'transparent' },
            }}
          >
            Back
          </Button>

          <Stack direction="row" spacing={1.5} sx={{ mb: 2.5 }} flexWrap="wrap" gap={1}>
            <Chip
              label={`${article.type} · ${article.year}`}
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.75)',
                fontWeight: 600,
                fontSize: '0.78rem',
                fontFamily: "'Sora', sans-serif",
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            />
            {article.status && (
              <Chip
                label={article.status}
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.12)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  border: '1px solid rgba(255,255,255,0.2)',
                  fontFamily: "'Sora', sans-serif",
                }}
              />
            )}
            {article.ieeeUrl && (
              <Chip
                label="IEEE Xplore"
                sx={{ bgcolor: '#00629B', color: '#fff', fontWeight: 700, fontSize: '0.78rem', fontFamily: "'Sora', sans-serif" }}
              />
            )}
          </Stack>

          <Typography
            variant="h1"
            sx={{
              color: '#ffffff',
              fontSize: { xs: '1.5rem', md: '2.2rem' },
              fontWeight: 700,
              lineHeight: 1.3,
              maxWidth: 860,
              mb: 3,
              fontFamily: "'Sora', sans-serif",
            }}
          >
            {article.title}
          </Typography>

          <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', mb: 0.5, fontFamily: "'Sora', sans-serif" }}>
            {article.authors}
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', fontFamily: "'Sora', sans-serif" }}>
            {article.conference}{article.location ? ` · ${article.location}` : ''}
          </Typography>
        </Container>
      </Box>

      {/* Body */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        {/* Abstract */}
        <Box
          sx={{
            bgcolor: '#ffffff',
            border: '1px solid #e4e4ea',
            borderRadius: 2,
            p: { xs: 3, md: 5 },
            mb: 4,
            boxShadow: '0 2px 12px rgba(26,21,46,0.06)',
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: '#1a152e', mb: 2.5, fontSize: '1.2rem', fontFamily: "'Sora', sans-serif" }}
          >
            Abstract
          </Typography>
          {article.abstract ? (
            <Typography variant="body1" sx={{ color: '#2d2840', lineHeight: 1.9, fontSize: '1rem', fontFamily: "'Sora', sans-serif" }}>
              {article.abstract}
            </Typography>
          ) : (
            <Typography
              variant="body1"
              sx={{ color: '#6b6880', lineHeight: 1.9, fontStyle: 'italic', fontSize: '1rem', fontFamily: "'Sora', sans-serif" }}
            >
              Abstract will be added soon.
            </Typography>
          )}
        </Box>

        {/* Link cards */}
        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
          {/* IEEE Xplore */}
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                bgcolor: '#ffffff',
                border: '1px solid #e4e4ea',
                borderRadius: 2,
                p: { xs: 3, md: 4 },
                height: '100%',
                boxShadow: '0 2px 12px rgba(26,21,46,0.06)',
                display: 'flex',
                flexDirection: 'column',
                opacity: article.ieeeUrl ? 1 : 0.55,
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                <Box
                  sx={{
                    width: 48, height: 48, borderRadius: '50%',
                    bgcolor: '#00629B',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}
                >
                  <MenuBookIcon sx={{ color: '#fff', fontSize: 22 }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: '#1a152e', fontSize: '1rem', fontFamily: "'Sora', sans-serif" }}>
                    IEEE Xplore
                  </Typography>
                  <Typography sx={{ color: '#6b6880', fontSize: '0.8rem', fontFamily: "'Sora', sans-serif" }}>
                    Official publisher page
                  </Typography>
                </Box>
              </Stack>

              <Typography variant="body2" sx={{ color: '#2d2840', lineHeight: 1.7, flexGrow: 1, mb: 3, fontFamily: "'Sora', sans-serif" }}>
                Access the full paper through IEEE Xplore Digital Library — the world's primary
                resource for technical literature in electrical engineering and computer science.
              </Typography>

              <Button
                variant="contained"
                endIcon={<OpenInNewIcon fontSize="small" />}
                href={article.ieeeUrl || undefined}
                target="_blank"
                rel="noopener noreferrer"
                disabled={!article.ieeeUrl}
                sx={{
                  bgcolor: '#00629B',
                  color: '#fff',
                  fontWeight: 600,
                  borderRadius: 2,
                  alignSelf: 'flex-start',
                  fontFamily: "'Sora', sans-serif",
                  '&:hover': { bgcolor: '#004f7c' },
                  '&.Mui-disabled': { bgcolor: '#e4e4ea', color: '#6b6880' },
                }}
              >
                {article.ieeeUrl ? 'Open in IEEE Xplore' : 'Coming Soon'}
              </Button>
            </Box>
          </Box>

          {/* ResearchGate */}
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                bgcolor: '#ffffff',
                border: '1px solid #e4e4ea',
                borderRadius: 2,
                p: { xs: 3, md: 4 },
                height: '100%',
                boxShadow: '0 2px 12px rgba(26,21,46,0.06)',
                display: 'flex',
                flexDirection: 'column',
                opacity: article.researchGateUrl ? 1 : 0.55,
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                <Box
                  sx={{
                    width: 48, height: 48, borderRadius: '50%',
                    bgcolor: '#40BA9B',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}
                >
                  <Box
                    component="img"
                    src="/researchgate-icon.webp"
                    alt="ResearchGate"
                    sx={{ width: 26, height: 26, objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: '#1a152e', fontSize: '1rem', fontFamily: "'Sora', sans-serif" }}>
                    ResearchGate
                  </Typography>
                  <Typography sx={{ color: '#6b6880', fontSize: '0.8rem', fontFamily: "'Sora', sans-serif" }}>
                    Academic network profile
                  </Typography>
                </Box>
              </Stack>

              <Typography variant="body2" sx={{ color: '#2d2840', lineHeight: 1.7, flexGrow: 1, mb: 3, fontFamily: "'Sora', sans-serif" }}>
                View the publication on ResearchGate — a professional network for scientists and
                researchers to share papers, ask questions, and find collaborators.
              </Typography>

              <Button
                variant="contained"
                endIcon={<OpenInNewIcon fontSize="small" />}
                href={article.researchGateUrl || undefined}
                target="_blank"
                rel="noopener noreferrer"
                disabled={!article.researchGateUrl}
                sx={{
                  bgcolor: '#40BA9B',
                  color: '#fff',
                  fontWeight: 600,
                  borderRadius: 2,
                  alignSelf: 'flex-start',
                  fontFamily: "'Sora', sans-serif",
                  '&:hover': { bgcolor: '#33a086' },
                  '&.Mui-disabled': { bgcolor: '#e4e4ea', color: '#6b6880' },
                }}
              >
                {article.researchGateUrl ? 'Open in ResearchGate' : 'Coming Soon'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ArticleDetail;
