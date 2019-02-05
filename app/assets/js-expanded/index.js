$(document).ready(function(){
  navPositioning()
});

$(window).resize(function(){
  navPositioning()
});

//hover-ефект
$('.main-navigation-link').on({
	mouseenter: function(){
		// запалювання лампочки
		$('.light-glaring').css('opacity','1');
		// підсвічування тла
		$('.main-section__bg-content-cover').css('background-color','rgba(0,0,0,.4)');
	},
	mouseleave: function(){
		// виключення лампочки
		$('.light-glaring').css('opacity','0');
		// затемнення тла
		$('.main-section__bg-content-cover').css('background-color','rgba(0,0,0,.5)');
	}
});

function navPositioning() {
  var lightbulbWidth = $('.lightbulb').width(),
      bodyWidth      = $('body').width();

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
}