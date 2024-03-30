const tempDiv = document.querySelector(".weather-api");
const threeDaysDiv = document.querySelector(".threeDays")

const lat = -10.929051478904585;
const lon = -37.07709878803804;
const api = "70b0fa88c17ec93cd14c87bf52b894f5";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;
const urlThreeDays = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api}`

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
      console.log(data)
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
    // Handle the error here, like displaying an error message to the user
  }
}

function displayResults(data) {

  let iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  let icon = document.createElement("img");
  icon.setAttribute("src", iconURL);
  icon.setAttribute("alt", data.weather[0].description);
  icon.className = "actual-weather-img"
  tempDiv.appendChild(icon);

  let desc = data.weather[0].description;
  let pDesc = document.createElement("p");
  pDesc.textContent = `${desc}`;
  pDesc.className = "actual-weather-desc"
  tempDiv.appendChild(pDesc);

  let pTemp = document.createElement("p");
  pTemp.innerHTML = `${data.main.temp}&deg;F`;
  pTemp.className = "actual-weather-temp"
  tempDiv.appendChild(pTemp);

  tempDiv.className = "div-weather"
}

async function apiFetchThreeDays() {
  try {
    const response = await fetch(urlThreeDays);
    if (response.ok) {
      const data = await response.json();
      displayResultsThreeDays(data)
      console.log(data)
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
    // Handle the error here, like displaying an error message to the user
  }
}

function displayResultsThreeDays(data) {

  for (let i = 0; i <= 2; i++) {

    let base = data.list[i];

    let dateString = base.dt_txt;

    let dateObject = new Date(dateString);

    let formattedDate = dateObject.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    let formattedDayOfWeek = dateObject.toLocaleDateString('en-US', { weekday: 'long' }); 

    let pDate = document.createElement("p");
    pDate.textContent = `${formattedDayOfWeek}, ${formattedDate}`;
    pDate.className  = "dayDate"
    threeDaysDiv.appendChild(pDate);

    let pTemp = document.createElement("p");
    pTemp.innerHTML = `${base.main.temp}&deg;F`;
    threeDaysDiv.appendChild(pTemp);
  }
}





apiFetch();
apiFetchThreeDays();