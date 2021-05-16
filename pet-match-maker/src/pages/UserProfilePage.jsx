import { Box, Button, Link } from '@chakra-ui/react';

import UserProfile from '../components/Profile/UserProfile';
import UserNavBar from '../components/Navbar/UserNavBar';

export default function UserProfilePage() {
  return (
    <>
      <UserNavBar />
      <Box p={2} m={2}>
        <UserProfile />
        <Link href="/user/edit">
          <Button size="sm" colorScheme="cyan" type="submit">
            Edit My Info
          </Button>
        </Link>
      </Box>
    </>
  );
}
