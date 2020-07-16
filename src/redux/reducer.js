import { SET_LOCATION, WEATHER_FROM_COORDS, WEATHER_FROM_CITY, SET_CITY } from './actions/actionTypes';

const initialState = {
  data: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return Object.assign({}, state, {
        latitude: action.latitude,
        longitude: action.longitude,
      });
    case WEATHER_FROM_COORDS:
      return Object.assign({}, state, {
        data: action.data,
        status: action.status,
      });
    case SET_CITY:
      return Object.assign({}, state, {
        city: action.city,
      });
    case WEATHER_FROM_CITY:
      return Object.assign({}, state, {
        dataWeather: action.dataWeather,
        statusWeather: action.status,
      });
    default:
      return state;
  }
}

export default rootReducer;
