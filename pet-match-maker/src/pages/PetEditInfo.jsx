import { Box } from '@chakra-ui/react';

import ShelterNavBar from '../components/Navbar/ShelterNavBar';
import PetEditInfo from '../components/Forms/ShelterRegisterForm/PetEditInfo';

export default function PetEditInfoPage() {
  return (
    <>
      <ShelterNavBar />
      <Box p={2} m={2}>
        <PetEditInfo />
      </Box>
    </>
  );
}
