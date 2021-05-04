import { Route, Switch } from 'react-router-dom';
import { UserContext, useUser } from './context/User';

import LoginPage from './pages/LoginPage';
import SignUpAdopter from './pages/SignUpPageAdopter';
import SignUpShelter from './pages/SignUpPageShelter';
import UserMoreInfo from './components/UserRegisterForm/UserMoreInfo';
import PetRegister from './components/ShelterRegisterForm/PetRegister';
import ShelterHome from './pages/ShelterHomeProfile';

import './App.scss';

function App() {
  const userContextData = useUser();

  return (
    <UserContext.Provider value={userContextData}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/user/register">
            <SignUpAdopter />
          </Route>
          <Route exact path="/shelter/register">
            <SignUpShelter />
          </Route>
          <Route exact path="/dog/register">
            <PetRegister />
          </Route>
          <Route exact path="/user/home">
            {/*home de user (cartas de perros) */}
          </Route>
          <Route exact path="/shelter/home">
            <ShelterHome />
          </Route>
          <Route exact path="/user/profile">
            {/*informacion de tu perfil o modificacion*/}
          </Route>
          <Route exact path="/user/edit-profile">
            <UserMoreInfo />
          </Route>
          <Route exact path="/user-info/:id">
            {/*información adicional del formulario de registro*/}
          </Route>
          <Route exact path="/dog-info/:id">
            {/*información adicional del formulario de registro*/}
          </Route>
          <Route exact path="/shelter/profile">
            {/*informacion de tu perfil o modificacion*/}
          </Route>
          <Route exact path="/user/matches">
            {/*informacion del perrito con el que hizo match*/}
          </Route>
          <Route exact path="/dog/matches">
            {/*informacion del humano con el que hizo match*/}
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
