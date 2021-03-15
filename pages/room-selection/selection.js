'use strict'

let checkbox = document.querySelectorAll('.checkbox__square');
let facitilites = document.querySelector(".panel__guest-facilites");


facitilites.onclick = () => {
    document.querySelector('.wrapper__guests-dropdown-facilities').classList.toggle('wrapper__guests-dropdown-facilities--visible')
}

checkbox.onclick = () => {
    document.querySelectorAll('.checkbox__square').classList.toggle('checkbox__square--active');
}



const dropdown = document.querySelector('.index__guests-dropdown');
const guests = document.querySelector('.panel__guest');

guests.addEventListener('click', () => {
  dropdown.classList.toggle('dropdown-visible');
});


document.querySelector('.wrapper__filter').onclick = () => {
if (window.matchMedia('max-width: 1160px')) {
    document.querySelector('.wrapper__conditions').classList.toggle('wrapper__conditions-active')
}
}