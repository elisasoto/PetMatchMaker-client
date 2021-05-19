import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Box, Link, IconButton, Stack, Heading, Text } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

import { UserContext } from '../context/User';
import { getUsersLikes } from '../services/user';
import LikesList from '../components/PetsCards/PetsList';

export default function UserLikes() {
  const { user } = useContext(UserContext);
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    if (user) {
      getUsersLikes().then((res) => {
        setPetList(res.likes);
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
            Your Likes!
          </Text>
        </Heading>
        <Text as="span" color="cyan.400">
          Click on ➕ to know the details of the pet or ❌ if you've changed
          your mind.
        </Text>
      </Stack>
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
