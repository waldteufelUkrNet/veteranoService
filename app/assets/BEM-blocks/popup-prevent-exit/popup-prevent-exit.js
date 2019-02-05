$(document).ready(function(){

});

 // /* ↓↓↓ popups ↓↓↓ */
 //  var tempOpen1 = false;
 //  var tempOpen2 = false;
 //  $(document).mouseleave(function(event){
 //  	//e = e || window.event;
 //  	//e = jQuery.event.fix(e);
 //    if (event.clientY <= 0) {
 //      // popup 1 - open
 //      if (0 <= window.pageYOffset && window.pageYOffset < document.body.scrollHeight*.8 && tempOpen1 == false) {
 //        $(".popup__cover").css({"display":"block"});
 //        $(".popup__massage").css({"display":"block"});
 //        tempOpen1 = true;
 //      }
 //      // popup 2 - open
 //      if (document.body.scrollHeight*.8 < window.pageYOffset && tempOpen2 == false) {
 //        $(".popup2__cover").css({"display":"block"});
 //        $(".popup2__massage").css({"display":"block"});
 //        tempOpen2 = true;
 //      }
 //    }
 //  });

 //  // popups - close
 //  $(".close_btn").click(function(){
 //    $(".popup__cover").css({"display":"none"});
 //    $(".popup__massage").css({"display":"none"});
 //    $(".popup2__cover").css({"display":"none"});
 //    $(".popup2__massage").css({"display":"none"});
 //  });

 //  // phone inputs - only for numbers
 //  $("input[name='Phone']").keypress(function(e){
 //    e = e || event;
 //    if (e.ctrlKey || e.altKey || e.metaKey) return;
 //    var chr = getChar(e);
 //    // с null надо осторожно в неравенствах, т.к. например null >= '0' => true на всякий случай лучше вынести проверку chr == null отдельно
 //    if (chr == null) return;
 //    if (chr < '0' || chr > '9') {
 //      return false;
 //    }
 //    function getChar(event) {
 //      if (event.which == null) {
 //        if (event.keyCode < 32) return null;
 //        return String.fromCharCode(event.keyCode) // IE
 //      }
 //      if (event.which != 0 && event.charCode != 0) {
 //        if (event.which < 32) return null;
 //        return String.fromCharCode(event.which) // остальные
 //      }
 //      return null; // специальная клавиша
 //    }
 //  });

 //  $(".form__private").click(function(){
 //    $(".politics-cover").css({"display":"block","opacity":"1"});
 //  });
 //  $(".private-politics__close_btn").click(function(){
 //    $(".politics-cover").css({"opacity":"0","display":"none"});
 //  });
 //  /* ↑↑↑ /popups ↑↑↑ */