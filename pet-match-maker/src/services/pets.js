import axios from 'axios';
import { BASE_URL } from '../constants';

export const petRegister = async (formData) => {
  try {
    const register = axios
      .post(`${BASE_URL}/pets/register`, formData, {
        headers: {
          'content-type': 'multipart/form-data'
        },
        withCredentials: true
      })
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    return register.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPet = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/pets${id}`);

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
