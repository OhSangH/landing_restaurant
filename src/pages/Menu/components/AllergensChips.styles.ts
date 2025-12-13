import { Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AllergensStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: theme.spacing(0.5),
  alignItems: 'center',
}));

export const AllergenChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(0,0,0,0.04)',
  color: theme.palette.text.secondary,
  height: 26,
}));
