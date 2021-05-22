import { Box } from '@chakra-ui/react';

import PetRegistration from '../components/Forms/ShelterRegisterForm/PetRegister';

export default function PetRegister() {
  return (
    <>
      <Box p={2} m={2}>
        <PetRegistration />
      </Box>
    </>
  );
}
