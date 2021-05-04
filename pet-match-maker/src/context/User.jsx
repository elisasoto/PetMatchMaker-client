import React, { useState } from 'react';

import {
  postLoginAdopter,
  postAdopterRegister,
  getLogout
} from '../services/auth';

export const UserContext = React.createContext(null);

export function useUser() {
  const [user, setUser] = useState(null);

  async function adopterLogin(email, password) {
    postLoginAdopter(email, password).then((userData) => {
      setUser({ ...(user || {}), ...userData });
    });
  }

  async function adopterRegister(body) {
    const userData = await postAdopterRegister(body);
    setUser(userData);
  }

  async function logout() {
    getLogout().then(() => setUser(null));
  }

  return { user, adopterLogin, adopterRegister, logout };
}
