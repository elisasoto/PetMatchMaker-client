import IconLink from '../../IconLinks/IconLinks';

import './header.scss';

export default function Header() {
  return (
    <div className="header">
      <IconLink type="profile" className="header__profile" />
      <IconLink type="dog" className="header__matches" />
      <IconLink type="logout" />
    </div>
  );
}
