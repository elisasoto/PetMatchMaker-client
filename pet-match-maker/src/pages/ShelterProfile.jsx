import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

import { UserContext } from '../context/User';
import { getShelterProfile } from '../services/shelter';
import ShelterNavBar from '../components/Navbar/ShelterNavBar';
import ShelterProfile from '../components/Profile/ShelterProfile';

export default function ShelterProfilePage() {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user) {
      getShelterProfile().then((res) => {
        setProfile(res);
      });
    }
  }, []);

  const handleRedirect = (path) => {
    history.push(path);
  };

  return (
    <>
      <ShelterNavBar />
      <Box p={2} m={2}>
        <Box
          p="2"
          textAlign="right"
          onClick={() => handleRedirect('/shelter/home')}
        >
          <IconButton
            aria-label="Call Segun"
            size="sm"
            colorScheme="whiteAlpha"
            icon={<SmallCloseIcon color="black" />}
          />
          Close
        </Box>
        {profile ? <ShelterProfile profile={profile} /> : null}
      </Box>
    </>
  );
}
