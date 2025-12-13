import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import { LayoutWrapper, MainContent } from './AppLayout.styles';

const AppLayout = () => {
  return (
    <LayoutWrapper>
      <Navbar />
      <MainContent>
        <Container>
          <Outlet />
        </Container>
      </MainContent>
      <Footer />
    </LayoutWrapper>
  );
};

export default AppLayout;
