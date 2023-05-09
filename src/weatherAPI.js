const btn = document.getElementById("fetchingButton");
const form = document.getElementById("searchForm");
const input = document.getElementById("search");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function fetchWeather(searchFor) {
  const path = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${searchFor}`;
  fetch(path, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
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
