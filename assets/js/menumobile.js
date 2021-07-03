// hamburger

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

// buscar

const $menuBusca = document.querySelector('.menuBusca')
const $btnBuscaOpen = document.querySelector('#buscaOpen')
const $btnBuscaClose = document.querySelector('#buscaClose')

$btnBuscaOpen.addEventListener('click', function () {
  document.getElementById('buscaOpen').style.display = "none"
  document.getElementById('buscaClose').style.display = "flex"
  document.getElementById('buscaClose').style.marginRight = "155px"
  document.getElementById('barraDeBusca').style.display = "block"

  // document.getElementById('barraDeBusca').style.display = "flex"
})
$btnBuscaClose.addEventListener('click', function () {

  document.getElementById('buscaClose').style.display = "none"
  document.getElementById('buscaOpen').style.display = "flex"
  document.getElementById('barraDeBusca').style.display = "none"

})
$btnBuscaOpen.addEventListener('click', function () {
})
