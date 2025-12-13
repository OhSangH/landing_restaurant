import { Stack, Typography } from '@mui/material';
import { restaurant } from '../../data/restaurant';
import DirectionsSteps from './components/DirectionsSteps';
import RestaurantMap from './components/RestaurantMap';
import { DirectionsGrid, DirectionsWrapper, MapCard, StepsCard } from './DirectionsPage.styles';

const DirectionsPage = () => {
  return (
    <DirectionsWrapper>
      <Stack spacing={1}>
        <Typography variant="h2">가는 길</Typography>
        <Typography variant="subtitle1">지도와 함께 편하게 찾아오세요.</Typography>
      </Stack>
      <DirectionsGrid>
        <MapCard>
          <RestaurantMap restaurant={restaurant} />
        </MapCard>
        <StepsCard>
          <DirectionsSteps restaurant={restaurant} />
        </StepsCard>
      </DirectionsGrid>
    </DirectionsWrapper>
  );
};

export default DirectionsPage;
