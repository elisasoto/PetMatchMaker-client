import { useState, useEffect } from 'react';
import { mockedUsersList } from '../constants/mockers';
import { Box, Link, IconButton } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

import ShelterNavBar from '../components/Navbar/ShelterNavBar';
import LikesList from '../components/AdoptersCards/AdopterList';

export default function PetsLlikes() {
  const [userList, setUserList] = useState([]);

  const handleClickRemove = (id) => {
    setUserList(userList.filter((user) => id !== user._id));
  };

  useEffect(() => {
    setUserList(mockedUsersList);
  }, [userList]);

  return (
    <>
      <ShelterNavBar />
      <Box p={2} m={2}>
        <Link href="/pet/details">
          <Box p="2" textAlign={'right'}>
            <IconButton
              aria-label="Call Segun"
              size="sm"
              colorScheme="whiteAlpha"
              icon={<SmallCloseIcon color="black" />}
            />
            Close
          </Box>
        </Link>
        <LikesList userList={userList} />
      </Box>
    </>
  );
}
