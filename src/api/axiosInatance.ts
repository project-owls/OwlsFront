import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://3.35.126.85:3000/',
});

export default axiosInstance;
