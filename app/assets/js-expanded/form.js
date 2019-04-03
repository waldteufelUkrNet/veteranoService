////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ↓↓↓ phone input - only for numbers ↓↓↓ */
// $('#input-phone').keypress(function(e){
//   e = e || event;
//   if (e.ctrlKey || e.altKey || e.metaKey) return;
//   var chr = getChar(e);
//   if (chr == null) return;
//   if (chr < '0' || chr > '9') {
//     return false;
//   }
//   function getChar(event) {
//     if (event.which == null) {
//       if (event.keyCode < 32) return null;
//       return String.fromCharCode(event.keyCode) // IE
//     }
//     if (event.which != 0 && event.charCode != 0) {
//       if (event.which < 32) return null;
//       return String.fromCharCode(event.which) // остальные
//     }
//     return null; // специальная клавиша
//   }
// });
/* ↑↑↑ /phone input - only for numbers ↑↑↑ */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ↓↓↓ клік на кнопку ↓↓↓ */

$('#submitBtn').click(function() {

  // валідація пошти
  var tempEmail = $('#email').val();

  if ( !isEmailValid(tempEmail) ) {

    // якщо повідомлення уже є - вийти
    var message = $('#email-error-info');
    if ( $(message).css('height') != '0px' ) return;

    // підсвітка input'а та фокус
    $('#email').css({'box-shadow':'0 0 5px red','border-color':'red'}).focus();

    // показати повідомлення, вийти
    $(message).css({'height':'auto','min-height':'30px'});
    var tempHeight = $(message).css('height');
    $(message).css({'height': '0px','min-height':'0px'});
    $(message).css({'height':tempHeight});

    return
  }

  // валідація назви компанії
  if ( $('#companyName').val().length < 2 ) {

    // якщо повідомлення уже є - вийти
    var message = $('#companyName-error-info');
    if ( $(message).css('height') != '0px' ) return;

    // підсвітка input'а та фокус
    $('#companyName').css({'box-shadow':'0 0 5px red','border-color':'red'}).focus();

    // показати повідомлення, вийти
    $(message).css({'height':'auto','min-height':'30px'});
    var tempHeight = $(message).css('height');
    $(message).css({'height': '0px','min-height':'0px'});
    $(message).css({'height':tempHeight});

    return
  }

  // валідація прізвища/імені власника
  if ( $('#ownerName').val().length < 2 ) {

    // якщо повідомлення уже є - вийти
    var message = $('#ownerName-error-info');
    if ( $(message).css('height') != '0px' ) return;

    // підсвітка input'а та фокус
    $('#ownerName').css({'box-shadow':'0 0 5px red','border-color':'red'}).focus();

    // показати повідомлення, вийти
    $(message).css({'height':'auto','min-height':'30px'});
    var tempHeight = $(message).css('height');
    $(message).css({'height': '0px','min-height':'0px'});
    $(message).css({'height':tempHeight});

    return
  }

  // валідація інформації про власника
  if ( $('#ownerBiography').val().length < 10 ) {

    // якщо повідомлення уже є - вийти
    var message = $('#ownerBiography-error-info');
    if ( $(message).css('height') != '0px' ) return;

    // підсвітка input'а та фокус
    $('#ownerBiography').css({'box-shadow':'0 0 5px red','border-color':'red'}).focus();

    // показати повідомлення, вийти
    $(message).css({'height':'auto','min-height':'30px'});
    var tempHeight = $(message).css('height');
    $(message).css({'height': '0px','min-height':'0px'});
    $(message).css({'height':tempHeight});

    return
  }

  // валідація інформації про історію виникнення бізнесу
  if ( $('#businessHistory').val().length < 40 ) {

    // якщо повідомлення уже є - вийти
    var message = $('#businessHistory-error-info');
    if ( $(message).css('height') != '0px' ) return;

    // підсвітка input'а та фокус
    $('#businessHistory').css({'box-shadow':'0 0 5px red','border-color':'red'}).focus();

    // показати повідомлення, вийти
    $(message).css({'height':'auto','min-height':'30px'});
    var tempHeight = $(message).css('height');
    $(message).css({'height': '0px','min-height':'0px'});
    $(message).css({'height':tempHeight});

    return
  }

  // валідація інформації про суть бізнесу
  if ( $('#businessCore').val().length < 40 ) {

    // якщо повідомлення уже є - вийти
    var message = $('#businessCore-error-info');
    if ( $(message).css('height') != '0px' ) return;

    // підсвітка input'а та фокус
    $('#businessCore').css({'box-shadow':'0 0 5px red','border-color':'red'}).focus();

    // показати повідомлення, вийти
    $(message).css({'height':'auto','min-height':'30px'});
    var tempHeight = $(message).css('height');
    $(message).css({'height': '0px','min-height':'0px'});
    $(message).css({'height':tempHeight});

    return
  }

  // валідація назви міста
  if ( $('#city').val().length < 2 ) {

    // якщо повідомлення уже є - вийти
    var message = $('#city-error-info');
    if ( $(message).css('height') != '0px' ) return;

    // підсвітка input'а та фокус
    $('#city').css({'box-shadow':'0 0 5px red','border-color':'red'}).focus();

    // показати повідомлення, вийти
    $(message).css({'height':'auto','min-height':'30px'});
    var tempHeight = $(message).css('height');
    $(message).css({'height': '0px','min-height':'0px'});
    $(message).css({'height':tempHeight});

    return
  }

  // // валідація прізвища
  // if ( $('#input-lastName').val().length < 2 ) {

  //   // якщо повідомлення уже є - вийти
  //   var message = $('.regform__info.regform__info_error:eq(1)');
  //   if ( $(message).css('height') != '0px' ) return;

  //   // підсвітка input'а та фокус
  //   $('#input-lastName').css({'box-shadow':'0 0 5px red','border-color':'red'}).focus();

  //   // показати повідомлення, вийти
  //   $(message).css({'height':'auto','min-height':'30px','padding':'3px 0'});
  //   var tempHeight = $(message).css('height');
  //   $(message).css({'height': '0px','min-height':'0px','padding':'0px'});
  //   $(message).css({'transition':'height .5s, padding-top .5s, margin .5s','height':tempHeight, 'padding':'3px', 'margin':'3px 0'});

  //   return
  // }

  // // валідація телефону
  // if ( $('#input-phone').val().length < 7 ) {

  //   // якщо повідомлення уже є - вийти
  //   var message = $('.regform__info.regform__info_error:eq(2)');
  //   if ( $(message).css('height') != '0px' ) return;

  //   // підсвітка input'а та фокус
  //   $('#input-phone').css({'box-shadow':'0 0 5px red','border-color':'red'}).focus();

  //   // показати повідомлення, вийти
  //   $(message).css({'height':'auto','min-height':'30px','padding':'3px 0'});
  //   var tempHeight = $(message).css('height');
  //   $(message).css({'height': '0px','min-height':'0px','padding':'0px'});
  //   $(message).css({'transition':'height .5s, padding-top .5s, margin .5s','height':tempHeight, 'padding':'3px', 'margin':'3px 0'});

  //   return
  // }

  // // валідація паролю на довжину, наявність букв і цифр
  // var tempPass    = $('#input-password').val();
  // var tempPassArr = tempPass.split('');
  // var tempCount   = 0;

  // for (var i=0; i< tempPassArr.length; i++) {
  //   if ( isNumeric(tempPassArr[i]) ) {
  //     tempCount++;
  //   }
  // }
  // if ( tempPass.length < 8 || tempPass.length == tempCount || tempCount == 0 ) {

  //   // якщо повідомлення уже є - вийти
  //   var message = $('.regform__info.regform__info_error:eq(4)');
  //   if ( $(message).css('height') != '0px' ) return;

  //   // підсвітка input'а та фокус
  //   $('#input-password').css({'box-shadow':'0 0 5px red','border-color':'red'}).focus();

  //   // показати повідомлення, вийти
  //   $(message).css({'height':'auto','min-height':'30px','padding':'3px 0'});
  //   var tempHeight = $(message).css('height');
  //   $(message).css({'height': '0px','min-height':'0px','padding':'0px'});
  //   $(message).css({'transition':'height .5s, padding-top .5s, margin .5s','height':tempHeight, 'padding':'3px', 'margin':'3px 0'});

  //   return
  // }

  // // валідація паролів на однаковість
  // if ( $('#input-password').val() != $('#input-confirm-pass').val() ) {

  //   // якщо повідомлення уже є - вийти
  //   var message = $('.regform__info.regform__info_error:eq(5)');
  //   if ( $(message).css('height') != '0px' ) return;

  //   // підсвітка input'а та фокус
  //   $('#input-password, #input-confirm-pass').css({'box-shadow':'0 0 5px red','border-color':'red'});
  //   $('#input-confirm-pass').focus();

  //   // показати повідомлення, вийти
  //   $(message).css({'height':'auto','min-height':'30px','padding':'3px 0'});
  //   var tempHeight = $(message).css('height');
  //   $(message).css({'height': '0px','min-height':'0px','padding':'0px'});
  //   $(message).css({'transition':'height .5s, padding-top .5s, margin .5s','height':tempHeight, 'padding':'3px', 'margin':'3px 0'});

  //   return
  // }

  // // валідація на поставлену пташку
  // if ( "attr('checked')", $('.regform__agree-wrapper input:checked').length != 1 ) {

  //   // якщо повідомлення уже є - вийти
  //   var message = $('.regform__info.regform__info_error:eq(6)');
  //   if ( $(message).css('height') != '0px' ) return;

  //   // підсвітка input'а
  //   $('.regform__agree-checkbox-span').css({'box-shadow':'0 0 5px red','border-color':'red'});

  //   // показати повідомлення, вийти
  //   $(message).css({'height':'auto','min-height':'30px','padding':'3px 0'});
  //   var tempHeight = $(message).css('height');
  //   $(message).css({'height': '0px','min-height':'0px','padding':'0px'});
  //   $(message).css({'transition':'height .5s, padding-top .5s, margin .5s','height':tempHeight, 'padding':'3px', 'margin':'3px 0'});

  //   return
  // }


  // var dat = {
  //   CustomerEmail     : $('#input-email').val(),
  //   CustomerPassword  : $('#input-password').val(),
  //   CustomerFirstName : $('#input-firstName').val(),
  //   CustomerLastName  : $('#input-lastName').val(),
  //   CustomerPhone     : $('#input-country-code').val()+$('#input-phone').val(),
  //   CustomerCountry   : selectedCountry,
  //   CustomerCity      : "unknown",
  //   CustomerIp        : "0",
  //   CustomerLanguage  : "unknown",
  //   CompanyId         : 0,
  //   Hash              : 'self'
  // }

  // $.ajax({
  //       url     : "https://backend.astra-investing.com/api/LidsSelfRegisr",
  //       type    : "POST",
  //       data    : dat,
  //       success : function (data) {
  //                   if (data=="Ok") {
  //                     location.href = 'https://traiding.astra-investing.com/Home/LoginSite?email=' + dat.CustomerEmail + '&pass=' + dat.CustomerPassword
  //                   } else {
  //                     // якщо повідомлення уже є - вийти
  //                     var message = $('.regform__info.regform__info_error:eq(7)');
  //                     if ( $(message).css('height') != '0px' ) return;

  //                     // підсвітка input'а
  //                     $('#input-email').css({'box-shadow':'0 0 5px red','border-color':'red'});

  //                     // показати повідомлення, вийти
  //                     $(message).css({'height':'auto','min-height':'30px','padding':'3px 0'});
  //                     var tempHeight = $(message).css('height');
  //                     $(message).css({'height': '0px','min-height':'0px','padding':'0px'});
  //                     $(message).css({'transition':'height .5s, padding-top .5s, margin .5s','height':tempHeight, 'padding':'3px', 'margin':'3px 0'});

  //                     return
  //                   }
  //                 }
  // });
});

