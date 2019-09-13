import React, { useState, useEffect } from 'react';
import prepareData from './utils/prepareData';
import CityInputForm from  './components/CityInputForm'
import TodaysWeather from  './components/TodaysWeather'
import WeatherForecastList from './components/WeatherForcastList';
import './styles/App.css';

const APP_ID = 'c2af9cd6faab30ec9fa7161eb63d26aa';
const WEATHER_API_BASE_URL = "http://api.openweathermap.org/data/2.5";
const CELSIUS_UNIT = "metric";
const API_TYPES = {
  WEATHER: 'weather',
  FORECAST: 'forecast'
}

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(()  => {
    if (city === '') return;

    setIsLoading(true);
    fetchData(city, API_TYPES.WEATHER).then(data => handleResult(data, API_TYPES.WEATHER));
    fetchData(city, API_TYPES.FORECAST).then(data => handleResult(data, API_TYPES.FORECAST));

  // eslint-disable-next-line
  }, [city]);

  async function fetchData(city, type) {
    if (city === "") return;

    const queryStr = `q=${city}&units=${CELSIUS_UNIT}&APPID=${APP_ID}`
    const url = `${WEATHER_API_BASE_URL}/${type}?${queryStr}`;

    try {
      return fetch(url).then(response => response.json());
    } catch (err) {
      console.error(err);
    }
  }

  function handleResult(data, type) {
    setIsLoading(false);

    if (!data) return;

    const setStateFn = type === API_TYPES.FORECAST ? setForecast : setWeather;

    if (data.cod.toString() === "200") {
      setStateFn(prepareData(data));
      setError();
    } else {
      handleError(data);
    }
  }

  function handleError({ cod }) {
    if (cod === "404") {
      setError(`No weather data found for "${city}".`)
    } else {
      setError(`An error occurred. Please try again.`)
    }
  }

  return (
    <div className="App">
      <h1>Delivery Hero Weather App</h1>
      <CityInputForm setCity={setCity} buttonText="Get Weather"></CityInputForm>
      <TodaysWeather weather={weather} city={city} isLoading={isLoading}></TodaysWeather>
      <WeatherForecastList forecast={forecast}></WeatherForecastList>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export { App as default };
