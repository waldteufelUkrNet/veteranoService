$(document).ready(function(){
  $('.popup-business__close').click(function(){
    $(this).parent().remove();
    $('.popups-section').css('display','none');
  });
});