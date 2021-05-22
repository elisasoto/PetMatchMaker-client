import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { getPetDetails } from '../services/user';
import { Box } from '@chakra-ui/react';

import PetProfile from '../components/Profile/PetProfile';

export default function UserLikes() {
  const [pet, setPet] = useState(null);

  const { petId } = useParams();

  useEffect(() => {
    getPetDetails(petId).then((res) => {
      console.log(res);
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
