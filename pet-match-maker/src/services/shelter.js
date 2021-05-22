import axios from 'axios';
import { BASE_URL } from '../constants/';

export const getShelterProfile = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/shelters/profile`, {
      withCredentials: true
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const putShelterProfile = async (formValues) => {
  try {
    const response = await axios.put(`${BASE_URL}/shelters/edit`, formValues, {
      withCredentials: true
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
