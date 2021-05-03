import './styles.scss';
import Button from '../Button/Button';

export default function Access() {
  return (
    <div>
      <Button text="SignUp as Shelter" type="shelter" />
      <Button text="SignUp as Adopter" type="user" />
      <Button text="Login" type="login" />
    </div>
  );
}
