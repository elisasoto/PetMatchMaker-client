import { useState, useEffect } from 'react';
import { mockedPetList } from '../../constants/mockers';

import PetCard from './PetCard';
import { Box, Stack } from '@chakra-ui/react';

export default function PetList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(mockedPetList);
  }, [list]);

  return (
    <Box d="flex">
      <Stack>
        {list.map((card, index) => (
          <PetCard key={index} {...card} />
        ))}
      </Stack>
    </Box>
  );
}
