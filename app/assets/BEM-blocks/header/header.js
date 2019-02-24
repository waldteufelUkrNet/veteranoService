$(document).ready(function(){

  /* ↓↓↓ зміна розмірів логотипу при прокрутці ↓↓↓ */
  if ( $('.header').offset().top >= 30 ) {
    $('.header__logo-img').css({'height':'50px','margin-top':'-5px'});
    $('.header').css({'background-color':'rgba(0,0,0,.75)'});
  } else {
    $('.header__logo-img').css({'height':'160px','margin-top':'0px'});
    $('.header').css({'background-color':'transparent'});
  }

  $(document).scroll(function(){
    if ( $('.header').offset().top >= 30 ) {
      $('.header__logo-img').css({'height':'50px','margin-top':'-5px'});
      $('.header').css({'background-color':'rgba(0,0,0,.75)'});
    } else {
      $('.header__logo-img').css({'height':'160px','margin-top':'0px'});
      $('.header').css({'background-color':'transparent'});
    }
  }); /* ↑↑↑ /зміна розмірів логотипу при прокрутці ↑↑↑ */

  /* ↓↓↓ логіка меню ↓↓↓ */
  var isMenuClicable = true;
  var isMemuOpen     = false;
  var arrOfMenuItems = $('.header__menu-link');
  var delay          = 0;
  var delayStep      = 200;
  var freezeTime     = arrOfMenuItems.length * 200;


  $('.header__menu-btn').click(function(){

    // якщо меню зараз не анімується (не відкивається і не закривається)
    if (isMenuClicable) {

      // блокування повторних кліків на час анімації
      isMenuClicable = false;
      setTimeout(function(){
        isMenuClicable = true
      },freezeTime);

      // відкриття/закриття
      if (isMemuOpen) {
        delay = 0;
        // навішування анімації через цикл - для цього потрібна додаткова анонімна ф-я
        for (var i=0; i<arrOfMenuItems.length; i++) {
          (function(j){
            setTimeout(function(){
              $(arrOfMenuItems[j]).css({'right':'calc( -100% - 15px )'});
            }, delay);
            delay = delay + delayStep;
          })(i);
        }
        isMemuOpen = false;
      } else {
        delay = 0;
        // навішування анімації через цикл - для цього потрібна додаткова анонімна ф-я
        for (var i=0; i<arrOfMenuItems.length; i++) {
          (function(j){
            setTimeout(function(){
              $(arrOfMenuItems[j]).css({'right':'0%'});
            }, delay);
            delay = delay + delayStep;
          })(i);
        }
        isMemuOpen = true;
      }
    }
  });
  /* ↑↑↑ /логіка меню ↑↑↑ */

  $(document).click(function(event){
    if ( isMemuOpen && isMenuClicable && event.target.className != 'header__menu-btn' ) {
      // закрити меню
      delay = 0;
      for (var i=0; i<arrOfMenuItems.length; i++) {
        (function(j){
          setTimeout(function(){
            $(arrOfMenuItems[j]).css({'right':'calc( -100% - 15px )'});
          }, delay);
          delay = delay + delayStep;
        })(i);
      }
      isMemuOpen = false;
    }
  });
});