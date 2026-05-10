import './style.css';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');

const address = document.querySelector('.address');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon');
const temperature = document.querySelector('.temperature');
const condition = document.querySelector('.condition-data');
const feelsLike = document.querySelector('.feels-like-data');
const humidity = document.querySelector('.humidity-data');
const windGusts = document.querySelector('.wind-gusts-data');

let currentCityName = 'Da Lat';

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
  const windGusts = data.days[0].windgust + ' km/h';
  const icon = data.days[0].icon;

  return {
    cityName,
    time,
    cTemperature,
    condition,
    cFeelsLike,
    humidity,
    windGusts,
    icon,
  };
}

async function init(cityName) {
  if (!cityName) return;

  const data = await getWeatherData(cityName);
  const weather = processWeatherData(data);

  address.textContent = weather.cityName;
  time.textContent = weather.time;
  //icon
  temperature.textContent = weather.cTemperature;
  condition.textContent = weather.condition;
  feelsLike.textContent = weather.cFeelsLike;
  humidity.textContent = weather.humidity;
  windGusts.textContent = weather.windGusts;
}

init(currentCityName);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const cityName = input.value.trim();
  init(cityName);
});
