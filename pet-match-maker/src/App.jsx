import { Route, Switch } from 'react-router-dom';
import { UserContext, useUser } from './context/User';
import { ChakraProvider, CSSReset, Box, Container } from '@chakra-ui/react';

import Init from './pages/Init';
import Login from './pages/LoginPage';
import SignUp from './pages/RegisterPage';
import UserNavBar from './components/Navbar/UserNavBar';
import UserHome from './pages/UserHome';
import UserProfile from './pages/UserProfilePage';
import UserEditProfile from './pages/UserEditProfile';
import UserLikes from './pages/UserLikesPage';
import UserDetailedPet from './pages/UserPetLikedDetails';
import ShelterHome from './pages/ShelterHome';
import ShelterProfile from './pages/ShelterProfile';
import ShelterEditProfile from './pages/ShelterEditProfile';
import PetRegister from './pages/PetRegister';
import ShelterPetDetails from './pages/PetDetailsOnShelter';
import ShelterPetEdit from './pages/PetEditInfo';
import PotentialAdopterDetails from './pages/PetAdopterDetails';
import PetLikesPage from './pages/PetLikesPage';
import WithAuthentication from './hocs/WithAuthentication';

function App() {
  const userContextData = useUser();

  return (
    <ChakraProvider>
      <CSSReset />
      <UserContext.Provider value={userContextData}>
        <Container>
          <Switch>
            <Route exact path="/">
              <Box>
                <Init />
              </Box>
            </Route>
            <Route exact path="/login">
              <Box>
                <Login />
              </Box>
            </Route>
            <Route exact path="/signup">
              <Box>
                <SignUp />
              </Box>
            </Route>
            <Route exact path="/user/home">
              <Box>
                <WithAuthentication>
                  <UserHome />
                </WithAuthentication>
              </Box>
            </Route>
            <Route exact path="/user/profile">
              <Box>
                <WithAuthentication>
                  <UserProfile />
                </WithAuthentication>
              </Box>
            </Route>
            <Route exact path="/user/edit">
              <Box>
                <UserEditProfile />
              </Box>
            </Route>
            <Route exact path="/user/likes">
              <Box>
                <UserLikes />
              </Box>
            </Route>
            <Route exact path="/user/likes/pet">
              {/**this should be :petId */}

              <Box>
                <UserDetailedPet />
              </Box>
            </Route>
            <Route exact path="/shelter/home">
              <Box>
                <ShelterHome />
              </Box>
            </Route>
            <Route exact path="/shelter/profile">
              <Box>
                <ShelterProfile />
              </Box>
            </Route>
            <Route exact path="/shelter/edit">
              <Box>
                <ShelterEditProfile />
              </Box>
            </Route>
            <Route exact path="/pet/register">
              <Box>
                <PetRegister />
              </Box>
            </Route>
            <Route exact path="/pet/details">
              <Box>
                <ShelterPetDetails />
              </Box>
            </Route>
            <Route exact path="/pet/edit">
              <Box>
                <ShelterPetEdit />
              </Box>
            </Route>
            <Route exact path="/adopter/details">
              <Box>
                <PotentialAdopterDetails />
              </Box>
            </Route>
            <Route exact path="/pet/likes">
              <Box>
                <PetLikesPage />
              </Box>
            </Route>
          </Switch>
        </Container>
      </UserContext.Provider>
    </ChakraProvider>
  );
}

export default App;
