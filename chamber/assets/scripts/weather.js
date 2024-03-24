const currentTemp = document.querySelector(".currentTemp");
const tempDesc = document.querySelector(".tempDesc");
const threeDays = document.querySelector(".threeDays"); // New element for displaying 3 days' forecast
const lat = -10.929051478904585;
const lon = -37.07709878803804;
const api = "70b0fa88c17ec93cd14c87bf52b894f5";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api}`;

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
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  let desc = data.weather[0].description;
  tempDesc.textContent = `${desc}`;
}

apiFetch();

