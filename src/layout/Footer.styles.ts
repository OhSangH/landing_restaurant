import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterContainer = styled(Box)(({ theme }) => ({
  marginTop: 'auto',
  padding: theme.spacing(5, 0),
  background: '#111010',
  color: '#f7f4ef',
}));

export const FooterContent = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
}));

export const FooterRow = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));
