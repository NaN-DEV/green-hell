const loader = document.querySelector('.loader-container')

if (loader !== null) {
  const cookesSwitch = document.cookie.split(';').filter(function (item) {
    return item === 'loader=1'
  }).length

  if (cookesSwitch) {
    console.log("on");
    loader.style.opacity = '0'
    setTimeout(() => {
      loader.style.display = 'none'
      document.body.style.overflow = 'auto'
    }, 1000)
  }

  document.cookie = 'loader=1'

  setTimeout(() => {
    console.log("off");
    loader.style.opacity = '0'
    setTimeout(() => {
      loader.style.display = 'none'
      document.body.style.overflow = 'auto'
    }, 500)
  }, 3000)
} else {
  console.log('Not fround loader')
}
