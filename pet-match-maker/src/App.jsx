import { Route, Switch } from 'react-router-dom';
import { UserContext, useUser } from './context/User';
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';

import LoginForm from './components/Forms/LoginForm/LoginForm';
import ShelterRegister from './components/Forms/ShelterRegisterForm/ShelterRegister';

function App() {
  const userContextData = useUser();

  return (
    <UserContext.Provider value={userContextData}>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <ChakraProvider>
              <CSSReset />
              <Box p={24}>
                <LoginForm />
              </Box>
            </ChakraProvider>
          </Route>
          <Route exact path="/">
            <ChakraProvider>
              <CSSReset />
              <Box p={24}>
                <ShelterRegister />
              </Box>
            </ChakraProvider>
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
