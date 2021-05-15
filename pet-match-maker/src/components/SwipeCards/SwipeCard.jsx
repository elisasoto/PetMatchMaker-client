import TinderCard from 'react-tinder-card';
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
import { CloseIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { sizer } from '../../constants/sizer';

export default function Cards({ name, age, weight, img, breed }) {
  return (
    <TinderCard
      className="swipe"
      preventSwipe={['up', 'down']}
      onSwipe={(direction) => {
        console.log(direction);
      }}
      flickOnSwipe={true}
    >
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
        >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
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
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={img}
            />
          </Box>
          <Stack pt={6} align={'center'}>
            <Heading
              fontSize={'2xl'}
              fontFamily={'body'}
              fontWeight={500}
              textTransform={'uppercase'}
            >
              {name}
            </Heading>
            <Text
              color={'gray.500'}
              fontSize={'2x1'}
              textTransform={'uppercase'}
            >
              {breed}
            </Text>
            <Stack direction={'row'} align={'center'}>
              <Badge
                px={2}
                py={1}
                borderRadius={'full'}
                bg={useColorModeValue('cyan.50', 'cyan.400')}
                fontWeight={'400'}
              >
                {age}
              </Badge>
              <Badge
                px={2}
                py={1}
                borderRadius={'full'}
                bg={useColorModeValue('cyan.50', 'gray.800')}
                fontWeight={'400'}
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
                icon={<CloseIcon color="red" />}
                isRound="true"
                onClick={() =>
                  alert('click!')
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
                  alert('click!')
                } /**{ @TODO: aqui se hace otra llamada a axios para los likes y al finalizar cierra la ventana para seguir eligiendo }*/
              />
            </Box>
          </Flex>
        </Box>
      </Center>
    </TinderCard>
  );
}
