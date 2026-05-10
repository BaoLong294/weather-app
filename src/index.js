import './style.css';

async function getWeatherData(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=5ADA4NLN5C9KYT7EABH2P4TV2`
  );

  const data = await response.json();

  return data;
}

function processWeatherData(data) {
  const fTemperature = data.days[0].temp;
  const cTemperature = ((fTemperature - 32) / 1.8).toFixed(1);

  const fFeelsLike = data.days[0].feelslike;
  const cFeelsLike = ((fFeelsLike - 32) / 1.8).toFixed(1);

  const cityName = data.resolvedAddress;
  const time = data.days[0].datetime;
  const condition = data.days[0].conditions;
  const humidity = data.days[0].humidity + '%';
  const windGuts = data.days[0].windgust + ' km/h';
  const icon = data.days[0].icon;

  return {
    cityName,
    time,
    cTemperature,
    condition,
    cFeelsLike,
    humidity,
    windGuts,
    icon,
  };
}

async function init() {
  const dalatData = await getWeatherData('Da Lat');
  const dalatWeather = processWeatherData(dalatData);

  console.log(dalatWeather);
}

init();