/* ↑↑↑ /клік на кнопку ↑↑↑ */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ↓↓↓ перевірка правильності на input'ах ↓↓↓ */

// якщо пошта коректна - прибрати повідомлення
$('#email').keyup(function(){
  var tempEmail = $('#email').val();
  if ( isEmailValid(tempEmail) ) {
    $('#email-error-info').css({'height': '0'});
    // підсвітка input'а
    $('#email').css({'box-shadow':'none','border-color':'lightgrey'});
  }
});

// якщо назва конпанії є - прибрати повідомлення
$('#companyName').keyup(function(e){
  if ( $('#companyName').val().length > 1 ) {
    $('#companyName-error-info').css({'height': '0'});
    // підсвітка input'а
    $('#companyName').css({'box-shadow':'none','border-color':'lightgrey'});
  }
});

// якщо є прізвище/ім'я - прибрати повідомлення
$('#ownerName').keyup(function(e){
  if ( $('#ownerName').val().length > 1 ) {
    $('#ownerName-error-info').css({'height': '0'});
    // підсвітка input'а
    $('#ownerName').css({'box-shadow':'none','border-color':'lightgrey'});
  }
});

// якщо є інформація про власника - прибрати повідомлення
$('#ownerBiography').keyup(function(e){
  if ( $('#ownerBiography').val().length > 9 ) {
    $('#ownerBiography-error-info').css({'height': '0'});
    // підсвітка input'а
    $('#ownerBiography').css({'box-shadow':'none','border-color':'lightgrey'});
  }
});

