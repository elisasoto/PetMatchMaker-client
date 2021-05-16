import PetCard from './PetCard';
import { Box, Stack } from '@chakra-ui/react';

export default function PetList({ onClick, petList }) {
  return (
    <Box d="flex">
      <Stack>
        {petList.map((card, index) => (
          <PetCard key={index} {...card} onClick={onClick} />
        ))}
      </Stack>
    </Box>
  );
}
