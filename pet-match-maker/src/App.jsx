import { Route, Switch } from 'react-router-dom';
import { UserContext, useUser } from './context/User';
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';

import Init from './pages/Init';
import Login from './pages/LoginPage';
import SignUp from './pages/RegisterPage';
import UserHome from './pages/UserHome';
import UserProfile from './pages/UserProfilePage';
import UserEditProfile from './pages/UserEditProfile';
import UserLikes from './pages/UserLikesPage';
import UserDetailedPet from './pages/UserPetLikedDetails';
import ShelterHome from './pages/ShelterHome';

function App() {
  const userContextData = useUser();

  return (
    <UserContext.Provider value={userContextData}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ChakraProvider>
              <CSSReset />
              <Box>
                <Init />
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/login">
            <ChakraProvider>
              <CSSReset />
              <Box>
                <Login />
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/signup">
            <ChakraProvider>
              <CSSReset />
              <Box>
                <SignUp />
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/user/home">
            <ChakraProvider>
              <CSSReset />
              <Box>
                <UserHome />
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/user/profile">
            <ChakraProvider>
              <CSSReset />
              <Box>
                <UserProfile />
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/user/edit">
            <ChakraProvider>
              <CSSReset />
              <Box>
                <UserEditProfile />
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/user/likes">
            <ChakraProvider>
              <CSSReset />
              <Box>
                <UserLikes />
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/user/likes/pet">
            {/**this should be :petId */}
            <ChakraProvider>
              <CSSReset />
              <Box>
                <UserDetailedPet />
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/shelter/home">
            <ChakraProvider>
              <CSSReset />
              <Box>
                <ShelterHome />
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/shelter/profile">
            <ChakraProvider>
              <CSSReset />
              <Box>
                <h1>shelter profile</h1>
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/shelter/edit">
            <ChakraProvider>
              <CSSReset />
              <Box>
                <h1>shelter edit profile</h1>
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/pet/register">
            <ChakraProvider>
              <CSSReset />
              <Box>
                <h1>shelter pet register</h1>
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/pet/edit">
            <ChakraProvider>
              <CSSReset />
              <Box>
                <h1>shelter pet edit</h1>
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/pet/details">
            <ChakraProvider>
              <CSSReset />
              <Box>
                <h1>shelter pet details</h1>
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/pet/likes">
            <ChakraProvider>
              <CSSReset />
              <Box>
                <h1>shelter pet likes</h1>
              </Box>
            </ChakraProvider>
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
