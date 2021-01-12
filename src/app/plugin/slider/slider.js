class SliderNaN {
  constructor(root, options) {
    this.element = 0
    this.direction = 1
    this.options = this.root = root instanceof Element ? false : document.querySelector(root)
    this.carousel
  }

  mount() {
    if (this.root) {
      this.carousel = this.options.children[0]
      this.element = this.carousel.children.length
      this.carousel.style.width = `${this.element * 100}%`
      for (var i = 0; i < this.element; i++) {
        this.carousel.children[i].style.flexBasis = `${100 / this.element}%`
      }

      document.addEventListener(
        'keydown',
        (e) => {
          e.key === 'ArrowLeft' && this.back()
          e.key === 'ArrowRight' && this.next()
        },
        false,
      )

      this.carousel.addEventListener(
        'transitionend',
        (e) => {
          if (this.direction === 1) {
            this.carousel.prepend(this.carousel.lastElementChild)
          } else {
            this.carousel.appendChild(this.carousel.firstElementChild)
          }
          this.carousel.style.transition = 'none'
          this.carousel.style.transform = `translate(0)`
          setTimeout(() => {
            this.carousel.style.transition = 'all 0.3s'
          })
        },
        false,
      )
    }
    return this
  }

  next() {
    this.direction = -1
    this.root.style.justifyContent = 'flex-start'
    this.carousel.style.transform = `translate(-${100 / this.element}%)`
    return this
  }

  back() {
    if (this.direction === -1) {
      this.direction = 1
      this.carousel.appendChild(this.carousel.firstElementChild)
    }
    this.root.style.justifyContent = 'flex-end'
    this.carousel.style.transform = `translate(${100 / this.element}%)`
    return this
  }
}

new SliderNaN('#slider', {}).mount()