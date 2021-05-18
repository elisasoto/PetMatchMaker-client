import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

import SwipeCardsList from '../components/SwipeCards/SwipeCardsList';
import UserNavBar from '../components/Navbar/UserNavBar';
import { UserContext } from '../context/User';
import { getPetList } from '../services/user';

export default function UserHome() {
  const { user } = useContext(UserContext);
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    if (user) {
      getPetList().then((res) => {
        setPetList(res);
      });
    }
  }, []);

  return (
    <>
      <UserNavBar img={''} />
      <Box pos="relative" d="flex" alignItems="center" ml={4} pt={16}>
        <SwipeCardsList petList={petList} />
      </Box>
    </>
  );
}
