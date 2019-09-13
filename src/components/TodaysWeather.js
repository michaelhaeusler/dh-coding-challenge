import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import PropTypes from 'prop-types';
import '../styles/WeatherIcons.css';
import '../styles/TodaysWeather.css';

function TodaysWeather ({ weather, city, isLoading }) {
  if (isLoading === true) {
    return <LoadingSpinner />
  } else if (weather.icon) {
    return (
      <section className="weather-today">
        <div className={`weather-icon weather-icon--${weather.icon}`}></div>
        <section className="temperature">
          <div className="temperature--left-col">{weather.temp}</div>
          <div className="temperature--right-col">
            <div className="temperature--metric">l</div>
            <div className="temperature--max">{weather.maxTemp}</div>
            <div className="temperature--min">{weather.minTemp}</div>
          </div>
        </section>
        <p className="city">{city}</p>
        <p>{weather.description}</p>
      </section>
    )
  };

  return "";
};

TodaysWeather.propTypes = {
  weather: PropTypes.shape({
    icon: PropTypes.string,
    temp: PropTypes.number,
    maxTemp: PropTypes.number,
    minTemp: PropTypes.number
  }),
  city: PropTypes.string,
  isLoading: PropTypes.bool.isRequired
}

export default TodaysWeather;