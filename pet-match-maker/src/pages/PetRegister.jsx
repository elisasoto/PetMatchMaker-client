import { useContext } from 'react';
import { Box } from '@chakra-ui/react';

import { UserContext } from '../context/User';
import PetRegistration from '../components/Forms/ShelterRegisterForm/PetRegister';

export default function PetRegister() {
  const { user } = useContext(UserContext);
  return (
    <>
      {user ? (
        <Box p={2} m={2}>
          <PetRegistration />
        </Box>
      ) : null}
    </>
  );
}
