import React from 'react';
import PropTypes from 'prop-types';
import WeatherForecastItem from './WeatherForecastItem';
import '../styles/WeatherIcons.css';
import '../styles/WeatherForecastList.css';


function WeatherForecastList({ forecast }) {
  if (forecast.length === 0) return ("");

  return (
    <div className="weather-forcast-list">
      {forecast.length !== 0 && forecast.map((forecastItem) => {
        return (
          <WeatherForecastItem
            key={forecastItem.time}
            forecastItem={forecastItem}
          ></WeatherForecastItem>
        )
      })
    }
    </div>
  )
};

export default WeatherForecastList;

WeatherForecastList.propTypes = {
  forecast: PropTypes.array.isRequired
}
