import axios from 'axios';
import { BASE_URL } from '../constants/';

export const getShelterProfile = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/shelters/profile`);

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const putShelterProfile = async () => {
  try {
    const response = await axios.put(`${BASE_URL}/shelters/edit}`);

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
