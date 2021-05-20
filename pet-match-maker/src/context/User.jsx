import React, { useState, useEffect } from 'react';

import {
  getShortProfile,
  postLoginAdopter,
  postLoginShelter,
  postAdopterRegister,
  postShelterRegister,
  getLogout
} from '../services/auth';

export const UserContext = React.createContext(null);

export function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getShortProfile()
      .then((shortUser) => setUser(shortUser))
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
    logout,
    loading
  };
}
