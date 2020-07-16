import React from './node_modules/react';
import citiesList from '../../citiesList/citiesList';
import { Select } from './node_modules/semantic-ui-react';

const countryOptions = citiesList.map(city => {
  return {
    key: city.id,
    value: city.name,
    text: city.name,
  }
})

const SelectWithCities = (props) => {
  return (
    <>
      <Select
        placeholder='Select your city'
        options={countryOptions}
        onChange={props.onChange}
      />
    </>
  );
}

export default SelectWithCities;
