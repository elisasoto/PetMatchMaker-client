import { Route, Switch } from 'react-router-dom';
import { UserContext, useUser } from './context/User';
import { ChakraProvider, CSSReset, Container } from '@chakra-ui/react';

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
        <UserNavBar />
        <Container>
          <Switch>
            <Route exact path="/">
              <Init />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/user/home">
              <WithAuthentication>
                <UserHome />
              </WithAuthentication>
            </Route>
            <Route exact path="/user/profile">
              <WithAuthentication>
                <UserProfile />
              </WithAuthentication>
            </Route>
            <Route exact path="/user/edit">
              <WithAuthentication>
                <UserEditProfile />
              </WithAuthentication>
            </Route>
            <Route exact path="/user/likes">
              <WithAuthentication>
                <UserLikes />
              </WithAuthentication>
            </Route>
            <Route exact path="/user/likes/:petId">
              <WithAuthentication>
                <UserDetailedPet />
              </WithAuthentication>
            </Route>
            <Route exact path="/details/:petId">
              <WithAuthentication>
                <UserDetailedPet />
              </WithAuthentication>
            </Route>
          </Switch>
        </Container>
      </UserContext.Provider>
      <UserContext.Provider value={userContextData}>
        <Container>
          <Switch>
            <Route exact path="/shelter/home">
              <ShelterHome />
            </Route>
            <Route exact path="/shelter/profile">
              <ShelterProfile />
            </Route>
            <Route exact path="/shelter/edit">
              <ShelterEditProfile />
            </Route>
            <Route exact path="/pet/register">
              <PetRegister />
            </Route>
            <Route exact path="/pet/details">
              <ShelterPetDetails />
            </Route>
            <Route exact path="/pet/edit">
              <ShelterPetEdit />
            </Route>
            <Route exact path="/adopter/details">
              <PotentialAdopterDetails />
            </Route>
            <Route exact path="/pet/likes">
              <PetLikesPage />
            </Route>
          </Switch>
        </Container>
      </UserContext.Provider>
    </ChakraProvider>
  );
}

export default App;
