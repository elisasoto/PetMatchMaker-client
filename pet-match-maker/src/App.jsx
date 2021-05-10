import { Route, Switch } from 'react-router-dom';
import { UserContext, useUser } from './context/User';

function App() {
  const userContextData = useUser();

  return (
    <UserContext.Provider value={userContextData}>
      <div className="App">
        <Switch></Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
