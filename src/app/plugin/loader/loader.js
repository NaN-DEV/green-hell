const loader = document.querySelector('.loader-container')

if (loader !== null) {
  const cookes = document.cookie.split(';').filter(function (cooke) {
    return cooke === 'loader'
  }).length

  if (!!cookes) {
    loader.style.opacity = '0'
    setTimeout(() => {
      loader.style.display = 'none'
      document.body.style.overflow = 'auto'
    }, 500)
  }

  document.cookie = 'loader'

  setTimeout(() => {
    loader.style.opacity = '0'
    setTimeout(() => {
      loader.style.display = 'none'
      document.body.style.overflow = 'auto'
    }, 500)
  }, 3000)
} else {
  console.log('Not fround loader')
}
