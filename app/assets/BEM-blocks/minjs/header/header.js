$(document).ready(function(){30<=$(".header").offset().top?($(".header__logo-img").css({height:"50px","margin-top":"-5px"}),$(".header").css({"background-color":"rgba(0,0,0,.75)"})):($(".header__logo-img").css({height:"160px","margin-top":"0px"}),$(".header").css({"background-color":"transparent"})),$(document).scroll(function(){30<=$(".header").offset().top?($(".header__logo-img").css({height:"50px","margin-top":"-5px"}),$(".header").css({"background-color":"rgba(0,0,0,.75)"})):($(".header__logo-img").css({height:"160px","margin-top":"0px"}),$(".header").css({"background-color":"transparent"}))});var t=!0,n=!1,c=$(".header__menu-link"),r=0,o=200*c.length;$(".header__menu-btn").click(function(){if(t)if(t=!1,setTimeout(function(){t=!0},o),n){for(var e=r=0;e<c.length;e++)!function(e){setTimeout(function(){$(c[e]).css({right:"calc( -100% - 15px )"})},r),r+=200}(e);n=!1}else{for(e=r=0;e<c.length;e++)!function(e){setTimeout(function(){$(c[e]).css({right:"0%"})},r),r+=200}(e);n=!0}}),$(document).click(function(e){if(n&&t&&"header__menu-btn"!=e.target.className){for(var o=r=0;o<c.length;o++)!function(e){setTimeout(function(){$(c[e]).css({right:"calc( -100% - 15px )"})},r),r+=200}(o);n=!1}})});