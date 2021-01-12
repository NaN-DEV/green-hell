// scss module start
require('./../style/bootscript.scss')

document.addEventListener(
  'DOMContentLoaded',
  function () {
    // js module start
    require('./plugin/menu/menu.js')
    require('./plugin/slider/slider')
    require('./plugin/lightbox/lightbox')
    require('./plugin/loader/loader')
  },
  false,
)

// html module start
require('./../index.html')