// якщо є інформація про історію виникнення бізнесу - прибрати повідомлення
$('#businessHistory').keyup(function(e){
  if ( $('#businessHistory').val().length > 39 ) {
    $('#businessHistory-error-info').css({'height': '0'});
    // підсвітка input'а
    $('#businessHistory').css({'box-shadow':'none','border-color':'lightgrey'});
  }
});

// якщо є інформація про суть бізнесу - прибрати повідомлення
$('#businessCore').keyup(function(e){
  if ( $('#businessCore').val().length > 39 ) {
    $('#businessCore-error-info').css({'height': '0'});
    // підсвітка input'а
    $('#businessCore').css({'box-shadow':'none','border-color':'lightgrey'});
  }
});

// якщо є назва міста - прибрати повідомлення
$('#city').keyup(function(e){
  if ( $('#city').val().length > 1 ) {
    $('#city-error-info').css({'height': '0'});
    // підсвітка input'а
    $('#city').css({'box-shadow':'none','border-color':'lightgrey'});
  }
});

// // якщо ім'я є - прибрати повідомлення
// $('#input-firstName').keyup(function(e){
//   if ( $('#input-firstName').val().length > 1 ) {
//     $('.regform__info.regform__info_error:eq(0)').css({'transition':'height .5s, padding-top .5s, margin .5s','height': '0', 'padding':'0', 'margin':'0'});
//     // підсвітка input'а
//     $('#input-firstName').css({'box-shadow':'none','border-color':'lightgrey'});
//   }
// });

