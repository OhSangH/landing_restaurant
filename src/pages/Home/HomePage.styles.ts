import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HomeWrapper = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(6),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(4),
}));
