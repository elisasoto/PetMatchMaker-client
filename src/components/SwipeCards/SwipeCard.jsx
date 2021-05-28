import {
  Badge,
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Image,
  Spacer,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { sizer } from '../../constants/sizer';

export default function Cards({
  name,
  age,
  weight,
  img,
  breed,
  _id,
  handleClickLikes,
  handleClickDislike,
  handleMoreInfo
}) {
  const colorMode = useColorModeValue('white', 'gray.800');

  return (
    <Center py={12} className={`swipe`}>
      <Box
        role="group"
        p={6}
        maxW="100%"
        w="full"
        bg={colorMode}
        boxShadow="5px 10px 15px lightgray"
        rounded="lg"
        pos="relative"
        zIndex={1}
      >
        <Box
          rounded="lg"
          mt={-12}
          pos="relative"
          height="230px"
          _after={{
            transition: 'all 1s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${img})`,
            filter: 'blur(15px)',
            zIndex: -1
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)'
            }
          }}
        >
          <Image
            rounded="lg"
            height={230}
            width={282}
            objectFit="cover"
            src={img}
          />
        </Box>
        <Stack pt={6} align="center">
          <Heading
            fontSize="2rem"
            fontFamily="body"
            fontWeight={500}
            textTransform="uppercase"
          >
            {name}
          </Heading>
          <Text color="gray.500" fontSize="1.3rem" textTransform="uppercase">
            {breed}
          </Text>
          <Stack direction="row" align="center">
            <Badge
              px={2}
              py={1}
              borderRadius="full"
              bg={colorMode}
              fontWeight="400"
            >
              {age}
            </Badge>
            <Badge
              px={2}
              py={1}
              borderRadius="full"
              bg={colorMode}
              fontWeight="400"
            >
              {sizer(weight)}
            </Badge>
          </Stack>
        </Stack>
        <Flex>
          <Box p="2">
            <IconButton
              aria-label="Call Segun"
              size="lg"
              className="dislike"
              icon={<CloseIcon color="red" />}
              isRound="true"
              onClick={() => handleClickDislike(_id)}
            />
          </Box>
          <Spacer />
          <Box p="2">
            <IconButton
              aria-label="Call Segun"
              size="lg"
              icon={<AddIcon color="green.400" />}
              isRound="true"
              onClick={() => handleMoreInfo(_id)}
            />
          </Box>
          <Spacer />
          <Box p="2">
            <IconButton
              aria-label="Call Segun"
              className="like"
              size="lg"
              icon={<FontAwesomeIcon icon={faHeart} color="#0bc5ea" />}
              isRound="true"
              onClick={() => handleClickLikes(_id)}
            />
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
