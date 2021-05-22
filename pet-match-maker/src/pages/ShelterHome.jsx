import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

import { UserContext } from '../context/User';
import { capitalize } from '../constants/capitalize';
import { getPetListFromShelter } from '../services/pets';
import PetsList from '../components/PetsCards/PetsList';

export default function ShelterHome() {
  const { user } = useContext(UserContext);
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
      </Box>
      <Box>
        <Link to="/pet/register">
          <Button size="sm" colorScheme="cyan" type="submit" w="100%">
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
          align="center"
          mt={16}
          fontSize={{ base: '2xl', sm: '6xl', lg: '10xl' }}
        >
          <Text as="span" color="grey.400">
            You haven't registered any pets yet, click on
            <Text color="cyan.400">Add a Pet</Text> to start registering your
            available pets.
          </Text>
          <Text mt={6}>Greetings form PetMatchMaker! 🐶😹🙉🐺🐷🐭🐗🦄🐸</Text>
        </Heading>
      )}
    </>
  );
}
