// var isInfoblockOpen = false;
// var tempStartHeight;

// $('.infoblock__read-more').click(function(){
//   if (isInfoblockOpen) {
//     $(this).parent('.infoblock__text').css('height', tempStartHeight);

//     $(this).siblings('.infoblock__text-cover').css('display','block');

//     $(this).text('... читати далі');

//     isInfoblockOpen = false
//   } else {
//   tempStartHeight = $(this).parent('.infoblock__text').css('height');
//   $(this).parent('.infoblock__text').css('height','auto');
//   var tempFinishHeight = $(this).parent('.infoblock__text').outerHeight() + 30;
//   $(this).parent('.infoblock__text').css('height',tempStartHeight);
//   $(this).parent('.infoblock__text').css({'height':tempFinishHeight});

//   $(this).siblings('.infoblock__text-cover').css('display','none');

//   $(this).text('приховати');

//   isInfoblockOpen = true
//   }

// });


$(document).ready(function(){

  var textElemStartHeight = 105;
  var arrOfTextElems      = $('.infoblock__text');

  var html = '<div class="infoblock__text-cover"></div>\
              <button class="infoblock__read-more" onclick="toggleInfoBlock(this)">... читати далі</button>';

  for (var i=0; i<arrOfTextElems.length; i++) {
    if ( $(arrOfTextElems[i]).outerHeight() > textElemStartHeight ) {
      $(arrOfTextElems[i]).append(html);
      $(arrOfTextElems[i]).css('height',textElemStartHeight);
    }
  }



});

function toggleInfoBlock(_this) {
  var THIS = _this;
  var arrOfTextElems = $('.infoblock__text');

  for (var i=0; i<arrOfTextElems.length; i++) {
    if ( $(arrOfTextElems[i])[0] == $(THIS).parent('.infoblock__text')[0] ) {


      // чаклувати тут
      console.log("i", i);

      return
    }
  }
}