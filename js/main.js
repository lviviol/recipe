var menu = document.querySelector('select');
var articles = document.querySelectorAll('article');
var list = ['all', 'almond', 'butter', 'chocolate'];

menu.addEventListener('change', function(){
  if (menu.value !== 'all') {
    for (var i = 0; i < articles.length; i++) {
      articles[i].classList.add('hide');

      if (articles[i].classList.contains(menu.value)) {
        articles[i].classList.remove('hide');
      }
    }
  } else {
    for (var i = 0; i < articles.length; i++) {
      articles[i].classList.remove('hide');
    }
  }
})

var openBtn = $('.open-menu');  /* In JQuery, $ is same as document.queryselector*/
var closeBtn = $('.close-menu');
var mobileNav = $('nav');

openBtn.on('click',function(){
  mobileNav.fadeIn(); /* fadeIn is JQuery, where CSS is packed inside */
  $('body').addClass('stop-scroll');
})

closeBtn.on('click',function(){
    mobileNav.fadeOut();
    $('body').removeClass('stop-scroll');
})
