import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Container, Stack, Box, Heading, Text, Switch } from '@chakra-ui/react';

import Logo from '../components/Navbar/Logo';
import LogoImg from '../assets/petmatchmaker.png';
import UserRegister from '../components/Forms/UserRegisterForm/UserRegister';
import ShelterRegister from '../components/Forms/ShelterRegisterForm/ShelterRegister';
import Footer from '../components/Footer/Footer';

export default function RegisterPage() {
  const [isUser, setIsUser] = useState(1);
  return (
    <Container maxW={'7xl'}>
      <Box flex={1} align={'center'}>
        <Link to="/">
          <Logo picture={LogoImg} alt={LogoImg} />
        </Link>
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
              Sign-Up today!
            </Text>
          </Heading>
        </Stack>
        <Text color={'grey.400'}>
          Already a Member?
          <Link to="/login">
            <Text color={'cyan.400'}>Login here!</Text>
          </Link>
        </Text>
      </Stack>
      <Container mb={12}>
        <Stack spacing={2}>
          <Text>
            Start session as
            <Text color={'cyan.400'} fontWeight={600}>
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
      </Container>
      <Footer />
    </Container>
  );
}
