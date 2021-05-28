import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Box } from '@chakra-ui/react';

import { getSinglePet } from '../services/pets';
import PetEditInfo from '../components/Forms/ShelterRegisterForm/PetEditInfo';

export default function PetEditInfoPage() {
  const { petId } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    getSinglePet(petId).then((res) => {
      const { dateArrivalInShelter, ...restValues } = res;
      const transformedPet = {
        ...restValues,
        dateArrivalInShelter: new Date(Date.parse(dateArrivalInShelter))
      };
      setPet(transformedPet);
    });
  }, []);

  return (
    <>
      <Box p={2} m={2}>
        {pet ? <PetEditInfo pet={pet} /> : null}
      </Box>
    </>
  );
}
