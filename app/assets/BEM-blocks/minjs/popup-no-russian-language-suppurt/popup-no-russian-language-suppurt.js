$(document).ready(function(){var u;$(".language-switcher__shutter-ru").click(function(){$(".language-switcher__shutter-ua").css({width:"50%",left:"0%"}),$(".language-switcher__shutter-en").css({width:"50%",left:"50%"}),$(".language-switcher__shutter-ru").css({display:"none"});var s=$('img.language-switcher__img[src="assets/img/ru.png"]').offset().top,t=$('img.language-switcher__img[src="assets/img/ru.png"]').offset().left;u=$("body").outerWidth(),$('img.language-switcher__img[src="assets/img/ru.png"]').remove(),$("body").append('<img class="language-switcher__img" src="assets/img/ru.png">'),$('img.language-switcher__img[src="assets/img/ru.png"]').css({position:"absolute",zIndex:8889,top:s-3,left:t-88,cursor:"pointer"}),setTimeout(function(){$('img.language-switcher__img[src="assets/img/ru.png"]').css({transition:"left .5s",left:u/2}).bind("click mouseenter",function(){$(this).css({transition:"top .5s",top:"-100%"}),$(".popups-section").css("display","block"),setTimeout(function(){$("#popup-no-russian-language-suppurt").css("top","20px");for(var s=$("#popup-no-russian-language-suppurt").outerHeight(),t=$(".small-popup__background-image").outerHeight(),u=Math.ceil(s/t),e=0;e<u-1;e++)$("#popup-no-russian-language-suppurt .small-popup__background").append('<img class="small-popup__background-image" src="assets/img/ornament.jpg", alt="ornament.jpg">')},50)})},100)}),$("#popup-no-russian-language-suppurt__close-button, #popup-no-russian-language-suppurt button.small-popup__button").click(function(){$("#popup-no-russian-language-suppurt").remove(),$(".popups-section").css("display","none")})});