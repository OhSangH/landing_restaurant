import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const LayoutWrapper = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: '#f3eadc',
  color: theme.palette.text.primary,
}));

export const MainContent = styled(Box)(({ theme }) => ({
  flex: 1,
  width: '100%',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(8),
}));
