import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Box, IconButton, Text } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

import { getPetLikes } from '../services/pets';
import AdopterList from '../components/AdoptersCards/AdopterList';

export default function PetsLlikes() {
  const history = useHistory();
  const [userList, setUserList] = useState([]);
  console.log(userList);

  const { petId } = useParams();

  useEffect(() => {
    getPetLikes(petId).then((res) => {
      setUserList(res.likes);
    });
  }, []);

  const handleMoreInfo = async (id) => {
    await history.push(`/adopter/details/${id}`);
  };

  return (
    <>
      <Box p={2} m={2}>
        <Link to="/shelter/home">
          <Box p="2" textAlign={'right'}>
            <IconButton
              aria-label="Call Segun"
              size="sm"
              colorScheme="whiteAlpha"
              icon={<SmallCloseIcon color="black" />}
            />
            Close
          </Box>
        </Link>
        {userList.length !== 0 ? (
          <AdopterList userList={userList} handleMoreInfo={handleMoreInfo} />
        ) : (
          <Text as="span" color="gray.400">
            You haven´t liked any pets yet
          </Text>
        )}
      </Box>
    </>
  );
}
