import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { articles } from '../../data/articles';

const SR = "'Sora', sans-serif";

const Articles = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box id="articles" component="section" sx={{ bgcolor: '#f2f1f3', py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 8, pb: 6, borderBottom: '1px solid #e4e4ea' }}>
          <Typography
            variant="overline"
            sx={{ display: 'block', color: '#6b6880', letterSpacing: '0.15em', mb: 2, fontFamily: SR }}
          >
            Research
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { md: 'flex-end' },
              gap: 3,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: SR,
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#1a152e',
              }}
            >
              {t('articles.title')}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontFamily: SR, color: '#2d2840', maxWidth: 360, lineHeight: 1.75, fontSize: '1rem' }}
            >
              {t('articles.subtitle')}
            </Typography>
          </Box>
        </Box>

        {/* 2-column card grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
          }}
        >
          {articles.map((article) => (
            <Box
              key={article.id}
              onClick={() => navigate(`/articles/${article.slug}`)}
              sx={{
                bgcolor: '#ffffff',
                border: '1px solid #e4e4ea',
                borderRadius: 2,
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 2px 12px rgba(26,21,46,0.05)',
                transition: 'all 0.25s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 16px 40px rgba(26,21,46,0.12)',
                  borderColor: '#82b440',
                  '& .article-arrow': { transform: 'translateX(4px)' },
                },
              }}
            >
              {/* Cover image */}
              <Box
                sx={{
                  width: '100%',
                  height: 200,
                  overflow: 'hidden',
                  flexShrink: 0,
                  bgcolor: '#e4e4ea',
                }}
              >
                <Box
                  component="img"
                  src={article.image}
                  alt={article.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                    '&:hover': { transform: 'scale(1.04)' },
                  }}
                />
              </Box>

              {/* Card content */}
              <Box sx={{ p: { xs: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Meta row */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 0.75, mb: 1.5 }}>
                  <Typography
                    sx={{
                      fontFamily: SR,
                      color: '#9b98a8',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {article.type} · {article.year}
                  </Typography>
                  {article.status && (
                    <Chip
                      label={article.status}
                      size="small"
                      sx={{
                        bgcolor: '#ffffff',
                        color: '#2d2840',
                        border: '1px solid #e4e4ea',
                        fontWeight: 700,
                        fontSize: '0.65rem',
                        height: 20,
                        fontFamily: SR,
                      }}
                    />
                  )}
                  {article.ieeeUrl && (
                    <Chip
                      label="IEEE Xplore"
                      size="small"
                      sx={{
                        bgcolor: '#82b440',
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '0.65rem',
                        height: 20,
                        fontFamily: SR,
                      }}
                    />
                  )}
                </Box>

                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: SR,
                    fontWeight: 700,
                    color: '#1a152e',
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    lineHeight: 1.45,
                    mb: 1,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {article.title}
                </Typography>

                {/* Authors + conference */}
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: SR,
                    color: '#6b6880',
                    fontSize: '0.8rem',
                    mb: 1.5,
                    lineHeight: 1.5,
                  }}
                >
                  {article.authors} — {article.conference}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: SR,
                    color: '#2d2840',
                    fontSize: '0.875rem',
                    lineHeight: 1.75,
                    flex: 1,
                  }}
                >
                  {article.description}
                </Typography>

                {/* Read more row */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    mt: 2.5,
                    pt: 2,
                    borderTop: '1px solid #f2f1f3',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: SR,
                      color: '#1a152e',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {t('articles.readMore')}
                  </Typography>
                  <ArrowForwardIcon
                    className="article-arrow"
                    sx={{ color: '#1a152e', fontSize: 15, transition: 'transform 0.2s ease' }}
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Articles;
