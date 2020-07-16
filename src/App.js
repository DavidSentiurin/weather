import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { NavLink } from 'react-router-dom';
import WeatherTable from './components/WeatherTable/WeatherTable';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { Header } from 'semantic-ui-react';
import { setLocation, weatherFromCoords, setCity } from './redux/actions/actions';
import CitySelector from './components/CitySelector/CitySelector';
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    navigator.geolocation.getCurrentPosition(this.props.onSetLocation);
  }

  componentDidUpdate(prevProps) {
    const isCoordinates = (this.props.latitude !== prevProps.latitude
      && this.props.longitude !== prevProps.longitude);

    if (isCoordinates) {
      const { latitude, longitude } = this.props;
      this.props.onWeatherFromCoords(latitude, longitude);
    }
  }

  render() {
    return (
      <>
        <div className='container'>
          {
            (!this.props.latitude && !this.props.longitude)
              ? <ErrorMessage children='Your geolocation is unknown. Allow to use geolocation or choose a city' />
              : <WeatherTable data={this.props.data} status={this.props.status} />
          }
          <Header size='huge'>Select your City</Header>
          <CitySelector onChange={this.props.onSetCity} />

          <NavLink to="/weather">
            <Button basic color='orange'>
              See the weather
            </Button>
          </NavLink>
        </div>
      </>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    city: state.city,
    latitude: state.latitude,
    longitude: state.longitude,
    data: state.data,
    status: state.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetLocation: geoPosition => dispatch(setLocation(geoPosition)),
    onWeatherFromCoords: (lat, lon) => dispatch(weatherFromCoords(lat, lon)),
    onSetCity: (e, { value }) => {
      dispatch(setCity(value));

      localStorage.setItem('city', value);
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
