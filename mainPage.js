let lat = 41.3275; //Tirana coords
let lon = 19.8187;
let city;

const temp = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");
const description = document.querySelector("#description");
const speed = document.querySelector("#speed");
const title = document.querySelector("#title");
const feels_like = document.querySelector("#feels_like");
const search = document.querySelector("#search");
const submit = document.querySelector("#submit");

function getGeoLocation(e) {
  axios
    .get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${search.value}&limit=1&appid=615fb231ce2f1fb005b72d24a6ebf23a`
    )
    .then((res) => {
      getData(res.data[0].lat, res.data[0].lon);
    });
}
function getData(lat, lon) {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=615fb231ce2f1fb005b72d24a6ebf23a`
    )
    .then((res) => {
      temp.innerText = `Temperature ${Math.round(res.data.main.temp - 273)}`;
      description.innerText = res.data.weather[0].description;
      humidity.innerText = `Humidity ${res.data.main.humidity}`;
      speed.innerText = `Wind speed ${res.data.wind.speed}`;
      title.innerText = `Weather in ${res.data.name}`;

      // console.log(res.data);
    });
}
submit.addEventListener("click", getGeoLocation);

// res.data.main.temp
// res.data.main.temp_max
// res.data.main.temp_min
// res.data.main.humidity
// res.data.main.temp.feels_like
// res.data.weather[0].description
// res.data.weather[0].main  "rain"
// res.data.wind.deg
// res.data.wind.speed

// getData(url);
