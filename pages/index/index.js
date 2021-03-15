const dropdown = document.querySelector('.index__guests-dropdown');
const guests = document.querySelector('.label-guests');

guests.addEventListener('click', () => {
  dropdown.classList.toggle('dropdown-visible');
});


