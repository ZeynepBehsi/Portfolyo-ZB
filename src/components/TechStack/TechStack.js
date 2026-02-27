import { Box, Container, Typography } from '@mui/material';

const SR = "'Sora', sans-serif";

const CATEGORIES = [
  {
    label: 'Languages',
    items: [
      { name: 'Python',       cls: 'devicon-python-plain colored'        },
      { name: 'R',            cls: 'devicon-r-plain colored'             },
      { name: 'SQL',          cls: 'devicon-mysql-plain colored'         },
    ],
  },
  {
    label: 'ML & AI',
    items: [
      { name: 'PyTorch',      cls: 'devicon-pytorch-original colored'    },
      { name: 'TensorFlow',   cls: 'devicon-tensorflow-original colored' },
      { name: 'Scikit-learn', cls: 'devicon-scikitlearn-plain colored'   },
    ],
  },
  {
    label: 'Data & Graph',
    items: [
      { name: 'Pandas',       cls: 'devicon-pandas-plain colored'        },
      { name: 'NumPy',        cls: 'devicon-numpy-plain colored'         },
      { name: 'Neo4j',        cls: 'devicon-neo4j-plain colored'         },
    ],
  },
  {
    label: 'Tools & DevOps',
    items: [
      { name: 'Docker',       cls: 'devicon-docker-plain colored'        },
      { name: 'Git',          cls: 'devicon-git-plain colored'           },
      { name: 'Jupyter',      cls: 'devicon-jupyter-plain colored'       },
      { name: 'React',        cls: 'devicon-react-original colored'      },
    ],
  },
];

const TechStack = () => (
  <Box
    id="techstack"
    component="section"
    sx={{
      bgcolor: '#1a152e',
      py: { xs: 8, md: 11 },
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      },
    }}
  >
    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      {/* Header */}
      <Box
        sx={{
          mb: 8,
          pb: 6,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
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
            color: '#ffffff',
          }}
        >
          Technologies
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: SR,
            color: 'rgba(255,255,255,0.45)',
            maxWidth: 360,
            lineHeight: 1.75,
            fontSize: '1rem',
          }}
        >
          Tools and frameworks I use — from ML pipelines to graph-based AI systems.
        </Typography>
      </Box>

      {/* Category grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
          gap: { xs: 4, md: 5 },
        }}
      >
        {CATEGORIES.map(({ label, items }) => (
          <Box key={label}>
            {/* Category label */}
            <Typography
              variant="overline"
              sx={{
                display: 'block',
                fontFamily: SR,
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: 'rgba(255,255,255,0.35)',
                mb: 2.5,
              }}
            >
              {label}
            </Typography>

            {/* Icons */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {items.map(({ name, cls }) => (
                <Box
                  key={name}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    bgcolor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 1.5,
                    px: 1.75,
                    py: 1.25,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(130,180,64,0.3)',
                    },
                  }}
                >
                  <Box
                    component="i"
                    className={cls}
                    sx={{ fontSize: '1.6rem', lineHeight: 1, flexShrink: 0 }}
                  />
                  <Typography
                    sx={{
                      fontFamily: SR,
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.75)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

export default TechStack;
