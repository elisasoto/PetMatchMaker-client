import { useHistory } from 'react-router-dom';
import { transformDate } from '../../constants/transformDate';
import { capitalize } from '../../constants/capitalize';
import './Profile.scss';

import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Heading,
  IconButton,
  List,
  ListItem,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBalanceScale,
  faBirthdayCake,
  faDog,
  faHome,
  faThumbsUp
} from '@fortawesome/free-solid-svg-icons';

export default function PetProfileShelter({ pet }) {
  const history = useHistory();
  const available = pet.status === 'Available' ? 'green' : 'red';
  const disableButton = pet.likes.length ? false : true;

  const handleRedirect = async (path) => {
    await history.push(path);
  };

  return (
    <Center>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        rounded="lg"
        textAlign="center"
      >
        <Box
          p="2"
          textAlign="right"
          onClick={() => handleRedirect('/shelter/home')}
        >
          <IconButton
            aria-label="Call Segun"
            size="sm"
            colorScheme="whiteAlpha"
            icon={<SmallCloseIcon color="black" />}
          />
          Close
        </Box>
        <Box mb={4} justifyContent="center">
          <Avatar
            size="2xl"
            name={`${pet.name}`}
            src={`${pet.img}`}
            alt={`${pet.name}`}
            mb={2}
            pos="relative"
            _after={{
              content: '""'
            }}
          />
        </Box>
        <Stack align="center" justify="center" direction="row">
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
          fontSize="18px"
          fontFamily="body"
          color={useColorModeValue('gray.700', 'gray.400')}
          px={1}
        >
          <FontAwesomeIcon icon={faThumbsUp} color="#ACDEB2" className="icon" />
          {`${pet.likes.length} people are interested in me!`}
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
        <Stack
          spacing={{ base: 2, sm: 6 }}
          direction={{ base: 'row', sm: 'row' }}
        >
          <Button
            rounded="full"
            size="lg"
            fontWeight="normal"
            px={6}
            colorScheme="cyan"
            bg="cyan.400"
            onClick={() => handleRedirect(`/pet/edit/${pet._id}`)}
            _hover={{ bg: 'cyan.500' }}
          >
            Edit Info
          </Button>

          <Button
            rounded="full"
            size="lg"
            fontWeight="normal"
            px={6}
            isDisabled={disableButton}
            onClick={() => handleRedirect(`/pet/likes/${pet._id}`)}
          >
            See Potential Adopters Info
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
