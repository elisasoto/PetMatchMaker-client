import PetCard from './AdopterCard';
import { Box, Stack } from '@chakra-ui/react';

export default function AdopterList({ userList }) {
  return (
    <Box d="flex">
      <Stack>
        {userList.map((card, index) => (
          <PetCard key={index} {...card} />
        ))}
      </Stack>
    </Box>
  );
}
