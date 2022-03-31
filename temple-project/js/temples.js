const requestURL = 'https://bykarol.github.io/wdd230/temple-project/data/temple-list.json';
const cardsView = document.querySelector('button#cardsBtn');
const tableView = document.querySelector('button#listsBtn');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];

    // display default view
    displayCards(temples);

    // display tableView
    tableView.addEventListener("click", function () {
      toggleList();
      displayList(temples);
    });
    // display cardsView
    cardsView.addEventListener("click", function () {
      toggleCard();
      displayCards(temples);
    });

  });

  function displayCards(temples) {
    for (let i = 0; i < temples.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let image = document.createElement('img');
      image.setAttribute('src', temples[i].image);
      image.setAttribute('alt', `image of ${temples[i].name}`);
      h2.textContent = `${temples[i].name}`;
      p1.textContent = `${temples[i].address}`;
      p2.textContent = `(881) ${temples[i].phone}`;
      card.appendChild(image);
      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
      document.querySelector('div.cards').appendChild(card);
    }
  };


function displayList(temples) {
  for (let i = 0; i < temples.length; i++ ) {
    let container = document.createElement('table');
    let business = document.createElement('tr');
    let name = document.createElement('td');
    let address = document.createElement('td');
    let phone = document.createElement('td');
    let weblist = document.createElement('td');
    let webURL = document.createElement('a');
    name.innerHTML = `${temples[i].name}`;
    address.innerHTML = `${temples[i].address}`;
    phone.innerHTML = `${temples[i].phone}`;
    webURL.innerHTML = `${temples[i].website}`;
    webURL.href = temples[i].website;
    webURL.target = "_blank";
    weblist.innerHTML = webURL;
    business.appendChild(name);
    business.appendChild(address);
    business.appendChild(phone);
    business.appendChild(weblist);
    container.appendChild(business);
    document.querySelector('div.lists').appendChild(container);
  }
};

function toggleList() {
  document.getElementById("listToggle").style.display = "block";
  document.getElementById("cardToggle").style.display = "none";
};

function toggleCard() {
  document.getElementById("cardToggle").style.display = "flex";
  document.getElementById("listToggle").style.display = "none";
};