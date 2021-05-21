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
import Footer from './components/Footer/Footer';

function App() {
  const userContextData = useUser();

  return (
    <ChakraProvider>
      <CSSReset />
      <UserContext.Provider value={userContextData}>
        {userContextData.user ? <UserNavBar /> : null}
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
              <WithAuthentication>
                <ShelterHome />
              </WithAuthentication>
            </Route>
            <Route exact path="/shelter/profile">
              <WithAuthentication>
                <ShelterProfile />
              </WithAuthentication>
            </Route>
            <Route exact path="/shelter/edit">
              <WithAuthentication>
                <ShelterEditProfile />
              </WithAuthentication>
            </Route>
            <Route exact path="/pet/register">
              <WithAuthentication>
                <PetRegister />
              </WithAuthentication>
            </Route>
            <Route exact path="/pet/details">
              <WithAuthentication>
                <ShelterPetDetails />
              </WithAuthentication>
            </Route>
            <Route exact path="/pet/edit">
              <WithAuthentication>
                <ShelterPetEdit />
              </WithAuthentication>
            </Route>
            <Route exact path="/adopter/details">
              <WithAuthentication>
                <PotentialAdopterDetails />
              </WithAuthentication>
            </Route>
            <Route exact path="/pet/likes">
              <WithAuthentication>
                <PetLikesPage />
              </WithAuthentication>
            </Route>
          </Switch>
        </Container>
      </UserContext.Provider>
    </ChakraProvider>
  );
}

export default App;
