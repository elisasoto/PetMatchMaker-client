import { Link } from 'react-router-dom';
import { Container, Stack, Box, Heading, Text } from '@chakra-ui/react';

import Logo from '../components/Navbar/Logo';
import LogoImg from '../assets/petmatchmaker.png';
import LoginForm from '../components/Forms/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <Container maxW="100%" align="center">
      <Box flex={1} align="center">
        <Link to="/">
          <Logo picture={LogoImg} alt={LogoImg} />
        </Link>
      </Box>
      <Stack flex={1}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2rem', sm: '1rem', lg: '3rem' }}
        >
          <Text
            as="span"
            position="relative"
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
          <Text as="span" color="cyan.400">
            Thanks for visiting us
          </Text>
        </Heading>
        <LoginForm />
      </Stack>
      <Text pt="4" color="grey.400">
        Not yet a Member?
      </Text>
      <Link to="/signup">
        <Text color="cyan.400" mb={10}>
          SignUp in here!
        </Text>
      </Link>
    </Container>
  );
}
