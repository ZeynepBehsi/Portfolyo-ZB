import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  Pagination,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const articles = [
  {
    id: 1,
    title: 'Makale Başlığı 1',
    summary: 'Makalenin kısa özeti burada yer alacak. Yayın platformu veya dergi adı hakkında bilgi.',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800',
    category: 'Araştırma',
    date: '2024',
    url: '#',
  },
  {
    id: 2,
    title: 'Makale Başlığı 2',
    summary: 'İkinci makalenin özeti. Araştırma konusu ve bulgular hakkında kısa bilgi verilecek.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    category: 'Blog',
    date: '2024',
    url: '#',
  },
  {
    id: 3,
    title: 'Makale Başlığı 3',
    summary: 'Üçüncü yayının özeti. Blog yazısı veya akademik makale olabilir.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
    category: 'Akademik',
    date: '2023',
    url: '#',
  },
  {
    id: 4,
    title: 'Makale Başlığı 4',
    summary: 'Dördüncü makale özeti. Teknoloji veya bilim konulu içerik detayları.',
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800',
    category: 'Teknoloji',
    date: '2023',
    url: '#',
  },
  {
    id: 5,
    title: 'Makale Başlığı 5',
    summary: 'Beşinci makale özeti. Kariyer veya kişisel gelişim konulu içerik.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800',
    category: 'Kariyer',
    date: '2023',
    url: '#',
  },
  {
    id: 6,
    title: 'Makale Başlığı 6',
    summary: 'Altıncı makale özeti. Yazılım geliştirme best practices konusu.',
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800',
    category: 'Yazılım',
    date: '2022',
    url: '#',
  },
];

const ITEMS_PER_PAGE = 4;

const Articles = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentArticles = articles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <Box
      id="articles"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#fff',
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            color: '#1a1a1a',
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            textTransform: 'uppercase',
            mb: 1,
          }}
        >
          Makaleler & Yayınlar
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', color: '#666', mb: 5 }}
        >
          Yayınlanmış yazılarım ve araştırmalarım
        </Typography>

        {/* 2x2 Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 3,
            mb: 4,
          }}
        >
          {currentArticles.map((article) => (
            <Card
              key={article.id}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                bgcolor: '#fff',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(1, 77, 78, 0.15)',
                },
              }}
            >
              <CardMedia
                component="img"
                image={article.image}
                alt={article.title}
                sx={{ height: 180, objectFit: 'cover' }}
              />
              <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                  <Chip
                    label={article.category}
                    size="small"
                    sx={{ bgcolor: '#014D4E', color: '#fff', fontSize: '0.7rem', height: 24 }}
                  />
                  <Typography variant="body2" sx={{ color: '#999', fontSize: '0.8rem' }}>
                    {article.date}
                  </Typography>
                </Stack>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a', mb: 0.5, fontSize: '1rem' }}>
                  {article.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', mb: 1.5, fontSize: '0.85rem' }}>
                  {article.summary}
                </Typography>
                <Box sx={{ mt: 'auto' }}>
                  <Button
                    size="small"
                    endIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
                    href={article.url}
                    target="_blank"
                    sx={{ color: '#014D4E', p: 0 }}
                  >
                    Devamını Oku
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, v) => setPage(v)}
              size="large"
              sx={{
                '& .MuiPaginationItem-root': { color: '#014D4E' },
                '& .Mui-selected': { bgcolor: '#014D4E !important', color: '#fff' },
              }}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Articles;
