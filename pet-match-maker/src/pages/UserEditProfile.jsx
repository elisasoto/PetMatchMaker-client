import { useState, useEffect, useContext } from 'react';
import { Box } from '@chakra-ui/react';

import { UserContext } from '../context/User';
import { getUserProfile } from '../services/user';
import UserEditInfo from '../components/Forms/UserRegisterForm/UserMoreInfo';

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
      <Box p={2} m={2}>
        {profile ? <UserEditInfo profile={profile} /> : null}
      </Box>
    </>
  );
}