// // якщо прізвище є - прибрати повідомлення
// $('#input-lastName').keyup(function(e){
//   if ( $('#input-lastName').val().length > 1 ) {
//     $('.regform__info.regform__info_error:eq(1)').css({'transition':'height .5s, padding-top .5s, margin .5s','height': '0', 'padding':'0', 'margin':'0'});
//     // підсвітка input'а
//     $('#input-lastName').css({'box-shadow':'none','border-color':'lightgrey'});
//   }
// });

// // якщо телефон коректний - прибрати повідомлення
// $('#input-phone').keyup(function(e){
//   if ( $('#input-phone').val().length > 6 ) {
//     $('.regform__info.regform__info_error:eq(2)').css({'transition':'height .5s, padding-top .5s, margin .5s','height': '0', 'padding':'0', 'margin':'0'});
//     // підсвітка input'а
//     $('#input-phone').css({'box-shadow':'none','border-color':'lightgrey'});
//   }
// });

// // якщо пароль коректний - прибрати повідомлення
// $('#input-password, #input-confirm-pass').keyup(function(){
//   var tempPass    = $('#input-password').val();
//   var tempPassArr = tempPass.split('');
//   var tempCount   = 0;

//   for (var i=0; i< tempPassArr.length; i++) {
//     if ( isNumeric(tempPassArr[i]) ) {
//       tempCount++;
//     }
//   }

