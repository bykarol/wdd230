// store resource URL in a const
const spotURL = "data/data.json";
const i = getRandomIntInclusive(0, 9); //gold member random index
const j = getRandomIntInclusive(0, 8); // silver members random index
const k = getRandomIntInclusive(0, 18); // gold + silver members random index

// basic fetch( method) implementation
fetch(spotURL)
    .then(function (response) {
        return response.json();
    })
// validate data received
    .then(function (jsonData) {
        // console.table(jsonData);
        const companies = jsonData["companies"];
        
        // filter gold members
        goldMembers = companies.filter(members => members.membership === 1);
        // add to page
        setInterval(function() {
            displaySpotlight()
        }, 2000);

        // filter silver members
        silverMembers = companies.filter(members => members.membership === 2);
        allMembers = companies;
        
        });
        

function displaySpotlight() {
    // Load random Gold Member to spotlight 1
    document.querySelector("#spot1-h2").textContent = goldMembers[i].name;
    document.querySelector("#spot1-img").setAttribute("src", goldMembers[i].logo);
    document.querySelector("#spot1-img").setAttribute("alt", `Logo of ${goldMembers[i].name}`)
    document.querySelector("#spot1-p1").innerHTML = `(881) ${goldMembers[i].phone}`;
    document.querySelector("#spot1-p2").textContent = goldMembers[i].address;

    // Load random Silver to spotlight 2
    document.querySelector("#spot2-h2").textContent = silverMembers[i].name;
    document.querySelector("#spot2-img").setAttribute("src", silverMembers[i].logo);
    document.querySelector("#spot2-img").setAttribute("alt", `Logo of ${silverMembers[i].name}`)
    document.querySelector("#spot2-p1").innerHTML = `(881) ${silverMembers[i].phone}`;
    document.querySelector("#spot2-p2").textContent = silverMembers[i].address;

    // load spotlight3 only when it is on screen.
    if (document.documentElement.clientWidth >= 880) {
      document.querySelector("#spot3-h2").textContent = allMembers[i].name;
      document.querySelector("#spot3-img").setAttribute("src", allMembers[i].logo);
      document.querySelector("#spot3-img").setAttribute("alt", `Logo of ${allMembers[i].name}`)
      document.querySelector("#spot3-p1").innerHTML = `(881) ${allMembers[i].phone}`;
      document.querySelector("#spot3-p2").textContent = allMembers[i].address;
    } 
    false;  
}

// select random member
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }