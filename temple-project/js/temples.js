const requestURL = 'https://bykarol.github.io/wdd230/temple-project/data/temple-list.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temple = jsonObject['temples'];

    for (let i = 0; i < temple.length; i++ ) {
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

  });
