//Weather api Temple Inn & Suites
//API key is cfe0464f08f36f72ffc42988eb008adf
//Bethesda ID 5147302

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5147302&units=metric&appid=cfe0464f08f36f72ffc42988eb008adf";
const banner = document.getElementById('divWeatherAlert');
let today = new Date();
let day = today.getDay();

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let temp = document.querySelector('#weatherC');
    let humidity = document.querySelector('#humidity');
    let celsiusTemp = jsObject.main.temp;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
    temp.textContent = celsiusTemp.toFixed(1);
    humidity.textContent = `${jsObject.main.humidity}%`;

    if (jsObject.alerts.description != Empty) {
      banner.innerHTML = jsObject.alerts.description;}
    
  });

/* -------CLOSE BANNER ALERT ---------- */
const closeButton = document.getElementById("closeAlert");
closeButton.addEventListener("click", () => {
    banner.classList.remove("openAlert");
})