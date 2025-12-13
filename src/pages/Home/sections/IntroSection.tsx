import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { restaurant } from '../../../data/restaurant';
import { HeroActions, HeroImage, HeroTag, IntroContent, IntroSectionWrapper, StatCard, StatsGrid } from './IntroSection.styles';

const IntroSection = () => {
  const navigate = useNavigate();

  return (
    <IntroSectionWrapper>
      <IntroContent>
        <HeroTag label="Seasonal European Kitchen" />
        <Stack spacing={1.5}>
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, lineHeight: 1.3 }}>
            유럽 감성에 한국의 맛을 더한
            <br />
            감각적인 퓨전 다이닝 레스토랑
          </Typography>
          <Typography variant="subtitle1">브라스웨이 서면전포점에서 새로운 미식의 감동을 만나보세요.</Typography>
          <Typography variant="body2" color="text.secondary">
            #퓨전양식맛집 #서면맛집 #감성레스토랑
          </Typography>
        </Stack>
        <HeroActions>
          <Button variant="contained" color="primary" size="large" onClick={() => navigate('/menu')}>
            메뉴 보기
          </Button>
          <Button variant="outlined" color="primary" size="large" onClick={() => navigate('/directions')}>
            가는 길
          </Button>
        </HeroActions>
        <StatsGrid>
          <StatCard spacing={0.5}>
            <Typography variant="caption" color="text.secondary">
              영업 시간
            </Typography>
            <Typography variant="subtitle1" fontWeight={700}>
              {restaurant.hours[0].time}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {restaurant.hours[0].day}
            </Typography>
          </StatCard>
          <StatCard spacing={0.5}>
            <Typography variant="caption" color="text.secondary">
              위치
            </Typography>
            <Typography variant="subtitle1" fontWeight={700}>
              신논현역 도보 7분
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {restaurant.address}
            </Typography>
          </StatCard>
          <StatCard spacing={0.5}>
            <Typography variant="caption" color="text.secondary">
              예약 문의
            </Typography>
            <Typography variant="subtitle1" fontWeight={700}>
              {restaurant.phone}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              포근한 저녁을 준비해 둘게요
            </Typography>
          </StatCard>
        </StatsGrid>
      </IntroContent>
      <HeroImage role="presentation" aria-hidden />
    </IntroSectionWrapper>
  );
};

export default IntroSection;
