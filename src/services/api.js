import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',  // NestJS 서버의 주소
});

export default api;