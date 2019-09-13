import React from 'react';
import PropTypes from 'prop-types';
import '../styles/WeatherIcons.css';
import '../styles/WeatherForecastItem.css';

function getWeekdayfromTimestamp(timestamp) {
  const time = new Date(timestamp * 1000);
  return time.toLocaleDateString('en-EN', { weekday: 'long'});
}

function WeatherForecastItem({ forecastItem }) {
  return (
    <div className="weather-list-item-wrapper">
      <section className='weather-list-item'>
        <div className={`weather-icon weather-icon--${forecastItem.icon}`}></div>
        <div className="weather-list-item__forecast-data">
          <p className="weather-list-item__weekday">
            {getWeekdayfromTimestamp(forecastItem.time)}
          </p>
          <p className="weather-list-item__temperature">{forecastItem.temp}</p>
        </div>
      </section>
    </div>
  )
};

WeatherForecastItem.propTypes = {
  forecastItem: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    temp: PropTypes.number.isRequired
  })
}

export default WeatherForecastItem