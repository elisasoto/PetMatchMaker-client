import { useState, useEffect } from 'react';
// import { useParams } from 'react-router';
// import axios from 'axios';

// import { BASE_URL } from '../../constants';
// import { getPet } from '../../services/pets';
import { mockedPet } from '../constants/mockers';
import { Box } from '@chakra-ui/react';

import PetProfile from '../components/Profile/PetProfile';

export default function UserLikes() {
  const [pet, setPet] = useState(mockedPet); // falla porque en el primer render no hay nada. @TODO: REVISAR FUNCION y hacer asincrona + un loading

  // const [loading, setLoading] = useState(true);

  // const { petId } = useParams();

  useEffect(() => {
    setPet(mockedPet);
  }, []);

  return (
    <>
      <Box p={2} m={2}>
        <PetProfile pet={pet} />
      </Box>
    </>
  );
}
