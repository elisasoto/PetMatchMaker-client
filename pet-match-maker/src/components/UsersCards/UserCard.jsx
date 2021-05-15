import { Avatar, Box, Flex, Text, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { capitalize } from '../../constants/capitalize';

export default function UserCard({ name, surname, img, age, city, country }) {
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
            {`${name} ${surname}`}
          </Text>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            ml="2"
          >
            {capitalize(city)},{capitalize(country)} &bull; {age} Years
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
      </Flex>
    </Box>
  );
}
