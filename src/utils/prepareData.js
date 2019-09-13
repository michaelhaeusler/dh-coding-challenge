function getDataForDay({ dt, main, weather }) {
  return {
    time: dt,
    temp: Math.round(main.temp),
    minTemp: Math.round(main.temp_min),
    maxTemp: Math.round(main.temp_max),
    type: weather[0].main,
    icon: weather[0].icon,
    description: weather[0].description
  };
}

export default (data) => {
  if (data.list) { // forecast data
    // we need every eighth elementc which is one value per day
    // because we get data for every three hours
    const RATIO = 8;

    // the first value we need is the seventh which is the value
    // in 21 hours. The forcast data start 3 hours from now.
    const forecastData = data.list.slice(6);
    const weatherData = [];

    //get one data set only for today and the next 4 days
    const forecastDays = forecastData.filter((value, index, arr) => {
      return (index % RATIO === 0);
    });

    forecastDays.forEach((day) => {
      weatherData.push(getDataForDay(day));
    });

    return weatherData;
  } else { // todays weather data
    return getDataForDay(data)
  }
}
