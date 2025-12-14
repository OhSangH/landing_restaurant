import { AppBar, Box, Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

export const NavbarSurface = styled(AppBar)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  backgroundColor: 'rgba(255,255,255,0.92)',
  backdropFilter: 'blur(16px)',
  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
  color: theme.palette.text.primary,
  zIndex: theme.zIndex.appBar + 1,
}));

export const Bar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 0),
  gap: theme.spacing(2),
}));

export const BrandLink = styled(RouterLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  color: theme.palette.text.primary,
}));

export const BrandLogo = styled('img')(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: 10,
  objectFit: 'contain',
  boxShadow: 'none',
  border: 'none',
  backgroundColor: '#fff',
}));

export const BrandText = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  letterSpacing: '-0.02em',
  fontSize: '1.05rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
}));

export const NavLinks = styled(Stack)(({ theme }) => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'flex-start',
  },
}));

interface NavItemButtonProps {
  $active?: boolean;
}

export const NavItemButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== '$active',
})<NavItemButtonProps>(({ theme, $active }) => ({
  color: $active ? theme.palette.primary.main : theme.palette.text.primary,
  backgroundColor: $active ? 'rgba(181,58,50,0.12)' : 'transparent',
  paddingInline: theme.spacing(1.5),
  borderRadius: 999,
  fontWeight: 700,
  '&:hover': {
    backgroundColor: 'rgba(181,58,50,0.16)',
  },
}));

export const ContactBox = styled(Stack)(({ theme }) => ({
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  minWidth: 180,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const ContactLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.85rem',
}));

export const CallButton = styled(Button)(({ theme }) => ({
  paddingInline: theme.spacing(2.5),
  borderRadius: 12,
  boxShadow: '0 12px 25px rgba(181,58,50,0.25)',
}));
