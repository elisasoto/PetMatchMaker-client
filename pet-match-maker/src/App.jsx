import { Route, Switch } from 'react-router-dom';

import Access from './components/AppInit/Access';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Access />

      <div className="main">
        <Switch>
          <Route exact path="user/home">
            {/*home de user (cartas de perros) */}
          </Route>
          <Route exact path="shelter/home">
            {/*home de shelter (cartas humanos)*/}
          </Route>
          <Route exact path="user/profile">
            {/*informacion de tu perfil o modificacion*/}
          </Route>
          <Route exact path="shelter/profile">
            {/*informacion de tu perfil o modificacion*/}
          </Route>
          <Route exact path="user/matches">
            {/*informacion del perrito con el que hizo match*/}
          </Route>
          <Route exact path="dog/matches">
            {/*informacion del humano con el que hizo match*/}
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
