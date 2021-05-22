import { Box, IconButton, Link } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import ShelterProfile from '../components/Profile/ShelterProfile';

export default function PotentialAdopter() {
  //id de usuario con params, set adopter y pasar la info a UserProfile con props
  return (
    <>
      <Box p={2} m={2}>
        <Link href="/pet/likes">
          <Box p="2" textAlign="right">
            <IconButton
              aria-label="Call Segun"
              size="sm"
              colorScheme="whiteAlpha"
              icon={<SmallCloseIcon color="black" />}
            />
            Close
          </Box>
        </Link>
        <ShelterProfile />
      </Box>
    </>
  );
}
