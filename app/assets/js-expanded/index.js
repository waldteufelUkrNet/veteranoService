$(document).ready(function(){
  var lightbulbWidth = $('.lightbulb').width(),
      bodyWidth      = $('body').width();

      console.log("lightbulbWidth", lightbulbWidth);
      console.log("bodyWidth", bodyWidth);

  var tempLeft = (lightbulbWidth/2 + bodyWidth/2) + 15 + 'px';
  $('.main-navigation-list-item:eq(1)').css('left', tempLeft);

  tempLeft = (lightbulbWidth/2 - lightbulbWidth*0.06 + bodyWidth/2) + 15 + 'px';
  $('.main-navigation-list-item:eq(2)').css('left', tempLeft);

  tempLeft = (lightbulbWidth/2 - lightbulbWidth*0.24 + bodyWidth/2) + 15 + 'px';
  $('.main-navigation-list-item:eq(3)').css('left', tempLeft);

  var tempRight = (bodyWidth/2 + lightbulbWidth/2) + 15 + 'px';
  $('.main-navigation-list-item:eq(4)').css('right', tempRight);

  tempRight = (lightbulbWidth/2 - lightbulbWidth*0.06 + bodyWidth/2) + 15 + 'px';
  $('.main-navigation-list-item:eq(5)').css('right', tempRight);

  tempRight = (lightbulbWidth/2 - lightbulbWidth*0.24 + bodyWidth/2) + 15 + 'px';
  $('.main-navigation-list-item:eq(6)').css('right', tempRight);
});