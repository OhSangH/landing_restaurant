import { Card, CardActionArea, CardContent, Chip, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MenuCardContainer = styled(Card)(({ theme }) => ({
  borderRadius: 18,
  overflow: 'hidden',
  boxShadow: '0 16px 38px rgba(0,0,0,0.08)',
  backgroundColor: '#ffffff',
  height: '100%',
}));

export const MenuCardAction = styled(CardActionArea)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
}));

export const MenuImage = styled('div')({
  width: '100%',
  aspectRatio: '4 / 3',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: '#f5f0ea',
  borderBottom: '1px solid rgba(0,0,0,0.05)',
});

export const MenuMeta = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  flex: 1,
}));

export const CategoryChip = styled(Chip)(({ theme }) => ({
  alignSelf: 'flex-start',
  backgroundColor: 'rgba(181,58,50,0.12)',
  color: theme.palette.primary.main,
  fontWeight: 700,
}));

export const PriceTag = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '1.05rem',
}));

export const CardFooter = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  marginTop: 'auto',
}));
