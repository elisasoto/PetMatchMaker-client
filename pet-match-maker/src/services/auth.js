import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

export async function postLoginAdopter(email, password) {
  const res = await axios.post(
    `${API_URL}/auth/login/user`,
    {
      email,
      password
    },

    { withCredentials: true }
  );

  return res.data.data;
}

export async function postLoginShelter(email, password) {
  const res = await axios.post(
    `${API_URL}/auth/login/shelter`,
    {
      email,
      password
    },

    { withCredentials: true }
  );

  return res.data.data;
}

export async function postAdopterRegister(body) {
  const res = await axios.post(`${API_URL}/auth/register/user`, body, {
    withCredentials: true
  });

  return res.data.data;
}

export async function postShelterRegister(body) {
  const res = await axios.post(`${API_URL}/auth/register/shelter`, body, {
    withCredentials: true
  });

  return res.data.data;
}

export async function getLogout() {
  return axios.get(`${API_URL}/auth/logout`, {
    withCredentials: true
  });
}
