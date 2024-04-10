const base = document.querySelector(".weather");
const baseforecast = document.querySelector(".forecast");

const lat = 20.5083;
const lon = -86.9458;
const api = "24cd025cfceca7e6888038789224c458";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;
const url_forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api}`

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
    // Handle the error here, like displaying an error message to the user
  }
}

function displayResults(data) {
  const icon = document.createElement("img");
  const temperature = document.createElement("h1")
  const humidity = document.createElement("p");
  const description = document.createElement("p");
  let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  icon.setAttribute('alt', `${data.weather[0].main}`);
  icon.setAttribute('src', iconsrc);
  let temperature_kelvin  = `${data.main.temp}`
  let real_temperature = (temperature_kelvin - 273.15) * 9/5 + 32;
  temperature.textContent = `${real_temperature.toFixed(2)} °F`
  humidity.textContent =  `Humidity: ${data.main.humidity}%`;
  description.textContent =  `${desc}`;

  base.appendChild(icon);
  base.appendChild(temperature);
  base.appendChild(description);
  base.appendChild(humidity);
}


async function apiForecast() {
  try {
    const response = await fetch(url_forecast);
    if (response.ok) {
      const data = await response.json();
      getWeatherForTomorrow(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);

  }
}

function getWeatherForTomorrow(weatherData) {
  // Get tomorrow's date
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowDate = tomorrow.toISOString().slice(0, 10);

  const tomorrowWeather = weatherData.list.find(item => item.dt_txt.startsWith(tomorrowDate));

  if (tomorrowWeather) {
    // Extract relevant information
    const temperature = tomorrowWeather.main.temp;
    const humidity = tomorrowWeather.main.humidity;
    const weatherDescription = tomorrowWeather.weather[0].description;
    const weatherIcon = tomorrowWeather.weather[0].icon;

    const tomorrow = document.createElement("p");
    const foreicon = document.createElement("img");
    const foretemperature = document.createElement("h1");
    const forehumidity = document.createElement("p");
    const foredescription = document.createElement("p");
    const real_temperature = (temperature - 273.15) * 9/5 + 32;

    let iconsrc = `https://openweathermap.org/img/w/${tomorrowWeather.weather[0].icon}.png`;
    foreicon.setAttribute('alt', `${tomorrowWeather.weather[0].main}`);
    foreicon.setAttribute('src', iconsrc);
    tomorrow.textContent = "Tomorrow:";
    foreicon.textContent = `${weatherIcon}`;
    foretemperature.textContent = `${real_temperature.toFixed(2)}°F`;
    foredescription.textContent = `${weatherDescription}`;
    forehumidity.textContent = `${humidity}`;

    baseforecast.appendChild(tomorrow);
    baseforecast.appendChild(foreicon);
    baseforecast.appendChild(foretemperature);
    baseforecast.appendChild(foredescription);
  }
}

apiFetch()
apiForecast()