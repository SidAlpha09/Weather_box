$('#circleDrop').click(function(){
  $('.card-middle').slideToggle();
  $('.close').toggleClass('closeRotate');
});
// script.js
function getWeather() {
  // Replace 'YourOpenWeatherMapAPIKey' and 'YourCity' with your actual API key and city
  const apiKey = 'b91dc8f2734a6887c9b4d011a4e1375a';
  const city = 'Kolkata';
  const units = 'metric';

  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  fetchWeather(apiUrl);
}

function fetchWeather(apiUrl) {
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          displayWeather(data);
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
      });
}

function displayWeather(weatherData) {
  const temperatureElement = document.getElementById('temperature');
  const humidityElement = document.getElementById('humidity');
  const weatherElement = document.getElementById('weather');

  const temperature = weatherData.main.temp;
  const humidity = weatherData.main.humidity;
  const weather = weatherData.weather[0].main;

  temperatureElement.innerText = `Temperature: ${temperature}°C`;
  humidityElement.innerText = `Humidity: ${humidity}%`;
  weatherElement.innerText = `Weather: ${weather}`;
}

function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  clockElement.innerText = `${hours}:${minutes}:${seconds}`;
}

// Fetch weather data initially
getWeather();

// Set interval to update the clock every second
setInterval(() => {
  updateClock();
}, 1000);  // 1 second
