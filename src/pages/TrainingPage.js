import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SchoolIcon from '@mui/icons-material/School';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import HubIcon from '@mui/icons-material/Hub';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Navbar from '../components/Navbar/Navbar';

const SR = "'Sora', sans-serif";

const PROGRAM_META = {
  ds: {
    Icon: SchoolIcon,
    tags: ['Python', 'Statistics', 'ML Fundamentals', 'Real-world Projects', 'Career Guidance'],
  },
  ml: {
    Icon: AccountTreeIcon,
    tags: ['Supervised Learning', 'Neural Networks', 'Deep Learning', 'Model Deployment', 'Hands-on Projects'],
  },
  ai: {
    Icon: PsychologyIcon,
    tags: ['AI Tools & Frameworks', 'Prompt Engineering', 'LLM Workflows', 'Strategic Learning', 'Accelerated Growth'],
  },
  career: {
    Icon: AutoFixHighIcon,
    tags: ['Portfolio Development', '1:1 Mentorship', 'Interview Preparation', 'ML Workflow Integration', 'Career Transition'],
  },
  rag: {
    Icon: HubIcon,
    tags: ['LangChain', 'LLM Agents', 'RAG Pipelines', 'Vector Databases', 'Tool-Use Frameworks', 'Pinecone'],
  },
  llm: {
    Icon: AutoAwesomeIcon,
    tags: ['LLM APIs', 'Prompt Engineering', 'Fine-tuning', 'Model Evaluation', 'Generative AI Applications'],
  },
};

const FORMAT_ITEMS = [
  { Icon: PersonOutlineIcon, labelKey: 'individual', desc: 'Tailored 1:1 sessions at your own pace' },
  { Icon: GroupsIcon,        labelKey: 'group',      desc: 'Cohort-based group learning programs'  },
  { Icon: WorkspacePremiumIcon, labelKey: 'consulting', desc: 'Project consulting & career mentorship' },
];

const programKeys = ['ds', 'ml', 'ai', 'career', 'rag', 'llm'];

const TrainingPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#ffffff' }}>
      <Navbar />

      {/* ── Dark Hero Header ── */}
      <Box
        sx={{
          pt: '80px',
          position: 'relative',
          height: { xs: 240, md: 300 },
          background: 'linear-gradient(160deg, #1a152e 0%, #2d2840 60%, #1a152e 100%)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pb: 4 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            sx={{
              color: 'rgba(255,255,255,0.55)',
              mb: 2,
              p: 0,
              fontSize: '0.82rem',
              fontFamily: SR,
              '&:hover': { color: '#ffffff', bgcolor: 'transparent' },
            }}
          >
            Back
          </Button>
          <Typography
            variant="h3"
            sx={{
              color: '#ffffff',
              fontWeight: 700,
              fontSize: { xs: '1.9rem', md: '2.6rem' },
              lineHeight: 1.15,
              fontFamily: SR,
              letterSpacing: '-0.03em',
            }}
          >
            {t('training.title')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.55)',
              mt: 1,
              fontSize: '1rem',
              fontFamily: SR,
            }}
          >
            {t('training.sideDesc')}
          </Typography>
        </Container>
      </Box>

      {/* ── Programs ── */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Typography
          variant="overline"
          sx={{
            display: 'block',
            color: '#82b440',
            letterSpacing: '0.15em',
            fontSize: '0.7rem',
            fontWeight: 700,
            mb: 1,
            fontFamily: SR,
          }}
        >
          Programs
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: SR,
            fontWeight: 700,
            color: '#1a152e',
            fontSize: { xs: '1.6rem', md: '2rem' },
            letterSpacing: '-0.02em',
            mb: 5,
          }}
        >
          What I Teach
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 3,
            mb: 8,
          }}
        >
          {programKeys.map((key) => {
            const { Icon, tags } = PROGRAM_META[key];
            return (
              <Box
                key={key}
                sx={{
                  bgcolor: '#ffffff',
                  border: '1px solid #e4e4ea',
                  borderRadius: 2,
                  p: { xs: 3, md: 4 },
                  boxShadow: '0 2px 12px rgba(26,21,46,0.05)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(26,21,46,0.10)',
                    borderColor: '#82b440',
                  },
                }}
              >
                {/* Icon + title row */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      bgcolor: 'rgba(130,180,64,0.10)',
                      border: '1px solid rgba(130,180,64,0.28)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon sx={{ color: '#82b440', fontSize: 22 }} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: SR,
                      fontWeight: 700,
                      color: '#1a152e',
                      fontSize: '1rem',
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {t(`training.programs.${key}.title`)}
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: SR,
                    color: '#4a4760',
                    lineHeight: 1.85,
                    fontSize: '0.9rem',
                    mb: 3,
                  }}
                >
                  {t(`training.programs.${key}.description`)}
                </Typography>

                {/* Tags */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                  {tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: '#f5f7fd',
                        color: '#2d2840',
                        border: '1px solid #e4e4ea',
                        fontSize: '0.72rem',
                        height: 24,
                        fontWeight: 500,
                        fontFamily: SR,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* ── Format section ── */}
        <Box
          sx={{
            bgcolor: '#1a152e',
            borderRadius: 3,
            p: { xs: 4, md: 6 },
            mb: 8,
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
          <Typography
            variant="h5"
            sx={{
              fontFamily: SR,
              fontWeight: 700,
              color: '#ffffff',
              fontSize: { xs: '1.3rem', md: '1.6rem' },
              letterSpacing: '-0.02em',
              mb: 4,
              position: 'relative',
              zIndex: 1,
            }}
          >
            How We Work Together
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' },
              gap: 3,
              position: 'relative',
              zIndex: 1,
            }}
          >
            {FORMAT_ITEMS.map(({ Icon, labelKey, desc }) => (
              <Box
                key={labelKey}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 2,
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    bgcolor: 'rgba(130,180,64,0.12)',
                    border: '1px solid rgba(130,180,64,0.28)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon sx={{ color: '#82b440', fontSize: 22 }} />
                </Box>
                <Typography
                  sx={{
                    fontFamily: SR,
                    fontWeight: 700,
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    textTransform: 'capitalize',
                  }}
                >
                  {labelKey === 'individual' ? 'Individual 1:1'
                    : labelKey === 'group' ? 'Group Classes'
                    : 'Consulting'}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: SR,
                    color: 'rgba(255,255,255,0.55)',
                    fontSize: '0.85rem',
                    lineHeight: 1.7,
                  }}
                >
                  {desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── CTA ── */}
        <Box sx={{ textAlign: 'center', pb: 4 }}>
          <Typography
            sx={{
              fontFamily: SR,
              fontWeight: 700,
              fontSize: { xs: '1.4rem', md: '1.8rem' },
              color: '#1a152e',
              letterSpacing: '-0.02em',
              mb: 1.5,
            }}
          >
            Ready to get started?
          </Typography>
          <Typography
            sx={{
              fontFamily: SR,
              color: '#6b6880',
              fontSize: '1rem',
              mb: 4,
            }}
          >
            Book a free consultation session to discuss your goals.
          </Typography>
          <Button
            href="#contact"
            onClick={() => navigate('/#contact')}
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#1a152e',
              color: '#ffffff',
              px: 5,
              py: 1.75,
              fontSize: '0.78rem',
              fontWeight: 700,
              borderRadius: 9999,
              fontFamily: SR,
              letterSpacing: '0.1em',
              textTransform: 'none',
              boxShadow: 'none',
              transition: 'background-color 0.25s ease',
              '&:hover': { bgcolor: '#82b440', boxShadow: 'none' },
            }}
          >
            {t('training.cta')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TrainingPage;
