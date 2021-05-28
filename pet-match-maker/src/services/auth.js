import axios from 'axios';
import { BASE_URL } from '../constants';

export const getShortProfile = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/auth/short-profile`, {
      withCredentials: true
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export async function postLoginAdopter(email, password) {
  try {
    const res = await axios.post(
      `${BASE_URL}/auth/login/user`,
      {
        email,
        password
      },

      { withCredentials: true }
    );

    return res.data.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function postLoginShelter(email, password) {
  try {
    const res = await axios.post(
      `${BASE_URL}/auth/login/shelter`,
      {
        email,
        password
      },

      { withCredentials: true }
    );

    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function postAdopterRegister(body) {
  const res = await axios.post(`${BASE_URL}/auth/register/user`, body, {
    withCredentials: true
  });

  return res.data.data;
}

export async function postShelterRegister(body) {
  const res = await axios.post(`${BASE_URL}/auth/register/shelter`, body, {
    withCredentials: true
  });

  return res.data.data;
}

export async function getLogout() {
  return axios.get(`${BASE_URL}/auth/logout`, {
    withCredentials: true
  });
}
