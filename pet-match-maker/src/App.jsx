import { Route, Switch } from 'react-router-dom';

import Access from './components/AppInit/Access';
import LoginForm from './components/LoginForm/LoginForm';
import UserRegister from './components/UserRegisterForm/UserRegister';
import UserMoreInfo from './components/UserRegisterForm/UserMoreInfo';
import ShelterRegister from './components/ShelterRegisterForm/ShelterRegister';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Access />
        </Route>

        <Route exact path="/user/register">
          <UserRegister />
        </Route>

        <Route exact path="/shelter/register">
          <ShelterRegister />
        </Route>

        <Route exact path="/dog/register">
          {/*componente de registro de perro */}
        </Route>

        <Route exact path="/login">
          <LoginForm />
        </Route>

        <Route exact path="/user/home">
          {/*home de user (cartas de perros) */}
        </Route>

        <Route exact path="/shelter/home">
          {/*home de shelter (cartas humanos)*/}
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
  );
}

export default App;
