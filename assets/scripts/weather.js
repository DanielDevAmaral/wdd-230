const currentTemp = document.querySelector(".weather_temp");
const weatherIcon = document.querySelector(".weather_icon");
const captionDesc = document.querySelector(".weather_desc");
const lat = -10.929051478904585;
const lon = -37.07709878803804;
const api = "70b0fa88c17ec93cd14c87bf52b894f5";


const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;

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
//weather[0].idweather[0].description

function displayResults(data) {
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('alt', `${data.weather[0].main}`);
  weatherIcon.setAttribute('src', iconsrc);
  captionDesc.textContent = `${data.main.temp}&deg;F - ${desc}`;
}

apiFetch()
