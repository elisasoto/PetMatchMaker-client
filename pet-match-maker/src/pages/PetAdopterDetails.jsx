import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Box, IconButton } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

import { getUserFromPetLikes } from '../services/pets';
import UserProfile from '../components/Profile/UserProfile';

export default function PotentialAdopter() {
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getUserFromPetLikes(userId).then((res) => {
      setProfile(res);
    });
  }, []);

  return (
    <>
      <Box p={2} m={2}>
        <Box p="2" textAlign="right">
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
