import { Route, Switch } from 'react-router-dom';
import { UserContext, useUser } from './context/User';
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';

import LoginForm from './components/Forms/LoginForm/LoginForm';
import ShelterRegister from './components/Forms/ShelterRegisterForm/ShelterRegister';
import UserRegister from './components/Forms/UserRegisterForm/UserRegister';
import PetRegister from './components/Forms/ShelterRegisterForm/PetRegister';
import UserMoreInfo from './components/Forms/UserRegisterForm/UserMoreInfo';
import PetProfile from './components/Profile/PetProfile';
import UserProfile from './components/Profile/UserProfile';
import PetsList from './components/PetsCards/PetsList';
import UserList from './components/UsersCards/UserList';

import UserHome from './pages/UserHome';

function App() {
  const userContextData = useUser();

  return (
    <UserContext.Provider value={userContextData}>
      <div className="App">
        <Switch>
          <Route exact path="/user/home">
            <ChakraProvider>
              <CSSReset />
              <Box p={12}>
                <UserHome />
              </Box>
            </ChakraProvider>
          </Route>

          <Route exact path="/">
            <ChakraProvider>
              <CSSReset />
              <Box p={12}>
                <LoginForm />
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/shelter/register">
            <ChakraProvider>
              <CSSReset />
              <Box p={12}>
                <ShelterRegister />
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/pet/register">
            <ChakraProvider>
              <CSSReset />
              <Box p={12}>
                <PetRegister />
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/user/register">
            <ChakraProvider>
              <CSSReset />
              <Box p={12}>
                <UserRegister />
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/user/details">
            <ChakraProvider>
              <CSSReset />
              <Box p={12}>
                <UserMoreInfo />
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/pet">
            {/** :petId*/}
            <ChakraProvider>
              <CSSReset />
              <Box p={12}>
                <PetProfile />
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/user">
            {/** :petId*/}
            <ChakraProvider>
              <CSSReset />
              <Box p={12}>
                <UserProfile />
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/pets">
            <ChakraProvider>
              <CSSReset />
              <Box p={12}>
                <PetsList />
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/users">
            <ChakraProvider>
              <CSSReset />
              <Box p={12}>
                <UserList />
              </Box>
            </ChakraProvider>
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
