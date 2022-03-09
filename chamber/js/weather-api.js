//Weather api Chamber of Commerce A Coruña
//API key is cfe0464f08f36f72ffc42988eb008adf
//A Coruña ID 6357300

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=6357300&appid=cfe0464f08f36f72ffc42988eb008adf";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let temp = document.querySelector('#weatherC');
    let windSpeed = document.querySelector('#windSpeed');
    let windCh = document.querySelector('#windC');
    windS = jsObject.wind.speed;
    let celsiusTemp = (jsObject.main.temp - 32) * 5 / 9;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
    temp.textContent = celsiusTemp.toFixed(1);
    windSpeed.textContent = windS;
    windCh.textContent = windChill(celsiusTemp, windS);
    
  });

  const windChill = (celsiusTemp, windS) => {
    return (celsiusTemp >= 50 && windS > 3)
    ?
      Math.round(35.74 + 0.6215 * celsiusTemp - 35.75 *
        Math.pow(windS, 0.16) + 0.4275 * celsiusTemp
        * Math.pow(windS, 0.16))
    :
      "N/A";
  }