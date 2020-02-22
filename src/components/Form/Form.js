import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import './../Main/Main.scss';
import './Form.scss';

function Form({
  handleChange,
  loadWeather,
  handleBack,
  city,
  temp_min,
  temp_max,
  temp,
  description,
  weatherIcon,
}) {
  return (
    <div className='main'>
      <button onClick={handleBack} className='back'>
        Back
      </button>
      <form className='form' onSubmit={loadWeather}>
        <input
          className='city'
          type='text'
          placeholder='City'
          //value={city}
          name='city'
          onChange={handleChange}
        />
        <input
          className='country'
          type='text'
          placeholder='Country'
          //value={country}
          name='country'
          onChange={handleChange}
        />
        <button className='button'>Get Weather</button>
      </form>
      <WeatherCard
        city={city}
        temp_min={temp_min}
        temp_max={temp_max}
        temp={temp}
        description={description}
        weatherIcon={weatherIcon}
      />
    </div>
  );
}

export default Form;
