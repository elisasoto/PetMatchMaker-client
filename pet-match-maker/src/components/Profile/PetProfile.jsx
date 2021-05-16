import { transformDate } from '../../constants/transformDate';
import { capitalize } from '../../constants/capitalize';
import './Profile.scss';

import {
  Heading,
  Avatar,
  Box,
  Flex,
  Spacer,
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
import {
  EmailIcon,
  PhoneIcon,
  CloseIcon,
  SmallCloseIcon
} from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBalanceScale,
  faBirthdayCake,
  faDog,
  faHeart,
  faHome,
  faThumbsUp
} from '@fortawesome/free-solid-svg-icons';

export default function PetProfile({ pet }) {
  const available = pet.status === 'Available' ? 'green' : 'red';

  return (
    <Center>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        rounded={'lg'}
        textAlign={'center'}
      >
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
        <Avatar
          size={'xl'}
          src={`${pet.img}`}
          alt={`${pet.name}`}
          mb={2}
          pos={'relative'}
          _after={{
            content: '""'
          }}
        />
        <Stack align={'center'} justify={'center'} direction={'row'}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue(`${available}.300`, `${available}.200`)}
            fontWeight={'400'}
          >
            {`${pet.status}`}
          </Badge>
        </Stack>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {capitalize(pet.name)}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={2}>
          {`${pet.breed}`}
        </Text>
        <Text
          textAlign={'center'}
          fontSize={'10px'}
          fontFamily={'body'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={1}
        >
          <FontAwesomeIcon icon={faThumbsUp} color="#ACDEB2" className="icon" />
          {`${pet.likes.length} people are sinterested in me!`}
        </Text>
        <Box
          bg={useColorModeValue('gray.50', 'gray.900')}
          px={3}
          py={2}
          mb={4}
          textAlign={'left'}
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
          textAlign={'center'}
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
        <Flex>
          <Box p="2">
            <IconButton
              aria-label="Call Segun"
              size="lg"
              icon={<CloseIcon color="red" />}
              isRound="true"
              onClick={() =>
                alert('llamada a dislikes')
              } /**{ @TODO: aqui se hace otra llamada a axios para los deslikes y al finalizar cierra la ventana }*/
            />
          </Box>
          <Spacer />
          <Box p="2">
            <IconButton
              aria-label="Call Segun"
              size="lg"
              icon={<FontAwesomeIcon icon={faHeart} color="#0bc5ea" />}
              isRound="true"
              onClick={() =>
                alert('llamada a likes!')
              } /**{ @TODO: aqui se hace otra llamada a axios para los likes y al finalizar cierra la ventana para seguir eligiendo }*/
            />
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
