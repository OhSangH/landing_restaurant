import { Typography } from '@mui/material';
import { MenuItem } from '../../../types/menu';
import { formatPrice } from '../../../utils/formatPrice';
import AllergensChips from './AllergensChips';
import { CardFooter, CategoryChip, MenuCardAction, MenuCardContainer, MenuImage, MenuMeta, PriceTag } from './MenuCard.styles';

const PLACEHOLDER_IMAGE = 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1200&h=900&dpr=1';

interface Props {
  item: MenuItem;
  onClick: () => void;
}

const MenuCard = ({ item, onClick }: Props) => {
  const imageSrc = item.image || PLACEHOLDER_IMAGE;

  return (
    <MenuCardContainer>
      <MenuCardAction onClick={onClick}>
        <MenuImage style={{ backgroundImage: `url(${imageSrc})` }} />
        <MenuMeta>
          <CategoryChip label={item.category} size="small" />
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <CardFooter direction="row">
            <PriceTag variant="subtitle1">{formatPrice(item.price)}</PriceTag>
            <AllergensChips allergens={item.allergens} />
          </CardFooter>
        </MenuMeta>
      </MenuCardAction>
    </MenuCardContainer>
  );
};

export default MenuCard;
