import { Avatar, Box, Text, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { capitalize } from '../../constants/capitalize';

export default function AdopterCard({
  img,
  name,
  age,
  surname,
  country,
  city,
  handleMoreInfo,
  _id
}) {
  return (
    <Box
      alignItems="center"
      borderRadius="lg"
      borderWidth="1px"
      d="flex"
      justifyContent="space-between"
      overflow="hidden"
      p={4}
      pb={1}
      pt={1}
      w="100%"
    >
      <Avatar
        alt={`${name}`}
        mb={2}
        pos="relative"
        size="md"
        src={`${img}`}
        _after={{
          content: '""'
        }}
      />
      <Box p="2">
        <Box alignItems="center">
          <Text
            as="h4"
            fontWeight="bold"
            isTruncated
            lineHeight="tight"
            mt="1"
            px={2}
            py={1}
            textTransform="uppercase"
          >
            {`${name} ${surname}`}
          </Text>
          <Box
            color="gray.500"
            fontSize="xs"
            fontWeight="semibold"
            letterSpacing="wide"
            ml="2"
          >
            {`${age} Years`}&bull;
            {capitalize(city)},{capitalize(country)}
          </Box>
        </Box>
      </Box>
      <IconButton
        aria-label="Call Segun"
        icon={<AddIcon color="gray.500" />}
        isRound="true"
        onClick={() => handleMoreInfo(_id)}
        size="sm"
      />
    </Box>
  );
}
