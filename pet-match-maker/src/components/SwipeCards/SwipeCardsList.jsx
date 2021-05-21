import { Box } from '@chakra-ui/react';

import SwipeCard from '../SwipeCards/SwipeCard';

import './cards.scss';

export default function UsersList({
  petList,
  handleClickLikes,
  handleClickDislike,
  handleMoreInfo
}) {
  return (
    <Box d="flex">
      {petList.map((card, index) => (
        <SwipeCard
          key={index}
          {...card}
          handleClickLikes={handleClickLikes}
          handleClickDislike={handleClickDislike}
          handleMoreInfo={handleMoreInfo}
        />
      ))}
    </Box>
  );
}
