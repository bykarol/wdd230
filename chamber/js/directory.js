const requestURL = 'https://bykarol.github.io/wdd230/chamber/data/data.json';

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const companies = jsonObject['companies'];
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
            p1.textContent = `Address: ${companies[i].address}`;
            p2.textContent = `Telephone: ${companies[i].phone}`;
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
      });