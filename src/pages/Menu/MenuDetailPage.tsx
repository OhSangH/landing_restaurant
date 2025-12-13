import { Button, Chip, Divider, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { menuItems } from '../../data/menu';
import { formatPrice } from '../../utils/formatPrice';
import AllergensChips from './components/AllergensChips';
import { AllergenBox, DetailContent, DetailImage, DetailWrapper, MetaRow, PriceBox } from './MenuDetailPage.styles';

const MenuDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const menuItem = useMemo(() => menuItems.find((item) => item.id === id), [id]);

  if (!menuItem) {
    return (
      <Stack spacing={2}>
        <Typography variant="h4">메뉴를 찾을 수 없습니다.</Typography>
        <Button variant="contained" onClick={() => navigate('/menu')}>
          메뉴 목록으로
        </Button>
      </Stack>
    );
  }

  return (
    <Stack spacing={3}>
      <Button variant="outlined" color="primary" onClick={() => navigate('/menu')} sx={{ alignSelf: 'flex-start' }}>
        ← 목록으로
      </Button>
      <DetailWrapper>
        <DetailImage style={{ backgroundImage: `url(${menuItem.image})` }} />
        <DetailContent>
          <MetaRow direction="row" spacing={1} alignItems="center">
            <Chip label={menuItem.category} color="primary" variant="outlined" />
            <Typography variant="h4">{menuItem.name}</Typography>
          </MetaRow>
          <Divider />
          <Typography variant="subtitle1" color="text.secondary">
            {menuItem.description}
          </Typography>
          <AllergenBox spacing={1.5}>
            <Typography variant="subtitle2" color="text.secondary">
              알러지 정보
            </Typography>
            <AllergensChips allergens={menuItem.allergens} />
          </AllergenBox>
          <PriceBox spacing={0.5}>
            <Typography variant="overline" color="inherit">
              Price
            </Typography>
            <Typography variant="h5" fontWeight={800} color="inherit">
              {formatPrice(menuItem.price)}
            </Typography>
          </PriceBox>
        </DetailContent>
      </DetailWrapper>
    </Stack>
  );
};

export default MenuDetailPage;
