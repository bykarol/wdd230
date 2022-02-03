const favchap = document.querySelector('#favchap');
const buildbutton = document.querySelector('button');
const ul = document.querySelector('.list');

buildbutton.addEventListener('click', () => {
  //build HTML
    let chapter = favchap.value;
    favchap.value = '';

    let list = document.createElement('li');
    let delbutton = document.createElement('button');
    let itemName = document.createElement('span');

    list.appendChild(itemName);
    itemName.textContent = chapter;
    list.appendChild(delbutton);
    delbutton.textContent = '❌';
    ul.appendChild(list);    

    delbutton.onclick = function(e) {
      ul.removeChild(list);
    }
    
    favchap.focus();
});