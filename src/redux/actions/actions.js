import { SET_LOCATION, WEATHER_FROM_COORDS, WEATHER_FROM_CITY, SET_CITY } from './actionTypes';
import api from '../../apiServices';
import citiesList from '../../citiesList/citiesList';

export const setLocation = (geoPosition) => {
  const { latitude, longitude } = geoPosition.coords;

  return {
    type: SET_LOCATION,
    latitude,
    longitude,
  }
};

export const weatherFromCoords = (latitude, longitude) => {
  return async (dispatch) => {
    try {
      let response = await api.getWeatherFromCoords(latitude, longitude);

      dispatch({
        type: WEATHER_FROM_COORDS,
        data: response.data,
        status: response.status,
      });
    } catch (err) {
      console.error(err);

      dispatch({
        type: WEATHER_FROM_COORDS,
        data: null,
        status: err.response.status,
      });
    }
  }
};

export const setCity = (city) => {
  return {
    type: SET_CITY,
    city,
  }
}

export const weatherFromCity = (city) => {
  const coordinates = {};

  citiesList.forEach(cityObj => {
    if (city === cityObj.name) {
      coordinates.latitude = cityObj.coord.lat;
      coordinates.longitude = cityObj.coord.lon;
    }
  });

  const { latitude, longitude } = coordinates;

  return async (dispatch) => {
    try {
      let response = await api.getWeatherFromCoords(latitude, longitude);

      dispatch({
        type: WEATHER_FROM_CITY,
        dataWeather: response.data,
        status: response.status,
      });
    } catch (err) {
      console.error(err);

      dispatch({
        type: WEATHER_FROM_CITY,
        dataWeather: null,
        status: err.response.status,
      });
    }
  }
};
