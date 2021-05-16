import React, { useState } from 'react';
import { Switch, Stack, Text, Container } from '@chakra-ui/react';

import UserRegister from '../UserRegisterForm/UserRegister';
import ShelterRegister from '../ShelterRegisterForm/ShelterRegister';

export default function Registration() {
  const [isUser, setIsUser] = useState(1);
  return (
    <Container>
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
  );
}
