import { Route, Switch } from 'react-router-dom';
import { UserContext, useUser } from './context/User';
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';

import LoginForm from './components/Forms/LoginForm/LoginForm';
import ShelterRegister from './components/Forms/ShelterRegisterForm/ShelterRegister';
import UserRegister from './components/Forms/UserRegisterForm/UserRegister';

function App() {
  const userContextData = useUser();

  return (
    <UserContext.Provider value={userContextData}>
      <div className="App">
        <Switch>
          <Route exact path="/login">
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
          <Route exact path="/user/register">
            <ChakraProvider>
              <CSSReset />
              <Box p={12}>
                <UserRegister />
              </Box>
            </ChakraProvider>
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
