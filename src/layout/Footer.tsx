import { Container, Divider, Stack, Typography } from '@mui/material';
import { restaurant } from '../data/restaurant';
import { FooterContainer, FooterContent, FooterRow } from './Footer.styles';

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <Container>
          <FooterContent>
            <FooterRow>
              <Stack spacing={1}>
                <Typography variant="subtitle1" fontWeight={700}>
                  {restaurant.name}
                </Typography>
                <Typography variant="body2" color="inherit">
                  {restaurant.address}
                </Typography>
                <Typography variant="body2" color="inherit">
                  {restaurant.phone}
                </Typography>
              </Stack>
              <Stack spacing={0.5}>
                <Typography variant="subtitle2" color="inherit">
                  영업 시간
                </Typography>
                {restaurant.hours.map((entry) => (
                  <Typography key={entry.day} variant="body2" color="inherit">
                    {entry.day} · {entry.time}
                  </Typography>
                ))}
              </Stack>
            </FooterRow>
            <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />
            <Typography variant="caption" color="inherit">
              © {new Date().getFullYear()} {restaurant.name}. All rights reserved.
            </Typography>
          </FooterContent>
        </Container>
      </FooterContainer>
    </footer>
  );
};

export default Footer;
