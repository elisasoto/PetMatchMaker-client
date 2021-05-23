import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Box } from '@chakra-ui/react';

import { getPetDetails } from '../services/user';
import PetProfile from '../components/Profile/PetProfile';

export default function UserLikes() {
  const { petId } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    getPetDetails(petId).then((res) => {
      setPet(res);
    });
  }, []);

  return (
    <>
      <Box p={2} m={2}>
        {pet ? <PetProfile pet={pet} /> : null}
      </Box>
    </>
  );
}
