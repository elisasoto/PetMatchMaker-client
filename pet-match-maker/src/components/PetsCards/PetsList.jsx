import PetCard from './PetCard';
import { Box } from '@chakra-ui/react';

export default function PetList({ petList }) {
  return (
    <Box d="flex" flexWrap="wrap">
      {petList.map((card, index) => (
        <PetCard key={index} {...card} />
      ))}
    </Box>
  );
}
