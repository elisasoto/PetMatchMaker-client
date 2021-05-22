import {
  Box,
  Button,
  Center,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { EmailIcon, InfoIcon, PhoneIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

import { capitalize } from '../../constants/capitalize';

import './Profile.scss';

export default function ShelterProfile({ profile }) {
  return (
    <Center py={6}>
      <Box
        maxW="330px"
        w="full"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="5px 10px 15px lightgray"
        rounded="md"
        overflow="hidden"
      >
        <Stack
          textAlign="center"
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align="center"
        >
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('cyan.50', 'cyan.900')}
            p={2}
            px={3}
            color="grey.500"
            rounded="full"
          >
            Your Shelter
          </Text>
          <Stack direction="row" align="center" justify="center">
            <Text fontSize="60px" fontWeight={800}>
              {capitalize(profile.name)}
            </Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={EmailIcon} color="cyan.400" />
              {profile.email}
            </ListItem>
            <ListItem>
              <ListIcon as={PhoneIcon} color="cyan.400" />
              {profile.phone}
            </ListItem>
            <ListItem>
              <FontAwesomeIcon
                icon={faGlobeEurope}
                color="#ACDEB2"
                className="icon"
              />
              {`From ${capitalize(profile.city)}, ${capitalize(
                profile.country
              )} `}
            </ListItem>
            <ListItem>
              <ListIcon as={InfoIcon} color="cyan.400" />
              {profile.about}
            </ListItem>
          </List>
          <Link href="/shelter/edit">
            <Button
              mt={10}
              w="full"
              bg="cyan.400"
              color="white"
              rounded="10px"
              boxShadow="5px 10px 15px lightgray"
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
