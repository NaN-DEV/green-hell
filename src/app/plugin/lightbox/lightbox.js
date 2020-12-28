const modalLightbox = document.getElementById('modalLightbox')
const mainImg = modalLightbox.getElementsByClassName('img')[0]
const allGalleryLightbox = document.querySelectorAll('.lightbox')

const modalLightboxNextImg = modalLightbox.getElementsByClassName('next-lightbox')[0]
const modalLightboxBackImg = modalLightbox.getElementsByClassName('prev-lightbox')[0]

let activeImg = 0
let activeAllImg = []

// Clouse modal
modalLightbox.getElementsByClassName('close')[0].addEventListener('click', function (e) {
  modalLightbox.style.display = 'none'
})

// Open modal
allGalleryLightbox.forEach((item, itemIndex) => {
  const allImg = item.querySelectorAll('img')
  const allBoxImg = item.querySelectorAll('.img')

  allBoxImg.forEach((boxImg, boxImgIndex) => {
    boxImg.addEventListener('click', function (e) {
      activeAllImg = allImg
      activeImg = boxImgIndex
      modalLightbox.style.display = 'block'
      mainImg.src = allImg[boxImgIndex].src
    })
  })
})

// scroll next mouse
function nextImg() {
  if (activeAllImg.length - 1 > activeImg) {
    ++activeImg
    mainImg.src = activeAllImg[activeImg].src
    return null
  }

  activeImg = 0
  mainImg.src = activeAllImg[activeImg].src
  return null
}

modalLightboxNextImg.addEventListener('click', nextImg)

// scroll back img mouse

function backImg() {
  if (0 < activeImg) {
    --activeImg
    mainImg.src = activeAllImg[activeImg].src
    return null
  }

  activeImg = activeAllImg.length - 1
  mainImg.src = activeAllImg[activeImg].src
  return null
}

modalLightboxBackImg.addEventListener('click', backImg)

// scroll next / back img keys
document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 39:
      nextImg()
      break
    case 37:
      backImg()
      break
    case 27:
      modalLightbox.style.display = 'none'
      break
    default:
      return null
  }
})
