import { Box } from '@chakra-ui/react';
import ShelterNavBar from '../components/Navbar/ShelterNavBar';
import PetRegistration from '../components/Forms/ShelterRegisterForm/PetRegister';

export default function PetRegister() {
  return (
    <>
      <ShelterNavBar />
      <Box p={2} m={2}>
        <PetRegistration />
      </Box>
    </>
  );
}
