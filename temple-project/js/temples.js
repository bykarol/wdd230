const requestURL = 'https://bykarol.github.io/wdd230/temple-project/data/temple-list.json';
const i = getRandomIntInclusive(0, 2);
const j = getRandomIntInclusive(3, 4);

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temple = jsonObject['temples'];

    //display temples in home page
    setInterval(function() {
      displayTempleMain(temple);
  }, 2000);

    displayCards(temple);

  });

function displayCards(temple) {
  for (let i = 0; i < temple.length; i++) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let image = document.createElement('img');
    image.setAttribute('src', temple[i].image);
    image.setAttribute('alt', `image of ${temple[i].name}`);
    h2.textContent = `${temple[i].name}`;
    p1.textContent = `${temple[i].address}`;
    p2.textContent = `${temple[i].phone}`;
    let likeBtn = document.createElement('button');
    likeBtn.name = "favTemple";
    likeBtn.className = "likeBtn";
    likeBtn.textContent = "Like";
    card.appendChild(h2);
    card.appendChild(image);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(likeBtn);
    document.querySelector('div.cards').appendChild(card);
  } 
}

function displayTempleMain(temple) {
  document.querySelector("#spot1-h2").textContent = `${temple[i].name}`;
  document.querySelector("#spot1-img").setAttribute("src", temple[i].image);
  document.querySelector("#spot1-img").setAttribute("alt", `Logo of ${temple[i].name}`)
  document.querySelector("#spot1-p1").innerHTML = `${temple[i].address}`;
  document.querySelector("#spot1-p2").textContent = temple[i].phone;
  
  document.querySelector("#spot2-h2").textContent = `${temple[j].name}`;
  document.querySelector("#spot2-img").setAttribute("src", temple[j].image);
  document.querySelector("#spot2-img").setAttribute("alt", `Logo of ${temple[j].name}`)
  document.querySelector("#spot2-p1").innerHTML = `${temple[j].address}`;
  document.querySelector("#spot2-p2").textContent = temple[j].phone;
}

// select random temple
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
