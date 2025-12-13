import { Button, Stack, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { menuItems } from '../../data/menu';
import MenuCard from './components/MenuCard';
import { CategoryRow, MenuGrid, MenuPageWrapper } from './MenuListPage.styles';

const MenuListPage = () => {
  const [category, setCategory] = useState<string>('전체');
  const navigate = useNavigate();
  const categories = useMemo(
    () => ['전체', ...Array.from(new Set(menuItems.map((item) => item.category)))],
    [],
  );

  const filtered = category === '전체' ? menuItems : menuItems.filter((item) => item.category === category);

  return (
    <MenuPageWrapper>
      <Stack spacing={1}>
        <Typography variant="h2">메뉴</Typography>
        <Typography variant="subtitle1">클릭하면 상세 정보와 알러지 성분을 확인할 수 있습니다.</Typography>
      </Stack>
      <CategoryRow>
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={cat === category ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => setCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </CategoryRow>
      <MenuGrid>
        {filtered.map((item) => (
          <MenuCard key={item.id} item={item} onClick={() => navigate(`/menu/${item.id}`)} />
        ))}
      </MenuGrid>
    </MenuPageWrapper>
  );
};

export default MenuListPage;
