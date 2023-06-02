const btn = document.getElementById("fetchingButton");
const form = document.getElementById("searchForm");
const input = document.getElementById("search");
const weatherWrapper = document.getElementById("weatherDisplayWrapper");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function displayWeather(response) {
  const section1Wrapper = document.createElement("div");
  section1Wrapper.className = "section1Wrapper";
  weatherWrapper.appendChild(section1Wrapper);

  const city = document.createElement("h1");
  city.className = "city";
  city.innerText = `${response.location.name}, ${response.location.country}`;
  section1Wrapper.appendChild(city);

  const conditionWrapper = document.createElement("div");
  conditionWrapper.className = "conditionWrapper";
  section1Wrapper.appendChild(conditionWrapper);

  const condition = document.createElement("h2");
  condition.className = "condition";
  condition.innerText = response.current.condition.text;
  conditionWrapper.appendChild(condition);

  const temp = document.createElement("h2");
  temp.className = "temp";
  temp.innerText = `${response.current.temp_c}\u00B0C`;
  conditionWrapper.appendChild(temp);

  const section2Wrapper = document.createElement("div");
  section2Wrapper.className = "section2Wrapper";
  weatherWrapper.appendChild(section2Wrapper);

  const feels = document.createElement("h3");
  feels.className = "feels additionalInfo";
  feels.innerText = `FEELS LIKE: ${response.current.temp_c}\u00B0C`;
  section2Wrapper.appendChild(feels);

  const humidity = document.createElement("h3");
  humidity.className = "humidity additionalInfo";
  humidity.innerText = `HUMIDITY: ${response.current.humidity}%`;
  section2Wrapper.appendChild(humidity);

  const wind = document.createElement("h3");
  wind.className = "wind additionalInfo";
  wind.innerText = `WIND: ${response.current.humidity}km/h`;
  section2Wrapper.appendChild(wind);
}

function fetchWeather(searchFor) {
  const key = "";
  const path = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${searchFor}`;
  return fetch(path, { mode: "cors" }).then(function (response) {
    if (!response.ok) throw new Error(`Error code: ${response.status}`);
    return response.json();
  });
}

function onSearch(e) {
  let searchFor;
  if (input.value !== "") {
    searchFor = input.value;
    console.log(searchFor);
    fetchWeather(searchFor)
      .then(function (weatherINFO) {
        console.log(weatherINFO);
        displayWeather(weatherINFO);
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    alert("Type what place you are looking for");
  }
}

btn.addEventListener("click", onSearch);
