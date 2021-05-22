import { useState, useContext, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

import { UserContext } from '../context/User';
import { getShelterProfile } from '../services/shelter';
import ShelterEditInfo from '../components/Forms/ShelterRegisterForm/ShelterEditInfo';

export default function ShelterProfilePage() {
  const { user } = useContext(UserContext);

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user) {
      getShelterProfile().then((res) => {
        setProfile(res);
      });
    }
  }, []);

  return (
    <>
      <Box p={2} m={2}>
        {profile ? <ShelterEditInfo profile={profile} /> : null}
      </Box>
    </>
  );
}
