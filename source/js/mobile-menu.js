var menu = document.querySelector('.main-header__menu');
var close_menu = document.querySelector('.main-header__toggle-menu');

close_menu.classList.remove('display-none');

close_menu.addEventListener( 'click', function() {
  menu.classList.toggle('display-none');
  close_menu.classList.toggle('main-header__toggle-menu--close');
});

/* Скрываем меню на мобильной версии и показываем на десктопе */
function display_menu() {
  var win_width = document.querySelector('body').clientWidth;

  if ( win_width < 768 ) {
    menu.classList.add('display-none');
  } else {
    menu.classList.remove('display-none');
    close_menu.classList.remove('main-header__toggle-menu--close');
  }
}

window.onresize = display_menu; // при изменении размеров браузера
window.onload   = display_menu;
