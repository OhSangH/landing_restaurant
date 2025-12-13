import { Box, Typography } from '@mui/material';
import { Icon } from 'leaflet';
import marker2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { RestaurantInfo } from '../../../types/restaurant';
import { MapWrapper } from './RestaurantMap.styles';

interface Props {
  restaurant: RestaurantInfo;
}

const markerIcon = new Icon({
  iconUrl: markerIconPng,
  iconRetinaUrl: marker2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const RestaurantMap = ({ restaurant }: Props) => {
  return (
    <MapWrapper>
      <MapContainer center={[restaurant.lat, restaurant.lng]} zoom={16} scrollWheelZoom style={{ height: '100%', width: '100%' }}>
        <TileLayer attribution="&copy; OpenStreetMap" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[restaurant.lat, restaurant.lng]} icon={markerIcon}>
          <Popup>
            <Box>
              <Typography variant="subtitle1" fontWeight={700}>
                {restaurant.name}
              </Typography>
              <Typography variant="body2">{restaurant.address}</Typography>
              <Typography variant="body2">{restaurant.phone}</Typography>
            </Box>
          </Popup>
        </Marker>
      </MapContainer>
    </MapWrapper>
  );
};

export default RestaurantMap;
