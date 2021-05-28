import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Text, Heading, Stack } from '@chakra-ui/react';

import SwipeCardsList from '../components/SwipeCards/SwipeCardsList';
import { UserContext } from '../context/User';
import { capitalize } from '../constants/capitalize';
import { getPetList, putUserDislikes, putUserLikes } from '../services/user';

export default function UserHome() {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    if (user) {
      getPetList().then((res) => {
        setPetList(res);
      });
    }
  }, []);

  const handleMoreInfo = async (id) => {
    await history.push(`/details/${id}`);
  };

  const handleClickLikes = async (id) => {
    await putUserLikes(id).then(() => {
      const newPetList = petList.filter((pet) => pet._id !== id);
      setPetList(newPetList);
    });
    if (petList.length === 1) {
      await getPetList().then((res) => {
        setPetList(res);
      });
    }
  };

  const handleClickDislike = async (id) => {
    await putUserDislikes(id).then(() => {
      const newPetList = petList.filter((pet) => pet._id !== id);
      setPetList(newPetList);
    });
    if (petList.length === 1) {
      await getPetList().then((res) => {
        setPetList(res);
      });
    }
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
            {`Hi ${capitalize(user.name)}`}
          </Text>
          <br />
          <Text as="span" color="cyan.400">
            To pick a friend:
          </Text>
        </Heading>
        <Text as="span" color="cyan.400">
          Click on 💙 to like or ❌ to dislike it.
        </Text>
        <Text as="span" color="cyan.400">
          Click on ➕ to see more info about a specific pet.
        </Text>
      </Stack>
      <Box pos="relative" d="flex" alignItems="center" ml={4} pt={6}>
        {petList ? (
          <SwipeCardsList
            petList={petList}
            handleClickLikes={handleClickLikes}
            handleClickDislike={handleClickDislike}
            handleMoreInfo={handleMoreInfo}
          />
        ) : null}
      </Box>
    </>
  );
}
