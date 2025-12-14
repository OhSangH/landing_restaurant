import { List, ListItem, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StepsWrapper = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
}));

export const StepsList = styled(List)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(1),
  padding: 0,
}));

export const StepItem = styled(ListItem)(() => ({
  borderRadius: 12,
  border: '1px solid rgba(0,0,0,0.05)',
  backgroundColor: '#fdfbf7',
  boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
}));
