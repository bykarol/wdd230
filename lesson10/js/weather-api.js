//FairBanks Alaska Id 5861897
//API key is cfe0464f08f36f72ffc42988eb008adf
//A Coruña ID 6357300
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=cfe0464f08f36f72ffc42988eb008adf";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let temp = document.querySelector('#current-temp');
    temp.textContent = jsObject.main.temp.toFixed(1);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  });
