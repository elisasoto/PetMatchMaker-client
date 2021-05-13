import React, { useState } from 'react';

import {
  postLoginAdopter,
  postLoginShelter,
  postAdopterRegister,
  postShelterRegister,
  getLogout
} from '../services/auth';

export const UserContext = React.createContext(null);

export function useUser() {
  const [user, setUser] = useState(null);

  async function adopterLogin({ email, password }) {
    postLoginAdopter(email, password).then((userData) => {
      setUser({ ...(user || {}), ...userData });
    });
  }

  async function adopterRegister(body) {
    const userData = await postAdopterRegister(body);
    setUser(userData);
  }

  async function shelterLogin({ email, password }) {
    postLoginShelter(email, password).then((userData) => {
      setUser({ ...(user || {}), ...userData });
    });
  }

  async function shelterRegister(body) {
    const userData = await postShelterRegister(body);
    setUser(userData);
  }

  async function logout() {
    getLogout().then(() => setUser(null));
  }

  return {
    user,
    adopterLogin,
    adopterRegister,
    shelterLogin,
    shelterRegister,
    logout
  };
}
