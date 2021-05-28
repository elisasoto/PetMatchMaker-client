import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Container, Stack, Box, Heading, Text, Switch } from '@chakra-ui/react';

import Logo from '../components/Navbar/Logo';
import LogoImg from '../assets/petmatchmaker.png';
import UserRegister from '../components/Forms/UserRegisterForm/UserRegister';
import ShelterRegister from '../components/Forms/ShelterRegisterForm/ShelterRegister';

export default function RegisterPage() {
  const [isUser, setIsUser] = useState(1);
  return (
    <Container maxW="100%" mb="4" align="center">
      <Box flex={1} align="center">
        <Link to="/">
          <Logo picture={LogoImg} alt={LogoImg} />
        </Link>
      </Box>
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
          Sign-up Today!
        </Text>
      </Heading>
      <Stack spacing={2} mt={4} mb={4}>
        <Text as="span">
          Start session as
          <Text color="cyan.400" fontWeight={600}>
            {isUser ? 'Adopter' : 'Shelter'}
          </Text>
        </Text>
        <Switch
          id="mode"
          defaultIsChecked={isUser}
          onChange={(e) => {
            setIsUser(e.target.checked ? 1 : 0);
          }}
        />
      </Stack>
      {isUser ? <UserRegister /> : <ShelterRegister />}
      <Text pt="4" color={'grey.400'}>
        Already a Member?
      </Text>
      <Link to="/login">
        <Text color="cyan.400">Login here!</Text>
      </Link>
    </Container>
  );
}
