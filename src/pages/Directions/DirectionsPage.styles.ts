import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DirectionsWrapper = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(3),
}));

export const DirectionsGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gap: theme.spacing(3),
  alignItems: 'stretch',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const MapCard = styled('div')(({ theme }) => ({
  gridColumn: 'span 7',
  backgroundColor: '#ffffff',
  borderRadius: 20,
  padding: theme.spacing(2),
  boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
  [theme.breakpoints.down('md')]: {
    gridColumn: 'span 1',
  },
}));

export const StepsCard = styled('div')(({ theme }) => ({
  gridColumn: 'span 5',
  backgroundColor: '#ffffff',
  borderRadius: 20,
  padding: theme.spacing(3),
  boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
  [theme.breakpoints.down('md')]: {
    gridColumn: 'span 1',
  },
}));
