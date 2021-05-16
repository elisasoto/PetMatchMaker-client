import { Box } from '@chakra-ui/react';

import UserEditInfo from '../components/Forms/UserRegisterForm/UserMoreInfo';
import UserNavBar from '../components/Navbar/UserNavBar';

export default function UserProfilePage() {
  return (
    <>
      <UserNavBar />
      <Box p={2} m={2}>
        <UserEditInfo />
      </Box>
    </>
  );
}
