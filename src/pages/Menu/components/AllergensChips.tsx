import { Typography } from '@mui/material';
import { AllergensStack, AllergenChip } from './AllergensChips.styles';

interface Props {
  allergens: string[];
}

const AllergensChips = ({ allergens }: Props) => {
  if (!allergens.length) {
    return (
      <Typography variant="caption" color="text.secondary">
        알러지 유발 성분 없음
      </Typography>
    );
  }

  return (
    <AllergensStack>
      {allergens.map((allergen) => (
        <AllergenChip key={allergen} label={allergen} size="small" />
      ))}
    </AllergensStack>
  );
};

export default AllergensChips;
