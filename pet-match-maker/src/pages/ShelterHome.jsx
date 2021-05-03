import Header from '../components/AppHome/Header/Header';
import Cards from '../components/AppHome/CardsDisplay/Cards';
import IconsMenu from '../components/AppHome/IconsMenu/IconsMenu';

export default function ShelterHome() {
  return (
    <div className="home">
      <Header />
      <Cards />
      <IconsMenu />
    </div>
  );
}
