import { useState, useEffect } from 'react';
import { Box, Stack } from '@chakra-ui/react';

import SwuipeCard from '../SwipeCards/SwipeCard';
import { arrayAllPets } from '../../constants/mockers';

import './cards.scss';

export default function UsersList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(arrayAllPets);
  }, [list]);

  return (
    <Box d="flex">
      <Stack>
        {list.map((card, index) => (
          <SwuipeCard key={index} {...card} />
        ))}
      </Stack>
    </Box>
  );
}
