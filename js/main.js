(function () {
  console.log('MENU TOGGLE IS ACTIVE')
  var navToggle = document.getElementById('nav-toggle')
  var navToggleImage = document.getElementById('nav-toggle__image')

  document.body.classList.remove('js-no')
  document.body.classList.add('js-yes')

  navToggle.addEventListener('click', function (e) {
    e.preventDefault()
    document.body.classList.toggle('js-show-nav')

    if (document.body.classList.contains('js-show-nav')) {
      navToggleImage.src = 'close.png'
    } else {
      navToggleImage.src = 'menu.png'
    }
  })
})()
