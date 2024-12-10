const searchIcon = document.getElementById('searchIcon');

searchIcon.addEventListener('mouseenter', () => {
  searchIcon.src = './assets/icons/MagnifyingGlass_hover.svg'
});

searchIcon.addEventListener('mouseleave', () => {
  searchIcon.src = './assets/icons/MagnifyingGlass.svg'
});