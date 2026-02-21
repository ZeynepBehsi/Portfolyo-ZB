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
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
  {
    id: 1,
    title: 'Proje Adı 1',
    description: 'Proje açıklaması buraya gelecek.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    tags: ['React', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Proje Adı 2',
    description: 'İkinci proje açıklaması.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    tags: ['Figma', 'UI/UX'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Proje Adı 3',
    description: 'Üçüncü proje açıklaması.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800',
    tags: ['Python', 'AI'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Proje Adı 4',
    description: 'Dördüncü proje açıklaması.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    tags: ['TypeScript', 'Next.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Proje Adı 5',
    description: 'Beşinci proje açıklaması.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    tags: ['Vue.js', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Proje Adı 6',
    description: 'Altıncı proje açıklaması.',
    image: 'https://images.unsplash.com/photo-1537432376149-e84978a29f5c?w=800',
    tags: ['Express', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 7,
    title: 'Proje Adı 7',
    description: 'Yedinci proje açıklaması.',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800',
    tags: ['React Native'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 8,
    title: 'Proje Adı 8',
    description: 'Sekizinci proje açıklaması.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    tags: ['Python', 'TensorFlow'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const ITEMS_PER_PAGE = 4;

const Portfolio = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <Box
      id="portfolio"
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
          Projelerim
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', color: '#666', mb: 5 }}
        >
          Çalışmalarımdan bazı örnekler
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
          {currentProjects.map((project) => (
            <Card
              key={project.id}
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
                image={project.image}
                alt={project.title}
                sx={{ height: 180, objectFit: 'cover' }}
              />
              <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a', mb: 0.5, fontSize: '1rem' }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', mb: 1.5, fontSize: '0.85rem' }}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={0.5} sx={{ mb: 1.5 }}>
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{ bgcolor: '#014D4E', color: '#fff', fontSize: '0.7rem', height: 24 }}
                    />
                  ))}
                </Stack>
                <Stack direction="row" spacing={2} sx={{ mt: 'auto' }}>
                  <Button size="small" startIcon={<LaunchIcon />} href={project.liveUrl} sx={{ color: '#014D4E', p: 0 }}>
                    Demo
                  </Button>
                  <Button size="small" startIcon={<GitHubIcon />} href={project.githubUrl} sx={{ color: '#666', p: 0 }}>
                    Kod
                  </Button>
                </Stack>
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

export default Portfolio;
