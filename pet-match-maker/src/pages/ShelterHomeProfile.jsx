import { useContext } from 'react';

import Header from '../components/AppHome/Header/Header';
import Cards from '../components/AppHome/CardsDisplay/Cards';
import IconsMenu from '../components/AppHome/IconsMenu/IconsMenu';
import { UserContext } from '../context/User';

export default function ShelterHome() {
  const { logout } = useContext(UserContext);
  return (
    <div className="home">
      <button type="Submit" onClick={logout}>
        Log me out
      </button>
      <Header />
      <Cards />
      <IconsMenu />
    </div>
  );
}
