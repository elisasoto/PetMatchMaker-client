import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const icons = {
  profile: faUser,
  dog: faDog,
  logo: faPaw
};

export default function IconLink({ type = '', path = '' }) {
  return (
    <div className="iconBox">
      <div className="iconlink iconlink--hover">
        <FontAwesomeIcon icon={icons[type]} />
      </div>
    </div>
  );
}
