import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Box } from '@chakra-ui/react';

import { getSinglePet } from '../services/pets';
import PetProfile from '../components/Profile/PetDetailsShelter';

export default function UserLikes() {
  const [pet, setPet] = useState(null);

  const { petId } = useParams();

  useEffect(() => {
    getSinglePet(petId).then((res) => {
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
