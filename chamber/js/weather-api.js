//Weather api Chamber of Commerce A Coruña
//API key is cfe0464f08f36f72ffc42988eb008adf
//A Coruña ID 6357300

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=6357300&units=metric&appid=cfe0464f08f36f72ffc42988eb008adf";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let temp = document.querySelector('#weatherC');
    let windSpeed = document.querySelector('#windSpeed');
    let windCh = document.querySelector('#windC');
    let windS = jsObject.wind.speed;
    let celsiusTemp = jsObject.main.temp;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
    temp.textContent = celsiusTemp.toFixed(1);
    windSpeed.textContent = windS;
    windCh.textContent = jsObject.main.feels_like.toFixed(1);
    
  });

  /* const windChill = (celsiusTemp, windS) => {
    return (celsiusTemp >= 0 && windS > 2)
    ?
      Math.round(0.6215 * celsiusTemp - 11.37 *
        Math.pow(windS, 0.16) + 0.3965 * celsiusTemp * 
        Math.pow(windS, 0.16) + 13.12)
    :
      "N/A";
  } */