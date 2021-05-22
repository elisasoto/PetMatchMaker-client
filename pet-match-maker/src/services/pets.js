import axios from 'axios';
import { BASE_URL } from '../constants';

export const putPetRegister = async (formData) => {
  try {
    const register = await axios.post(`${BASE_URL}/pets/register`, formData, {
      headers: {
        'content-type': 'multipart/form-data'
      },
      withCredentials: true
    });

    return register.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const putPetEdit = async (formData, id) => {
  try {
    const register = await axios.post(`${BASE_URL}/pets/edit/${id}`, formData, {
      headers: {
        'content-type': 'multipart/form-data'
      },
      withCredentials: true
    });

    return register.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPetListFromShelter = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/pets`, {
      withCredentials: true
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getSinglePet = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/pets/${id}`, {
      withCredentials: true
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPetLikes = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/pets/likes/${id}`, {
      withCredentials: true
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const putDeleteSinglePet = async (id) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/pets/delete/${id}`,
      {},
      {
        withCredentials: true
      }
    );

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUserFromPetLikes = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/pets/user/${id}`, {
      withCredentials: true
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
