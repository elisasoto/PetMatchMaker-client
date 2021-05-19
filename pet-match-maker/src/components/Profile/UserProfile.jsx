import { capitalize } from '../../constants/capitalize';
import {
  Heading,
  Avatar,
  Box,
  Link,
  Center,
  Text,
  List,
  ListItem,
  useColorModeValue,
  FormLabel
} from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
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

export default function UserProfile({ profile }) {
  return (
    <Center py={6}>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        rounded="lg"
        textAlign="center"
      >
        <Avatar
          size="xl"
          src={`${profile.img}`}
          alt={`${profile.name}`}
          mb={2}
          pos="relative"
          _after={{
            content: '""'
          }}
        />
        <Heading fontSize="25px" fontFamily="body">
          {capitalize(profile.name)} {capitalize(profile.surname)}
        </Heading>
        <Text fontWeight={600} color="gray.500">
          {capitalize(profile.city)}, {capitalize(profile.country)}
        </Text>
        <Text fontWeight={600} color="gray.500" mb={4}>
          {`${profile.age} Years old`}
        </Text>
        <Text
          textAlign="center"
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
          mb={4}
        >
          {profile.about}
        </Text>
        <FormLabel>My motivations to adopt a Pet are: </FormLabel>
        <Text
          textAlign="center"
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
          mb={4}
        >
          {profile.motivations
            ? profile.motivations
            : 'User must provide motivations'}
        </Text>
        <FormLabel>I am looking for: </FormLabel>
        <Text
          textAlign="left"
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
          mb={4}
        >
          <FontAwesomeIcon icon={faDog} color="#ACDEB2" className="icon" />
          {profile.ageOfDog === 'ANY'
            ? `${profile.ageOfDog} age`
            : `${profile.ageOfDog} pet`}
          {` of a ${profile.size} size`}
        </Text>
        <Box
          bg={useColorModeValue('gray.50', 'gray.900')}
          px={3}
          py={2}
          mb={4}
          textAlign="left"
        >
          <Text fontWeight={600} color="gray.500" mb={4}>
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
                profile.hoursToSpend !== undefined
                  ? `I am willing to spend ${profile.hoursToSpend} daily hours with him/her`
                  : 'User must confirm the daily hours availabe to spend with Pet'
              }`}
            </ListItem>
            <ListItem>
              <FontAwesomeIcon icon={faHome} color="#ACDEB2" className="icon" />
              {`I live in a ${profile.houseType} with ${profile.living} and I plan the pet to live ${profile.petLivingArrangement} with me`}
            </ListItem>
            <ListItem>
              <FontAwesomeIcon icon={faPaw} color="#ACDEB2" className="icon" />
              {`${
                profile.otherPets === 'Yes'
                  ? 'Other pets live in the house'
                  : 'This will be the only pet living in the house'
              }`}
            </ListItem>
            <ListItem>
              <FontAwesomeIcon icon={faFlag} color="#ACDEB2" className="icon" />
              {`${
                profile.firstPet === 'Yes'
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
                profile.ammenities !== undefined
                  ? profile.ammenities
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
          textAlign="center"
        >
          <Text fontSize="15px" color="cyan.400">
            If you think I am a good fit for this pet please contact me!
          </Text>
          <Link href={`mailto: ${profile.email}`} isExternal>
            <EmailIcon mx="2px" color="gray.400" />
            <Text fontSize="10px" color="gray.400">
              Send me an Email
            </Text>
          </Link>
          <Link href={`tel: ${profile.phone}`} isExternal>
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
