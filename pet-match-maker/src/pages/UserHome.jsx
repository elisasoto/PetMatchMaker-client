import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Box, Text, Heading, Stack } from '@chakra-ui/react';

import SwipeCardsList from '../components/SwipeCards/SwipeCardsList';
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
            Swipe!
          </Text>
          <br />
          <Text as="span" color="cyan.400">
            to pick your Friend!
          </Text>
        </Heading>
        <Text as="span" color="cyan.400">
          💙 to like a pet or ❌ to dislike it.
        </Text>
        <Text as="span" color="cyan.400">
          ➕ to see more info about a specific pet.
        </Text>
      </Stack>
      <Box pos="relative" d="flex" alignItems="center" ml={4} pt={6}>
        <SwipeCardsList petList={petList} />
      </Box>
    </>
  );
}
