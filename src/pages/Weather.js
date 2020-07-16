import React from 'react';
import WeatherTable from '../components/WeatherTable/WeatherTable';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { weatherFromCity } from '../redux/actions/actions';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const Weather = (props) => {
  const city = props.city || localStorage.getItem('city');

  if (city && props.data.name !== city) {
    props.onWeatherFromCity(city);
  }

  return (
    <div className='container'>
      {
        (city)
          ? <WeatherTable data={props.data} status={props.status} />
          : <ErrorMessage children='No city selected. Please return to the main page and select a city' />
      }
      <NavLink to="/">
        <Button
          basic
          color='orange'
          style={{ marginTop: 10 }}
        >
          Back to home page
        </Button>
      </NavLink>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    city: state.city,
    data: state.dataWeather || {},
    status: state.statusWeather,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onWeatherFromCity: (city) => dispatch(weatherFromCity(city)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
