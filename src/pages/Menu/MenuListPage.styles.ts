import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MenuPageWrapper = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(3),
}));

export const CategoryRow = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  alignItems: 'center',
}));

export const MenuGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: theme.spacing(2.5),
  alignItems: 'stretch',
}));
