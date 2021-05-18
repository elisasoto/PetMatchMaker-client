import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, IconButton, Link } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

import { UserContext } from '..//context/User';
import { getUserProfile } from '../services/user';
import UserProfile from '../components/Profile/UserProfile';
import UserNavBar from '../components/Navbar/UserNavBar';

export default function UserProfilePage() {
  const { user } = useContext(UserContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user) {
      getUserProfile().then((res) => {
        setProfile(res);
      });
    }
  }, []);
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
        {profile ? <UserProfile profile={profile} /> : null}
        <Link href="/user/edit">
          <Button size="sm" colorScheme="cyan" type="submit">
            Add / Edit Info
          </Button>
        </Link>
      </Box>
    </>
  );
}
