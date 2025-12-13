import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DetailWrapper = styled('section')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '5fr 4fr',
  gap: theme.spacing(4),
  alignItems: 'stretch',
  padding: theme.spacing(3),
  borderRadius: 20,
  backgroundColor: '#fdfbf7',
  boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const DetailImage = styled(Box)(({ theme }) => ({
  minHeight: 420,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: 18,
  boxShadow: '0 24px 60px rgba(0,0,0,0.12)',
  [theme.breakpoints.down('md')]: {
    minHeight: 260,
  },
}));

export const DetailContent = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  borderRadius: 16,
  backgroundColor: '#ffffff',
  boxShadow: '0 14px 38px rgba(0,0,0,0.08)',
  minHeight: '100%',
}));

export const MetaRow = styled(Stack)(({ theme }) => ({
  direction: 'row',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
}));

export const AllergenBox = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: 12,
  backgroundColor: '#f7f2eb',
  border: '1px solid rgba(0,0,0,0.04)',
}));

export const PriceBox = styled(Stack)(({ theme }) => ({
  alignSelf: 'flex-end',
  padding: theme.spacing(2.5, 3),
  borderRadius: 14,
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  boxShadow: '0 18px 38px rgba(181,58,50,0.25)',
  minWidth: 160,
  textAlign: 'right',
}));
