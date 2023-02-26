let lat = 41.3275; //Tirana coords
let lon = 19.8187;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=615fb231ce2f1fb005b72d24a6ebf23a`;

function getData(url) {
  axios.get(url).then((res) => {
    console.log(res.data);
  });
}

getData(url);
