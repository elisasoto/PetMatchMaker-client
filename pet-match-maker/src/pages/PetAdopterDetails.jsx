import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { Box, IconButton } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

import { getUserFromPetLikes } from '../services/pets';
import UserProfile from '../components/Profile/UserProfile';

export default function PotentialAdopter() {
  const { userId } = useParams();
  const history = useHistory();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getUserFromPetLikes(userId).then((res) => {
      setProfile(res);
    });
  }, []);

  return (
    <>
      <Box p={2} m={2}>
        <Box p="2" textAlign="right" onClick={history.goBack}>
          <IconButton
            aria-label="Call Segun"
            size="sm"
            colorScheme="whiteAlpha"
            icon={<SmallCloseIcon color="black" />}
          />
          Close
        </Box>
        {profile ? <UserProfile profile={profile} /> : null}
      </Box>
    </>
  );
}
