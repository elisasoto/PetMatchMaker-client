import { Route, Switch } from 'react-router-dom';
import { UserContext, useUser } from './context/User';
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';

import Init from './pages/Init';
import UserHome from './pages/UserHome';
import Login from './pages/LoginPage';
import SignUp from './pages/RegisterPage';

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
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