//   if ( tempPass.length >= 8 && tempPass.length != tempCount && tempCount != 0 ) {
//     $('.regform__info.regform__info_error:eq(4)').css({'transition':'height .5s, padding-top .5s, margin .5s','height': '0', 'padding':'0', 'margin':'0'});
//     // підсвітка input'а
//     $('#input-password, #input-confirm-pass').css({'box-shadow':'none','border-color':'lightgrey'});
//   }
// });

// // якщо паролі однакові - прибрати повідомлення
// $('#input-password, #input-confirm-pass').keyup(function(){

//   if ( $('#input-password').val() == $('#input-confirm-pass').val() ) {
//     $('.regform__info.regform__info_error:eq(5)').css({'transition':'height .5s, padding-top .5s, margin .5s','height': '0', 'padding':'0', 'margin':'0'});
//     // підсвітка input'а
//     $('#input-password, #input-confirm-pass').css({'box-shadow':'none','border-color':'lightgrey'});
//   }
// });

// // якщо пташка поставлена - прибрати повідомлення
// $('.regform__agree-label').click(function(){

//   if ( "attr('checked')", $('.regform__agree-wrapper input:checked').length == 1 ) {
//     $('.regform__info.regform__info_error:eq(6)').css({'transition':'height .5s, padding-top .5s, margin .5s','height': '0', 'padding':'0', 'margin':'0'});
//     // підсвітка input'а
//     $('.regform__agree-checkbox-span').css({'box-shadow':'none','border-color':'lightgrey'});
//   }
// });

/* ↑↑↑ /перевірка правильності на input'ах ↑↑↑ */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ↓↓↓ FUNCTIONS DECLARATIONS ↓↓↓ */

function isEmailValid (email) {

  // повинен бути 1 символ @
  var temp = calculateCharsInStr(email, '@');
  if ( temp != 1 ) return false;

  // повинен бути мінімум 1 символ .
  var temp = calculateCharsInStr(email, '.');
  if ( temp < 1 ) return false;

  // символи @ та . не повинні бути крайніми
  if ( email.charAt(0)  == '@' ||
       email.charAt(0)  == '.' ||
       email.charAt( email.length-1 ) == '@' ||
       email.charAt( email.length-1 ) == '.' ) return false;

  // комбінація символів @. не допустима
  if ( email.indexOf('@.') != -1 ) return false;

  // після символу @ обов'язково повинен бути символ .
  var tempArr = email.split('@');
  if ( tempArr[1].indexOf('.') == -1 ) return false

  return true
}

function calculateCharsInStr(str, char) {
  var pos = count = 0;
  while (true) {
    var foundPos = str.indexOf(char, pos);
    if (foundPos == -1) break;
    count++;
    pos = foundPos + 1;
  }
  return count;
}

// function isNumeric(n) {
//   return !isNaN( parseFloat(n) ) && isFinite(n);
// }
/* ↑↑↑ /FUNCTIONS DECLARATIONS ↑↑↑ */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////