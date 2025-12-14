import { Card, CardContent, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GalleryWrapper = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(3),
}));

export const GalleryGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: theme.spacing(2.5),
}));

export const GalleryCard = styled(Card)(() => ({
  borderRadius: 18,
  overflow: 'hidden',
  boxShadow: '0 18px 45px rgba(0,0,0,0.08)',
  background: '#ffffff',
  height: '100%',
}));

export const GalleryImage = styled('div')({
  width: '100%',
  aspectRatio: '4 / 3',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const Tag = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(181,58,50,0.12)',
  color: theme.palette.primary.main,
  fontWeight: 700,
  borderRadius: 10,
}));

export const GalleryMeta = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));
