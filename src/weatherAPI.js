// URL (required), options (optional)
fetch("https://url.com/some/url")
  .then(function (response) {
    // Successful response :)
  })
  .catch(function (err) {
    // Error :(
  });

function fetchWeather(searchFor) {
  const path = `https://api.weatherapi.com/v1/current.json?key=${key}=${searchFor}`;
  fetch(path, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response.json());
    })
    .catch((err) => {
      console.error(err);
    });
}
