import {
  Box,
  Button,
  Center,
  IconButton,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import {
  CheckIcon,
  EmailIcon,
  InfoIcon,
  PhoneIcon,
  SmallCloseIcon
} from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

import { mocketShelter } from '../../constants/mockers';
import { capitalize } from '../../constants/capitalize';

import './Profile.scss';

export default function ShelterProfile() {
  return (
    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Link href="/shelter/home">
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
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}
        >
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('cyan.50', 'cyan.900')}
            p={2}
            px={3}
            color={'grey.500'}
            rounded={'full'}
          >
            Shelter Name
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'6xl'} fontWeight={800}>
              {capitalize(mocketShelter.name)}
            </Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={EmailIcon} color="cyan.400" />
              {mocketShelter.email}
            </ListItem>
            <ListItem>
              <ListIcon as={PhoneIcon} color="cyan.400" />
              {mocketShelter.phone}
            </ListItem>
            <ListItem>
              <FontAwesomeIcon
                icon={faGlobeEurope}
                color="#ACDEB2"
                className="icon"
              />
              {`From ${capitalize(mocketShelter.city)}, ${capitalize(
                mocketShelter.country
              )} `}
            </ListItem>
            <ListItem>
              <ListIcon as={InfoIcon} color="cyan.400" />
              {mocketShelter.about}
            </ListItem>
          </List>
          <Link href="/shelter/edit">
            <Button
              mt={10}
              w={'full'}
              bg={'cyan.400'}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(10 116 111 / 43%)'}
              _hover={{
                bg: 'cyan.500'
              }}
              _focus={{
                bg: 'cyan.500'
              }}
            >
              Edit Info
            </Button>
          </Link>
        </Box>
      </Box>
    </Center>
  );
}
