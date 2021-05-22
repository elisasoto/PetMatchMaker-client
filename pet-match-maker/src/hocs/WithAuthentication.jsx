import { useContext } from 'react';
import Loader from 'react-loader-spinner';

import { UserContext } from '../context/User';
import LoginPage from '../pages/LoginPage';

function WithAuthentication({ children, roleToCheck = 'user' }) {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={2000}
      />
    );
  }

  console.log('WITH AUTH', user, roleToCheck);

  return (
    <>{user && user?.role === roleToCheck ? <>{children}</> : <LoginPage />}</>
  );
}

export default WithAuthentication;
