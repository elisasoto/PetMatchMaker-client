import AdopterCard from './AdopterCard';
import { Box, Stack } from '@chakra-ui/react';

export default function AdopterList({ userList, handleMoreInfo }) {
  return (
    <Box d="flex">
      <Stack>
        {userList.map((card, index) => (
          <AdopterCard key={index} {...card} handleMoreInfo={handleMoreInfo} />
        ))}
      </Stack>
    </Box>
  );
}
