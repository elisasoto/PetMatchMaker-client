import axios from 'axios';
import { BASE_URL } from '../constants/';

export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users/profile`, {
      withCredentials: true
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPetList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users/pets?page=`, {
      withCredentials: true
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUsersLikes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users/myLikes`, {
      withCredentials: true
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPetDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/pet/${id}`, {
      withCredentials: true
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const putUserLikes = async (id) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/users/likes/${id}`,
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

export const putUserDislikes = async (id) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/users/deslikes/${id}`,
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

export const putUserProfile = async (formData) => {
  try {
    const response = await axios.put(`${BASE_URL}/users/edit`, formData, {
      headers: {
        'content-type': 'multipart/form-data'
      },
      withCredentials: true
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
