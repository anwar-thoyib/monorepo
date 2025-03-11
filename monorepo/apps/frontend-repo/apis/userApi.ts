import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const fetchUserData = async (userId: string) => {
  const response = await axios.get(`${API_URL}/fetch-user-data/${userId}`);
  return response.data;
};

export const updateUserData = async (userId: string, userData: any) => {
  const response = await axios.put(`${API_URL}/update-user-data/${userId}`, userData);
  return response.data;
};