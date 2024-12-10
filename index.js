const searchIcon = document.getElementById('searchIcon');

searchIcon.addEventListener('mouseenter', () => {
  searchIcon.src = './traveling-profile-project/assets/icons/MagnifyingGlass_hover.svg'
});

searchIcon.addEventListener('mouseleave', () => {
  searchIcon.src = './traveling-profile-project/assets/icons/MagnifyingGlass.svg'
});