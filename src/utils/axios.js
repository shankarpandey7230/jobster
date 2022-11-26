import axios from 'axios';
import { getUserFromLocalStorage } from './localStorage';

const customFetch = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
});

customFetch.interceptors.request.use(
  (config) => {
    const user = getUserFromLocalStorage();
    if (user) {

      // if you put .common then it will be indefinite;
      config.headers['Authorization'] = `Bearer ${user.token}`;
    }
    return config;
  }
)
export default customFetch;