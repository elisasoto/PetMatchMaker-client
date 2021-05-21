import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, IconButton, Stack, Heading, Text } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

import { UserContext } from '../context/User';
import { getUsersLikes, putUserDislikes } from '../services/user';
import LikesList from '../components/PetsCards/PetsList';

export default function UserLikes() {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    if (user) {
      getUsersLikes().then((res) => {
        setPetList(res.likes);
      });
    }
  }, []);

  const handleClickRemove = async (id) => {
    await putUserDislikes(id).then(() => {
      const newPetList = petList.filter((pet) => pet._id !== id);
      setPetList(newPetList);
    });
  };

  const handleMoreInfo = async (id) => {
    await history.push(`/user/likes/${id}`);
  };

  return (
    <>
      <Stack flex={1} mt={6}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2rem', sm: '1rem', lg: '3rem' }}
        >
          <Text
            as="span"
            position="relative"
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'cyan.400',
              zIndex: -1
            }}
          >
            Your Likes!
          </Text>
        </Heading>
        <Text as="span" color="cyan.400">
          Click on ➕ to know the details of the pet or ❌ if you've changed
          your mind.
        </Text>
      </Stack>
      <Box p={2} m={2}>
        <Box p="2" textAlign={'right'} onClick={() => history.goBack()}>
          <IconButton
            aria-label="Call Segun"
            size="sm"
            colorScheme="whiteAlpha"
            icon={<SmallCloseIcon color="black" />}
          />
          Close
        </Box>
        <LikesList
          petList={petList}
          handleClickRemove={handleClickRemove}
          handleMoreInfo={handleMoreInfo}
        />
      </Box>
    </>
  );
}
