import IntroSection from './sections/IntroSection';
import GallerySection from './sections/GallerySection';
import { HomeWrapper } from './HomePage.styles';

const HomePage = () => {
  return (
    <HomeWrapper>
      <IntroSection />
      <GallerySection />
    </HomeWrapper>
  );
};

export default HomePage;
