import { useState, useEffect } from 'react';
import { mockedPetList } from '../constants/mockers';
import { Box, Link, IconButton } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

import LikesList from '../components/PetsCards/PetsList';

export default function UserLikes() {
  const [petList, setPetList] = useState([]);

  const handleClickRemove = (id) => {
    setPetList(petList.filter((pet) => id !== pet._id));
  };

  useEffect(() => {
    setPetList(mockedPetList);
  }, [petList]);

  return (
    <>
      <Box p={2} m={2}>
        <Link href="/user/home">
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
        <LikesList petList={petList} />
      </Box>
    </>
  );
}
