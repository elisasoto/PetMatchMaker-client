import './styles.scss';
import Button from '../Button/Button';

export default function Home() {
  return (
    <div>
      <h1>Welcome to PetMatchMaker</h1>
      <Button text="SignUp as Shelter" type="shelter" />
      <Button text="SignUp as Adopter" type="user" />
      <Button text="Login" type="login" />
    </div>
  );
}
