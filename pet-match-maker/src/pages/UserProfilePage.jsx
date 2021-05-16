import { Box, Button, IconButton, Link } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

import UserProfile from '../components/Profile/UserProfile';
import UserNavBar from '../components/Navbar/UserNavBar';

export default function UserProfilePage() {
  return (
    <>
      <UserNavBar />
      <Box p={2} m={2}>
        <Link href="/user/home">
          <Box p="2" textAlign={'right'}>
            <IconButton
              aria-label="Call Segun"
              size="sm"
              colorScheme="whiteAlpha"
              icon={<SmallCloseIcon color="black" />}
            />
            Close
          </Box>
        </Link>
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
