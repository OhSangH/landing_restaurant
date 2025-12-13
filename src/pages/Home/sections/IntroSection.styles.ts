import { Box, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const IntroSectionWrapper = styled('section')(({ theme }) => ({
  background: '#f7f0e2',
  borderRadius: 24,
  padding: theme.spacing(6),
  display: 'grid',
  gridTemplateColumns: '5fr 7fr',
  gap: theme.spacing(4),
  alignItems: 'stretch',
  boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
  overflow: 'hidden',
  minHeight: 520,
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '1fr',
    minHeight: 'auto',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
  },
}));

export const IntroContent = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(3),
  justifyContent: 'center',
  maxWidth: 540,
}));

export const HeroTag = styled(Chip)(({ theme }) => ({
  alignSelf: 'flex-start',
  backgroundColor: 'rgba(181,58,50,0.12)',
  color: theme.palette.primary.main,
  fontWeight: 700,
  letterSpacing: '-0.01em',
}));

export const HeroActions = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(1.5),
  flexWrap: 'wrap',
}));

export const HeroImage = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundImage:
    'url("https://images.pexels.com/photos/2956954/pexels-photo-2956954.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=1")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: 20,
  minHeight: 400,
  boxShadow: '0 30px 80px rgba(0,0,0,0.12)',
}));

export const StatsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
  gap: theme.spacing(1.5),
}));

export const StatCard = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: 14,
  backgroundColor: '#ffffff',
  boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
  border: '1px solid rgba(0,0,0,0.04)',
}));
