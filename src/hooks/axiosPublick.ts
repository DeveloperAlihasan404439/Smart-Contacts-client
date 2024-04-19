import axios, { AxiosInstance } from 'axios';

const axiosPublick = (): AxiosInstance => {
  const instance = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://neutron-ltd-server-chi.vercel.app',
  });

  return instance;
};

export default axiosPublick;
