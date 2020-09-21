import { WEATHERBIT_KEY } from "./keys.js";
const inputValue = document.querySelector(".inputValue");
const countryCode = document.querySelector(".countryCode");
const outputData = document.querySelector(".output-data");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const max = document.getElementById("max");
const min = document.getElementById("min");
const description = document.getElementById("description");
// console.log(inputValue);

let getWeather = () => {
  console.log("countryCode =>", countryCode.value);
  axios
    .get(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${inputValue.value}&country=${countryCode.value}&key=${WEATHERBIT_KEY}`
    )
    .then((response) => {
      console.log(response);
      console.log(response.data.data[0].temp);
      city.innerHTML = `Details for: ${response.data.city_name}`;
      temp.innerHTML = `Current temperature: ${response.data.data[0].temp}`;
      max.innerHTML = `Max: ${response.data.data[0].max_temp}`;
      min.innerHTML = `Min: ${response.data.data[0].min_temp}`;
      description.innerHTML = `Description: ${response.data.data[0].weather.description}`;
    })
    .catch((err) => console.log(err));
  console.log("test");
};

document.querySelector(".button").addEventListener("click", getWeather);
