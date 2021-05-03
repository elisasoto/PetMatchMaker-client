import IconLink from '../../IconLinks/IconLinks';

import './header.scss';

export default function Header({ type = '' }) {
  return (
    <div className="header">
      <IconLink type="profile" className="header__profile" />
      <IconLink type="logo" className="header__logo" />
      <IconLink type="dog" className="header__matches" />
    </div>
  );
}
