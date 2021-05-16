import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

import SwipeCardsList from '../components/SwipeCards/SwipeCardsList';
import UserNavBar from '../components/Navbar/UserNavBar';
import { arrayAllPets } from '../constants/mockers';

export default function UserHome() {
  const [petList, setPetList] = useState([]);
  useEffect(() => {
    setPetList(arrayAllPets);
  }, [petList]);

  return (
    <>
      <UserNavBar />
      <Box pos="relative" d="flex" alignItems="center" ml={4} pt={16}>
        <SwipeCardsList petList={petList} />
      </Box>
    </>
  );
}
