const $menu = document.querySelector('.barraMenuLateral')
const $btnMenuOpen = document.querySelector('#hamburgerOpen')
const $btnMenuClose = document.querySelector('#hamburgerClose')

$btnMenuOpen.addEventListener('click', function () {
  $menu.classList.add('abreMenuLateral')
  document.getElementById('hamburgerClose').style.display = "flex"
  document.getElementById('hamburgerOpen').style.display = "none"

})
$btnMenuClose.addEventListener('click', function () {
  $menu.classList.remove('abreMenuLateral')
  document.getElementById('hamburgerClose').style.display = "none"
  document.getElementById('hamburgerOpen').style.display = "flex"
})