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
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=5ADA4NLN5C9KYT7EABH2P4TV2&unitGroup=metric`
  );

  const data = await response.json();

  return data;
}

function processWeatherData(data) {
  const cityName = data.resolvedAddress;
  const time = data.days[0].datetime;
  const icon = data.days[0].icon;
  const temperature = Math.round(data.days[0].temp) + '°C';
  const condition = data.days[0].conditions;
  const feelsLike = Math.round(data.days[0].feelslike) + '°C';
  const humidity = data.days[0].humidity + '%';
  const windGusts = data.days[0].windgust + ' km/h';

  return {
    cityName,
    time,
    icon,
    temperature,
    condition,
    feelsLike,
    humidity,
    windGusts,
  };
}

async function init(cityName) {
  if (!cityName) return;

  const data = await getWeatherData(cityName);
  const weather = processWeatherData(data);

  const iconModule = await import(`./assets/${weather.icon}.svg`);
  icon.src = iconModule.default;

  address.textContent = weather.cityName;
  time.textContent = weather.time;
  temperature.textContent = weather.temperature;
  condition.textContent = weather.condition;
  feelsLike.textContent = weather.feelsLike;
  humidity.textContent = weather.humidity;
  windGusts.textContent = weather.windGusts;
}

init(currentCityName);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const cityName = input.value.trim();
  init(cityName);
});
