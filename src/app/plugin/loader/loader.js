const loader = document.querySelector('.loader-container')

if (loader !== null) {
  loader.style.opacity = '0'
  setTimeout(() => {
    loader.style.display = 'none'
    document.body.style.overflow = 'auto'
  }, 500)
} else {
  console.log('Not fround loader')
}
