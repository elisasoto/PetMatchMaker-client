import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

import { UserContext } from '../context/User';
import { capitalize } from '../constants/capitalize';
import { getPetListFromShelter } from '../services/pets';
import ShelterNavBar from '../components/Navbar/ShelterNavBar';
import PetsList from '../components/PetsCards/PetsList';

export default function ShelterHome() {
  const { user } = useContext(UserContext);
  console.log(user);
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    if (user) {
      getPetListFromShelter().then((res) => {
        setPetList(res.pets);
      });
    }
  }, []);

  // const handleClickRemove = async (id) => {
  //     await putUserDislikes(id).then(() => {
  //       const newPetList = petList.filter((pet) => pet._id !== id);
  //       setPetList(newPetList);
  //     });
  //   };

  //   const handleMoreInfo = async (id) => {
  //     await history.push(``);
  //   };

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
            {`Hello ${capitalize(user.name)}`}
          </Text>
          <br />
          <Text as="span" color="cyan.400">
            This is your list of Pets
          </Text>
        </Heading>
        <Link to="/pet/register">
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
          <Text as="span" color="cyan.400">
            Your added pets will display here
          </Text>
        </Heading>
      )}
    </>
  );
}
