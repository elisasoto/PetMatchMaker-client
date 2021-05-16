import { Container, Stack, Box, Heading, Text } from '@chakra-ui/react';

import Logo from '../components/Navbar/Logo';
import LogoImg from '../assets/petmatchmaker.png';
import LoginForm from '../components/Forms/LoginForm/LoginForm';

export default function Init() {
  return (
    <Container maxW={'7xl'}>
      <Box flex={1} align={'center'}>
        <Logo picture={LogoImg} alt={LogoImg} />
      </Box>
      <Stack
        align={'center'}
        spacing={{ base: 2, md: 5 }}
        py={{ base: 2, md: 15 }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 5 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '6xl', lg: '10xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'cyan.400',
                zIndex: -1
              }}
            >
              Welcome!
            </Text>
            <br />
            <Text as={'span'} color={'cyan.400'}>
              Login to enjoy the app
            </Text>
          </Heading>
          <LoginForm />
        </Stack>
      </Stack>
    </Container>
  );
}
