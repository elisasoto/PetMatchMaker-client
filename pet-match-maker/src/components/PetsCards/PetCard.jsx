import { useState, useEffect } from 'react';
//import axios from 'axios';

import { onePetShort } from '../../constants/mockers';
import {
  Heading,
  Avatar,
  Box,
  Flex,
  Spacer,
  Link,
  Image,
  StarIcon,
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
  AddIcon,
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

const available = onePetShort.status === 'Available' ? 'green' : 'red';

export default function PetCard({ img, name, status, age, likes }) {
  //   const [petList, setPetList] = useState([]);
  //   useEffect(() => {
  //     setPetList(mockedPetList);
  //   }, [petList]);
  return (
    <Box
      w="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      pt={1}
      pb={1}
      d="flex"
      alignItems={'center'}
      flexWrap={true}
    >
      <Avatar
        size={'md'}
        src={`${onePetShort.img}`}
        alt={`${onePetShort.name}`}
        mb={2}
        pos={'relative'}
        _after={{
          content: '""'
        }}
      />
      <Box p="2">
        <Box alignItems="center">
          <Badge
            px={2}
            py={1}
            borderRadius={'full'}
            bg={useColorModeValue(`${available}.300`, `${available}.200`)}
            fontWeight={'400'}
          >
            {`${onePetShort.status}`}
          </Badge>
          <Text
            mt="1"
            px={2}
            py={1}
            fontWeight="bold"
            as="h4"
            lineHeight="tight"
            isTruncated
            textTransform="uppercase"
          >
            {onePetShort.name}
          </Text>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            ml="2"
          >
            {onePetShort.breed} &bull; {onePetShort.age} &bull;{' '}
            {`${
              onePetShort.likes.length === 1
                ? `${onePetShort.likes.length} Like`
                : `${onePetShort.likes.length} Likes`
            }`}
          </Box>
        </Box>
      </Box>
      <Flex direction="column">
        <Box p="2">
          <IconButton
            aria-label="Call Segun"
            size="sm"
            icon={<AddIcon color="gray.500" />}
            isRound="true"
            onClick={() =>
              alert('click!')
            } /**{ @TODO: aqui se hace otra llamada a axios para los likes y al finalizar cierra la ventana para seguir eligiendo }*/
          />
        </Box>
        <Spacer />
        <Box p="2">
          <IconButton
            aria-label="Call Segun"
            size="sm"
            icon={<CloseIcon color="red.500" />}
            isRound="true"
            onClick={() =>
              alert('click!')
            } /**{ @TODO: aqui se hace otra llamada a axios para los deslikes y al finalizar cierra la ventana }*/
          />
        </Box>
      </Flex>
    </Box>
  );
}
