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

async function apiForecast() {
  try {
    const response = await fetch(urlForecast);
    if (response.ok) {
      const data = await response.json();
      const targetDates = getNextThreeDates(); // Function to get next 3 days
      const temperatureData = getTemperatureForDates(data, targetDates);

      // Clear previous content in the "threeDays" div
      threeDays.innerHTML = '';

      // Create and append <p> elements for each day and temperature
      temperatureData.forEach(({ date, temperature }) => {
        const dateElement = document.createElement('p');
        const tempElement = document.createElement('p');

        dateElement.textContent = `\n${date}:`;
        tempElement.textContent = `${temperature}F°`;

        threeDays.appendChild(dateElement);
        threeDays.appendChild(tempElement);
      });
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
    // Handle the error here, like displaying an error message to the user
  }
}

function getNextThreeDates() {
  const currentDate = new Date();
  const nextThreeDates = [];
  for (let i = 1; i <= 3; i++) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + i);
    nextThreeDates.push(date.toISOString().slice(0, 10)); // Get YYYY-MM-DD format
  }
  return nextThreeDates;
}

function getTemperatureForDates(apiData, targetDates) {
  const temperatureData = [];
  let count = 0;
  for (const item of apiData.list) {
    const dateStr = item.dt_txt.split(' ')[0]; // Extract date part
    if (targetDates.includes(dateStr)) {
      temperatureData.push({
        date: dateStr,
        temperature: item.main.temp
      });
      count++;
      if (count === 3) break; // Break the loop after 3 days' data
    }
  }
  return temperatureData;
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  let desc = data.weather[0].description;
  tempDesc.textContent = `${desc}`;
}

apiFetch();
apiForecast();
