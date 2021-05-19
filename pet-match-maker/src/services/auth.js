import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

export const getShortProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/auth/short-profile`, {
      withCredentials: true
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

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
  try {
    const res = await axios.post(
      `${API_URL}/auth/login/shelter`,
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
