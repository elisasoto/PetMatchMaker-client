import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

import { UserContext } from '../context/User';
import { getUserProfile } from '../services/user';
import UserProfile from '../components/Profile/UserProfile';

export default function UserProfilePage() {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user) {
      getUserProfile().then((res) => {
        setProfile(res);
      });
    }
  }, []);

  const handleRedirect = (path) => {
    history.push(path);
  };

  return (
    <>
      <Box p={2} m={2}>
        <Box
          p="2"
          textAlign="right"
          onClick={() => handleRedirect('/user/home')}
        >
          <IconButton
            aria-label="Call Segun"
            size="sm"
            colorScheme="whiteAlpha"
            icon={<SmallCloseIcon color="black" />}
          />
          Close
        </Box>
        {profile ? <UserProfile profile={profile} /> : null}
        <Button
          size="sm"
          colorScheme="cyan"
          type="submit"
          onClick={() => handleRedirect('/user/edit')}
        >
          Add / Edit Info
        </Button>
      </Box>
    </>
  );
}
