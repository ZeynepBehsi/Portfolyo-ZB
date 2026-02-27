import { Box, Container, Typography } from '@mui/material';

const SR = "'Sora', sans-serif";

const CATEGORIES = [
  {
    label: 'Languages',
    items: [
      { name: 'Python',       cls: 'devicon-python-plain colored'           },
      { name: 'R',            cls: 'devicon-r-plain colored'                },
      { name: 'SQL',          abbr: 'SQL'                                   },
      { name: 'React',        cls: 'devicon-react-original colored'         },
      { name: 'Node.js',      cls: 'devicon-nodejs-plain colored'           },
    ],
  },
  {
    label: 'AI / ML / Deep Learning',
    items: [
      { name: 'PyTorch',      cls: 'devicon-pytorch-original colored'       },
      { name: 'TensorFlow',   cls: 'devicon-tensorflow-original colored'    },
      { name: 'Keras',        cls: 'devicon-keras-plain colored'            },
      { name: 'scikit-learn', cls: 'devicon-scikitlearn-plain colored'      },
      { name: 'Hugging Face', abbr: 'HF'                                    },
      { name: 'LangChain',    abbr: 'LC'                                    },
      { name: 'PyG',          abbr: 'PyG'                                   },
      { name: 'NetworkX',     abbr: 'NX'                                    },
    ],
  },
  {
    label: 'Data Science & Visualization',
    items: [
      { name: 'Pandas',       cls: 'devicon-pandas-plain colored'           },
      { name: 'NumPy',        cls: 'devicon-numpy-plain colored'            },
      { name: 'Matplotlib',   cls: 'devicon-matplotlib-plain colored'       },
      { name: 'Plotly',       cls: 'devicon-plotly-plain colored'           },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name: 'PostgreSQL',   cls: 'devicon-postgresql-plain colored'       },
      { name: 'MongoDB',      cls: 'devicon-mongodb-plain colored'          },
      { name: 'Pinecone',     abbr: 'PC'                                    },
    ],
  },
  {
    label: 'Tools & Platforms',
    items: [
      { name: 'FastAPI',      cls: 'devicon-fastapi-plain colored'          },
      { name: 'Jupyter',      cls: 'devicon-jupyter-plain colored'          },
      { name: 'Git',          cls: 'devicon-git-plain colored'              },
      { name: 'Docker',       cls: 'devicon-docker-plain colored'           },
      { name: 'VS Code',      cls: 'devicon-vscode-plain colored'           },
    ],
  },
];

const TechItem = ({ name, cls, abbr }) => (
  <Box
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
    {cls ? (
      <Box
        component="i"
        className={cls}
        sx={{ fontSize: '1.5rem', lineHeight: 1, flexShrink: 0 }}
      />
    ) : (
      <Box
        sx={{
          width: '1.5rem',
          height: '1.5rem',
          borderRadius: '4px',
          bgcolor: 'rgba(130,180,64,0.15)',
          border: '1px solid rgba(130,180,64,0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          fontSize: abbr.length > 2 ? '0.45rem' : '0.55rem',
          fontWeight: 800,
          color: '#82b440',
          letterSpacing: '-0.02em',
          fontFamily: SR,
        }}
      >
        {abbr}
      </Box>
    )}
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
);

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
      {/* Header — title only */}
      <Box sx={{ mb: 8, pb: 6, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
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
      </Box>

      {/* Category grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' },
          gap: { xs: 5, md: 5 },
        }}
      >
        {CATEGORIES.map(({ label, items }) => (
          <Box key={label}>
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

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {items.map((item) => (
                <TechItem key={item.name} {...item} />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

export default TechStack;
