import { RestaurantInfo } from '../types/restaurant';

export const restaurant: RestaurantInfo = {
  name: 'Restaurant',
  address: '서울시 강남구 테이블로 123, 1층',
  phone: '02-123-4567',
  hours: [
    { day: '월 - 금', time: '11:30 - 22:00' },
    { day: '토 - 일', time: '10:30 - 22:30' },
    { day: '브레이크', time: '15:00 - 17:00 (주말 제외)' },
  ],
  lat: 37.4979,
  lng: 127.0276,
  directionsSteps: [
    '신논현역 5번 출구에서 직진 후 첫 번째 골목에서 우회전',
    '르네상스 빌딩을 지나 150m 직진하면 좌측 1층',
    '건물 앞 발렛 서비스 이용 가능 (주차 2시간 무료)',
    '대중교통 이용 시 신논현/강남역 모두 도보 7분 거리',
  ],
};
