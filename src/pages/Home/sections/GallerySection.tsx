import { Stack, Typography } from '@mui/material';
import { menuItems } from '../../../data/menu';
import { formatPrice } from '../../../utils/formatPrice';
import { GalleryCard, GalleryGrid, GalleryImage, GalleryMeta, GalleryWrapper, Tag } from './GallerySection.styles';

const PLACEHOLDER_IMAGE = 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1200&h=900&dpr=1';

const GallerySection = () => {
  const featured = menuItems.slice(0, 6);

  return (
    <GalleryWrapper>
      <Stack spacing={1}>
        <Typography variant="h2">가게 풍경 & 시그니처</Typography>
        <Typography variant="subtitle1">따뜻한 조명 아래, 대표 메뉴와 공간의 분위기를 미리 느껴보세요.</Typography>
      </Stack>
      <GalleryGrid>
        {featured.map((item) => (
          <GalleryCard key={item.id}>
            <GalleryImage style={{ backgroundImage: `url(${item.image || PLACEHOLDER_IMAGE})` }} />
            <GalleryMeta>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="h6">{item.name}</Typography>
                <Tag label={item.category} size="small" />
              </Stack>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="subtitle1" fontWeight={700}>
                {formatPrice(item.price)}
              </Typography>
            </GalleryMeta>
          </GalleryCard>
        ))}
      </GalleryGrid>
    </GalleryWrapper>
  );
};

export default GallerySection;
