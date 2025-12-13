export interface RestaurantInfo {
  name: string;
  address: string;
  phone: string;
  hours: { day: string; time: string }[];
  lat: number;
  lng: number;
  directionsSteps: string[];
}
