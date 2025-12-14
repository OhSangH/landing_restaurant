import { Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { restaurant } from '../data/restaurant';
import {
  Bar,
  BrandLink,
  BrandLogo,
  BrandText,
  CallButton,
  ContactBox,
  ContactLabel,
  NavItemButton,
  NavLinks,
  NavbarSurface,
} from './Navbar.styles';

const navLinks = [
  { label: '홈', to: '/' },
  { label: '메뉴', to: '/menu' },
  { label: '가는길', to: '/directions' },
];

const Navbar = () => {
  const logoSrc = `${import.meta.env.BASE_URL}images/Red Cream Delicate Quirky Illustration Wedding Logo.png`;

  return (
    <NavbarSurface elevation={0}>
      <Container>
        <Bar>
          <BrandLink to="/">
            <BrandLogo src={logoSrc} alt="Restaurant 로고" />
            <div>
              <BrandText variant="subtitle1">{restaurant.name}</BrandText>
              <Typography variant="caption" color="text.secondary">
                Restaurant
              </Typography>
            </div>
          </BrandLink>
          <NavLinks direction="row">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'}>
                {({ isActive }) => <NavItemButton $active={isActive}>{link.label}</NavItemButton>}
              </NavLink>
            ))}
          </NavLinks>
          <ContactBox spacing={0.5}>
            <ContactLabel>예약 문의</ContactLabel>
            <CallButton variant="contained" size="small" color="primary" href={`tel:${restaurant.phone}`}>
              {restaurant.phone}
            </CallButton>
          </ContactBox>
        </Bar>
      </Container>
    </NavbarSurface>
  );
};

export default Navbar;
