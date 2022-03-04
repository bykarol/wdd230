const requestURL = 'https://bykarol.github.io/wdd230/chamber/data/data.json';
const cardsView = document.querySelector('button#cardsBtn');
const tableView = document.querySelector('button#listsBtn');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];

    // display default view
    displayCards(companies);

    // display tableView
    tableView.addEventListener("click", function () {
      toggleList();
      displayList(companies);
    });
    // display cardsView
    cardsView.addEventListener("click", function () {
      toggleCard();
      displayCards(companies);
    });
  });

  function displayCards(companies) {
    for (let i = 0; i < companies.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let webURL = document.createElement('a');
      let image = document.createElement('img');
      image.setAttribute('src', companies[i].logo);
      image.setAttribute('alt', `Logo of ${companies[i].name}`);
      h2.textContent = `${companies[i].name}`;
      p1.textContent = `${companies[i].address}`;
      p2.textContent = `(881) ${companies[i].phone}`;
      webURL.textContent = companies[i].website;
      webURL.href = companies[i].website;
      webURL.target = "_blank";
      p3.appendChild(webURL);
      card.appendChild(image);
      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
      document.querySelector('div.cards').appendChild(card);
    }
  };


function displayList(companies) {
  for (let i = 0; i < companies.length; i++ ) {
    let container = document.createElement('table');
    let business = document.createElement('tr');
    let name = document.createElement('td');
    let address = document.createElement('td');
    let phone = document.createElement('td');
    let weblist = document.createElement('td');
    let webURL = document.createElement('a');
    name.innerHTML = `${companies[i].name}`;
    address.innerHTML = `${companies[i].address}`;
    phone.innerHTML = `(881) ${companies[i].phone}`;
    webURL.innerHTML = `${companies[i].website}`;
    webURL.href = companies[i].website;
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
}

function toggleCard() {
  document.getElementById("cardToggle").style.display = "flex";
  document.getElementById("listToggle").style.display = "none";
}