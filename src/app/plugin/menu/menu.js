const hamburger = document.getElementById('hamburger')
const menu = document.getElementById('menuBox')

hamburger.addEventListener('click', function () {
  if (hamburger.classList.value.length === 0) {
    menu.classList.add('menuOpen')
    hamburger.classList.add('buttonOpen')
    return null
  }

  menu.classList.remove('menuOpen')
  hamburger.classList.remove('buttonOpen')

  return null
})

console.log(hamburger)
