const base = document.querySelector(".weather");

const lat = 20.5083;
const lon = -86.9458;
const api = "70b0fa88c17ec93cd14c87bf52b894f5";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;
const url_forecast = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${api}`

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
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
  let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  icon.setAttribute('alt', `${data.weather[0].main}`);
  icon.setAttribute('src', iconsrc);
  let temperature_kelvin  = `${data.main.temp}`
  let real_temperature = (temperature_kelvin - 273.15) * 9/5 + 32;
  temperature.textContent = `${real_temperature.toFixed(2)} °F`
  humidity.textContent =  `Humidity: ${data.main.humidity}%`;

  base.appendChild(icon);
  base.appendChild(temperature);
  base.appendChild(humidity);
}

apiFetch()
