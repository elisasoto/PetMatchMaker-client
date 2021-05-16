import { Box } from '@chakra-ui/react';

import ShelterEditInfo from '../components/Forms/ShelterRegisterForm/ShelterEditInfo';
import ShelterNavBar from '../components/Navbar/ShelterNavBar';

export default function UserProfilePage() {
  return (
    <>
      <ShelterNavBar />
      <Box p={2} m={2}>
        <ShelterEditInfo />
      </Box>
    </>
  );
}
