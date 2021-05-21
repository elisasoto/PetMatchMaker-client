import { Box } from '@chakra-ui/react';

import SwipeCard from '../SwipeCards/SwipeCard';

import './cards.scss';

export default function UsersList({ petList }) {
  return (
    <Box d="flex">
      {petList.map((card, index) => (
        <SwipeCard key={index} {...card} index={index} />
      ))}
    </Box>
  );
}
