import { Divider, Stack, Typography } from '@mui/material';
import { RestaurantInfo } from '../../../types/restaurant';
import { StepItem, StepsList, StepsWrapper } from './DirectionsSteps.styles';

interface Props {
  restaurant: RestaurantInfo;
}

const DirectionsSteps = ({ restaurant }: Props) => {
  return (
    <StepsWrapper>
      <Stack spacing={0.5}>
        <Typography variant="h5">오시는 길 안내</Typography>
        <Typography variant="body2" color="text.secondary">
          지하철, 도보, 주차 정보를 확인하세요.
        </Typography>
      </Stack>
      <Divider />
      <StepsList>
        {restaurant.directionsSteps.map((step, index) => (
          <StepItem key={step}>
            <Typography variant="subtitle2" color="primary" sx={{ marginRight: 1.5 }}>
              {index + 1}
            </Typography>
            <Typography variant="body2">{step}</Typography>
          </StepItem>
        ))}
      </StepsList>
    </StepsWrapper>
  );
};

export default DirectionsSteps;
