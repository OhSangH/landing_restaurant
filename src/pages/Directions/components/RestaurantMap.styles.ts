import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MapWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 420,
  borderRadius: 16,
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    height: 320,
  },
}));
