//import { useState, useEffect } from 'react';
//import { useParams } from 'react-router';
//import axios from 'axios';

//import { BASE_URL } from '../../constants';
import { mockedUser } from '../../constants/mockers';
import { capitalize } from '../../constants/capitalize';
import {
  Heading,
  Avatar,
  Box,
  Link,
  Center,
  Text,
  IconButton,
  List,
  ListItem,
  useColorModeValue,
  FormLabel
} from '@chakra-ui/react';
import { EmailIcon, PhoneIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faDog,
  faFlag,
  faHome,
  faMapMarked,
  faPaw
} from '@fortawesome/free-solid-svg-icons';

import './Profile.scss';

export default function UserProfle() {
  // si hay req user rellenar el users/profile. Si ess llamado con req.params la funcion cambia por get pets/likes/

  return (
    <Center py={6}>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        rounded={'lg'}
        textAlign={'center'}
      >
        <Box p="2" textAlign={'right'}>
          <IconButton
            aria-label="Call Segun"
            size="sm"
            colorScheme="whiteAlpha"
            icon={<SmallCloseIcon color="black" />}
            onClick={() =>
              alert('click!')
            } /**{ @TODO: cierra la ventana para seguir eligiendo }*/
          />
        </Box>
        <Avatar
          size={'xl'}
          src={`${mockedUser.img}`}
          alt={`${mockedUser.name}`}
          mb={2}
          pos={'relative'}
          _after={{
            content: '""'
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {capitalize(mockedUser.name)} {capitalize(mockedUser.surname)}
        </Heading>
        <Text fontWeight={600} color={'gray.500'}>
          {capitalize(mockedUser.country)}, {capitalize(mockedUser.city)}
        </Text>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          {`${mockedUser.age} Years old`}
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
          mb={4}
        >
          {mockedUser.about}
        </Text>
        <FormLabel>My motivations to adopt a Pet are: </FormLabel>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
          mb={4}
        >
          {mockedUser.motivations}
        </Text>
        <FormLabel>I am looking for: </FormLabel>
        <Text
          textAlign={'left'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
          mb={4}
        >
          <FontAwesomeIcon icon={faDog} color="#ACDEB2" className="icon" />
          {mockedUser.ageOfDog === 'ANY'
            ? `${mockedUser.ageOfDog} age`
            : `${mockedUser.ageOfDog} pet`}
          {` of a ${mockedUser.size} size`}
        </Text>
        <Box
          bg={useColorModeValue('gray.50', 'gray.900')}
          px={3}
          py={2}
          mb={4}
          textAlign={'left'}
        >
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            My plan for the pet:
          </Text>
          <List spacing={2}>
            <ListItem>
              <FontAwesomeIcon
                icon={faClock}
                color="#ACDEB2"
                className="icon"
              />
              {`${
                mockedUser.hoursToSpend !== ''
                  ? `I am willing to spend ${mockedUser.hoursToSpend} daily hours with him/her`
                  : 'User must confirm the daily hours availabe to spend with Pet'
              }`}
            </ListItem>
            <ListItem>
              <FontAwesomeIcon icon={faHome} color="#ACDEB2" className="icon" />
              {`I live in a ${mockedUser.houseType} with ${mockedUser.living} and I plan the pet to live ${mockedUser.petLivingArrangement} with me`}
            </ListItem>
            <ListItem>
              <FontAwesomeIcon icon={faPaw} color="#ACDEB2" className="icon" />
              {`${
                mockedUser.otherPets === 'Yes'
                  ? 'Other pets live in the house'
                  : 'This will be the only pet living in the house'
              }`}
            </ListItem>
            <ListItem>
              <FontAwesomeIcon icon={faFlag} color="#ACDEB2" className="icon" />
              {`${
                mockedUser.firstPet === 'Yes'
                  ? 'This will be my first Pet'
                  : 'I have had pets before'
              }`}
            </ListItem>
            <ListItem>
              <FontAwesomeIcon
                icon={faMapMarked}
                color="#ACDEB2"
                className="icon"
              />
              {`${
                mockedUser.ammenities !== ''
                  ? mockedUser.ammenities
                  : 'User must confirm ammenities for the Pet'
              }`}
            </ListItem>
          </List>
        </Box>
        <Box
          px={3}
          py={2}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          textAlign={'center'}
        >
          <Text fontSize="15px" color="cyan.400">
            If you think I am a good fit for this pet please contact me!
          </Text>
          <Link href={`mailto: ${mockedUser.email}`} isExternal>
            <EmailIcon mx="2px" color="gray.400" />
            <Text fontSize="10px" color="gray.400">
              Send me an Email
            </Text>
          </Link>
          <Link href={`tel: ${mockedUser.phone}`} isExternal>
            <PhoneIcon mx="2px" color="gray.400" />
            <Text fontSize="10px" color="gray.400">
              Call me
            </Text>
          </Link>
        </Box>
      </Box>
    </Center>
  );
}
