const btn = document.getElementById("fetchingButton");
const form = document.getElementById("searchForm");
const input = document.getElementById("search");
const weatherWrapper = document.getElementById("weatherDisplayWrapper");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function displayWeather(response) {
  console.log("works");
  const city = document.createElement("h1");
  city.className = "city";
  city.innerText = `${response.location.name}, ${response.location.country}`;
  weatherWrapper.appendChild(city);

  const condition = document.createElement("h2");
  condition.className = "condition";
  condition.innerText = response.current.condition.text;
  weatherWrapper.appendChild(condition);

  const temp = document.createElement("h2");
  temp.className = "temp";
  temp.innerText = `${response.current.temp_c}U+000B0 C`;
  weatherWrapper.appendChild(temp);

  const feels = document.createElement("h3");
  feels.className = "feels additionalInfo";
  feels.innerText = `FEELS LIKE: ${response.current.temp_c}U+000B0 C`;
  weatherWrapper.appendChild(feels);

  const humidity = document.createElement("h3");
  humidity.className = "humidity additionalInfo";
  humidity.innerText = `HUMIDITY: ${response.current.humidity}%`;
  weatherWrapper.appendChild(humidity);

  const wind = document.createElement("h3");
  wind.className = "wind additionalInfo";
  wind.innerText = `WIND: ${response.current.humidity}km/h`;
  weatherWrapper.appendChild(wind);
}

function fetchWeather(searchFor) {
  const key = "";
  const path = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${searchFor}`;
  fetch(path, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      let weatherINFO = response;
      displayWeather(weatherINFO);
    })
    .catch((err) => {
      console.error(err);
    });
}

function onSearch(e) {
  let searchFor;
  if (input.value !== "") {
    searchFor = input.value;
    console.log(searchFor);
    fetchWeather(searchFor);
  } else {
    alert("Type what place you are looking for");
  }
}

btn.addEventListener("click", onSearch);
