import config from './config';
import axios from 'axios';

const url = config.url;
const apiKey = config.apiKey;

const api = {
  getWeatherFromCoords: (latitude, longitude) => {
    if (!latitude || !longitude) {
      console.error(`Error of coordinates. Latitude: ${latitude}, longitude: ${longitude}.`);
      return;
    }

    return (
      axios.get(`${url}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    );
  },
  getWeatherFromCity: (city) => {
    return (
      axios.get(`${url}?q=${city}&appid=${apiKey}`)
    );
  },
};

export default api;
