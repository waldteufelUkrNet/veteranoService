$(document).ready(function(){

  $('.language-switcher__shutter').click(function(){
    if ( $('.language-switcher').attr('data-language') == 'ua' ) {
      $(this).css('left','0%');
      $('.language-switcher').attr('data-language', 'en');
    } else {
      $(this).css('left','50%');
      $('.language-switcher').attr('data-language', 'ua');
    }
  });

});