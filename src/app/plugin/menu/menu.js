const navManu = document.querySelector('.main_nav')
const navManuTop = document.querySelector('.top').offsetHeight
const hamburger = document.getElementById('hamburger')
const menu = document.getElementById('menuBox')

let offsetTopMenu = 0

window.addEventListener('scroll', (e) => {
  const activeOffset = window.scrollY

  if (activeOffset > 100) {
    if (activeOffset <= 100 + navManuTop) {
      offsetTopMenu = activeOffset - 100
    } else if (activeOffset > 100 + navManuTop) {
      offsetTopMenu = navManuTop
    }
    navManu.style.top = `-${offsetTopMenu}px`
  } else if (activeOffset < 100) {
    offsetTopMenu = 0
    navManu.style.top = `${offsetTopMenu}px`
  }
})

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
