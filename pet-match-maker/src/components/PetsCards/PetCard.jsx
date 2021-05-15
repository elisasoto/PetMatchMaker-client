import {
  Avatar,
  Box,
  Flex,
  Spacer,
  Text,
  IconButton,
  Badge,
  useColorModeValue
} from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';

export default function PetCard({ img, name, status, age, likes, breed }) {
  const available = status === 'Available' ? 'green' : 'red';
  return (
    <Box
      w="fit-content"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      pt={1}
      pb={1}
      d="flex"
      alignItems={'center'}
    >
      <Avatar
        size={'md'}
        src={`${img}`}
        alt={`${name}`}
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
            {`${status}`}
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
            {name}
          </Text>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            ml="2"
          >
            {breed} &bull; {age} &bull;
            {`${
              likes.length === 1
                ? `${likes.length} Like`
                : `${likes.length} Likes`
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
            } /**{ @TODO: se hace llamada a profile del pet }*/
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
            } /**{ @TODO: si es shelter se elimina del array, si es user se va a deslikes }*/
          />
        </Box>
      </Flex>
    </Box>
  );
}
