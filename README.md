# Weather App

## Introduction

This is a weather forecast web application developed as part of the JavaScript Course on The Odin Project. It allows users to search for any city and view current weather conditions including temperature, humidity, wind gusts, and more.

## Initial Project Goals

- Practice fetching real-world data from a third-party API (Visual Crossing).
- Handle asynchronous JavaScript using async/await.
- Process and filter JSON data returned from an API.
- Display dynamic data on the DOM based on user input.
- Build a clean, responsive UI with CSS Grid and Flexbox.

## Project Planning & Design

- **Reference UI**: Based on a sample submission from The Odin Project community.

## Technologies Used

- HTML5
- CSS3 (CSS Grid, Flexbox)
- JavaScript (ES6+, async/await, dynamic import)
- Visual Crossing Weather API
- Webpack
- Git & GitHub

## Completed Features

- Search for any city and display current weather data.
- Display weather icon matching current conditions using dynamic import.
- Show temperature, feels like, humidity, and wind gusts in metric units.
- Load Da Lat as the default city on page load.
- Handle invalid city names and failed API calls with error alerts.

## Demonstrated Skills

- **Fetching Data**: Used the Fetch API with async/await to retrieve weather data from Visual Crossing.
- **JSON Processing**: Extracted and transformed only the necessary fields from the API response.
- **DOM Manipulation**: Dynamically updated all weather fields and icons based on API response.
- **Error Handling**: Handled HTTP errors and invalid city inputs gracefully.
- **Dynamic Import**: Used Webpack-compatible dynamic imports to load SVG icons at runtime.
- **CSS Grid**: Used grid layout to structure the weather card cleanly.

## Lessons Learned

- **Biggest challenge**: Understanding how async/await works when chaining multiple asynchronous operations (fetch → json → dynamic import).
- **How I solved it**: Breaking the flow into clearly separated functions (getWeatherData, processWeatherData, init) made the logic easier to follow and debug.
- **What I would do differently**: Add a loading indicator while the API call is in progress to improve UX.
- **General lesson**: This project solidified my understanding of asynchronous JavaScript and how to work with real-world APIs in a structured way.

## Credits/Attribution

- **Weather Icons**: Visual Crossing Weather Icons (2nd Set - Color)
  - Source: https://github.com/visualcrossing/WeatherIcons
  - License: LGPL 3.0
  - No changes were made to the original work.
- **Font**: League Spartan
  - Source: https://fonts.google.com/specimen/League+Spartan
  - License: SIL Open Font License 1.1
  - No changes were made to the original work.

## Contact

- GitHub: [@BaoLong294](https://github.com/BaoLong294)
- Email: longbao2904@gmail.com
- LinkedIn: [Long Bảo](https://www.linkedin.com/in/long-b%E1%BA%A3o-a9226a377/)
