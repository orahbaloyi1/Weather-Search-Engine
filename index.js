function formSearch(event) {
  event.preventDefault();

  let inputCity = document.querySelector("#input-search");

  let cityElement = document.querySelector("#city");
  if (inputCity.value) {
    cityElement.innerHTML = inputCity.value;
  } else {
    alert("Error, Please enter city!");
  }

  let apiKey = "6bfa54f242cbb59343d4e58db578dc61";
  let city = inputCity.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(url).then(getTemp);
}

let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", formSearch);

function getTemp(response) {
  let currentTemp = Math.round(response.data.main.temp);

  let searchTemp = document.querySelector("#temp");
  searchTemp.innerHTML = currentTemp;
}
