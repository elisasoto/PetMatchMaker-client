import { useState, useEffect } from 'react';
import { mockedPetList } from '../constants/mockers';
import { Box, Link, Button, Heading, Text } from '@chakra-ui/react';
import ShelterNavBar from '../components/Navbar/ShelterNavBar';
import PetsList from '../components/PetsCards/PetsList';

export default function ShelterHome() {
  const [petList, setPetList] = useState([]);

  const handleClickRemove = (id) => {
    setPetList(petList.filter((pet) => id !== pet._id));
  };

  useEffect(() => {
    setPetList(mockedPetList);
  }, [petList]);
  return (
    <>
      <ShelterNavBar />
      <Box
        p={2}
        m={2}
        d="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '6xl', lg: '10xl' }}
        >
          <Text
            as={'span'}
            position={'relative'}
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
            Your list of
          </Text>
          <br />
          <Text as={'span'} color={'cyan.400'}>
            added Pets
          </Text>
        </Heading>
        <Link href="/shelter/register">
          <Button size="sm" colorScheme="cyan" type="submit">
            Add a Pet
          </Button>
        </Link>
      </Box>
      {petList.length !== 0 ? (
        <Box mt={2} p={4}>
          <PetsList petList={petList} />
        </Box>
      ) : (
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '6xl', lg: '10xl' }}
          p={2}
          m={2}
        >
          <Text as={'span'} color={'cyan.400'}>
            Your added pets will display here
          </Text>
        </Heading>
      )}
    </>
  );
}
