import { useHistory } from 'react-router-dom';

import { transformDate } from '../../constants/transformDate';
import { capitalize } from '../../constants/capitalize';
import './Profile.scss';

import {
  Heading,
  Avatar,
  Box,
  Link,
  Center,
  Text,
  Stack,
  IconButton,
  List,
  ListItem,
  Badge,
  useColorModeValue
} from '@chakra-ui/react';
import { EmailIcon, PhoneIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBalanceScale,
  faBirthdayCake,
  faDog,
  faHome,
  faThumbsUp
} from '@fortawesome/free-solid-svg-icons';

export default function PetProfile({ pet }) {
  const history = useHistory();
  const available = pet.status === 'Available' ? 'green' : 'red';

  return (
    <Center>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        rounded="lg"
        textAlign="center"
      >
        <Box p="2" textAlign="right" onClick={() => history.goBack()}>
          <IconButton
            aria-label="Call Segun"
            size="sm"
            colorScheme="whiteAlpha"
            icon={<SmallCloseIcon color="black" />}
          />
          Close
        </Box>
        <Avatar
          size="xl"
          src={`${pet.img}`}
          alt={`${pet.name}`}
          mb={2}
          pos="relative"
          _after={{
            content: '""'
          }}
        />
        <Stack align="center" justify="center">
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue(`${available}.300`, `${available}.200`)}
            fontWeight={'400'}
          >
            {`${pet.status}`}
          </Badge>
        </Stack>
        <Heading fontSize="2rem" fontFamily="body">
          {capitalize(pet.name)}
        </Heading>
        <Text fontWeight={600} color="gray.500" mb={2}>
          {`${pet.breed}`}
        </Text>
        <Text
          textAlign="center"
          fontSize="1rem"
          fontFamily="body"
          color={useColorModeValue('gray.700', 'gray.400')}
          px={1}
        >
          <FontAwesomeIcon icon={faThumbsUp} color="#ACDEB2" className="icon" />
          {pet.likes.length === undefined
            ? `0 people interested in me, be the first!`
            : `${pet.likes.length} adopter(s) interested in me!`}
        </Text>
        <Box
          bg={useColorModeValue('gray.50', 'gray.900')}
          px={3}
          py={2}
          mb={4}
          textAlign="left"
        >
          <List spacing={2}>
            <ListItem>
              <FontAwesomeIcon
                icon={faBirthdayCake}
                color="#ACDEB2"
                className="icon"
              />
              {pet.age}
            </ListItem>
            <ListItem>
              <FontAwesomeIcon
                icon={faBalanceScale}
                color="#ACDEB2"
                className="icon"
              />
              {pet.weight} Kilos
            </ListItem>
            <ListItem>
              <FontAwesomeIcon icon={faDog} color="#ACDEB2" className="icon" />
              {capitalize(pet.about)}
            </ListItem>
            <ListItem>
              <FontAwesomeIcon icon={faHome} color="#ACDEB2" className="icon" />

              {`I live in shelter ${capitalize(pet.shelterId.name)} in
              ${capitalize(pet.shelterId.city)},
              ${capitalize(pet.shelterId.country)} since
              ${transformDate(pet.dateArrivalInShelter)}`}
            </ListItem>
          </List>
        </Box>
        <Box
          maxW="sm"
          px={3}
          py={2}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          textAlign="center"
        >
          <Text fontSize="15px" color="cyan.400">
            If you want to visit me right away please contact my Shelter!
          </Text>
          <Link href={`mailto: ${pet.shelterId.email}`} isExternal>
            <EmailIcon mx="2px" color="gray.400" />
            <Text fontSize="10px" color="gray.400">
              Send them an Email
            </Text>
          </Link>
          <Link href={`tel: ${pet.shelterId.phone}`} isExternal>
            <PhoneIcon mx="2px" color="gray.400" />
            <Text fontSize="10px" color="gray.400">
              Call them
            </Text>
          </Link>
        </Box>
      </Box>
    </Center>
  );
}
