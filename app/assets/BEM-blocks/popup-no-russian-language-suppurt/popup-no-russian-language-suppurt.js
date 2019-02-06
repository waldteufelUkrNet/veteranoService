$(document).ready(function(){

  var bodyWidth;

  $('.language-switcher__shutter-ru').click(function(){

    // змінюємо зовнішній вигляд мовної панелі
  	$('.language-switcher__shutter-ua').css({'width':'50%', 'left':'0%'});
    $('.language-switcher__shutter-en').css({'width':'50%', 'left':'50%'});
    $('.language-switcher__shutter-ru').css({'display':'none'});

    // змінюємо положення московського прапора иа навішуємо обробник
    var imageTop  = $('img.language-switcher__img[src="assets/img/ru.png"]').offset().top;
    var imageLeft = $('img.language-switcher__img[src="assets/img/ru.png"]').offset().left;
    bodyWidth     = $('body').outerWidth();

    $('img.language-switcher__img[src="assets/img/ru.png"]').remove();
    $('body').append('<img class="language-switcher__img" src="assets/img/ru.png">');
    $('img.language-switcher__img[src="assets/img/ru.png"]').css({'position'   : 'absolute',
    	                                                            'zIndex'     : 8889,
    	                                                            'top'        : imageTop - 3,
    	                                                            'left'       : imageLeft - 68,
    	                                                            'cursor'     : 'pointer'
    	                                                          }).click(function(){ playWithRussianIcon(this) });

  });

function playWithRussianIcon(THIS) {

	$(THIS).css({'transition':'left .5s',
	             'left': bodyWidth/2});
}

});

// $(document).mouseleave(function(e){
// 	e = e || window.event;
// 	e = jQuery.event.fix(e);

// 	// якщо мишка вийшла за верхню межу екрана
//   if (e.clientY <= 0) {

// 		if (!sessionStorage.getItem('popupComplimentWasShown')) {
// 	  	// поява підкладки
// 	    $('.popups-section').css('display','block');

// 	    setTimeout(function(){
// 	    	// поява спливаючого вікна
// 	    	$('.small-popup').css('top','20px');
// 	      // відмальовування потрібної кількості орнаментів
// 			  var popupHeight     = $('#popup-compliment').outerHeight(),
// 			      ornamentHeight  = $('.small-popup__background-image').outerHeight(),
// 			      ornamentsAmount = Math.ceil(popupHeight / ornamentHeight);
// 			  for (var i=0; i<ornamentsAmount-1; i++) {
// 			  	$('.small-popup__background').append('<img class="small-popup__background-image" src="assets/img/ornament.jpg", alt="ornament.jpg">');
// 			  }

// 	    },50);

//       // запис в sessionStorage
// 	    sessionStorage.setItem('popupComplimentWasShown',true);
// 		}

//   }
// });

// $('#popup-compliment__close-button').click( function() { closeComplimentPopup() } );

// function closeComplimentPopup () {
// 	$('#popup-compliment').remove();
// 	$('.popups-section').css('display','none');
// }