var textElemStartHeight=105,arrOfTextElemsStatus=[];function toggleInfoBlock(t){for(var e=t,o=$(".infoblock__text"),a=0;a<o.length;a++)if($(o[a])[0]==$(e).parent().parent(".infoblock__text")[0]){if(0==arrOfTextElemsStatus[a]){var l=$(e).parent().parent(".infoblock__text").css("height");$(e).parent().parent(".infoblock__text").css("height","auto");var n=$(e).parent().parent(".infoblock__text").outerHeight()+30;$(e).parent().parent(".infoblock__text").css("height",l),$(e).parent().parent(".infoblock__text").css({height:n}),$(e).text("згорнути"),$(e).parent().siblings(".infoblock__text-cover").css("display","none"),arrOfTextElemsStatus[a]=!0;var r=0;for(a=0;a<arrOfTextElemsStatus.length;a++)if(1==arrOfTextElemsStatus[a]&&r++,1<r){for(var s=0;s<arrOfTextElemsStatus.length;s++)1==arrOfTextElemsStatus[s]&&0==$(o[s]).find("button[data-closeall]").length&&$(o[s]).children(".infoblock__text-btns-wrapper").append('<button class="infoblock__text-btn" onclick="closeAllInfoBlocks()" data-closeall="">згорнути все</button>');return}return}$(e).parent().parent(".infoblock__text").css("height",textElemStartHeight),$(e).parent().siblings(".infoblock__text-cover").css("display","block"),$(e).text("... читати далі"),arrOfTextElemsStatus[a]=!1,$(o[a]).find("button[data-closeall]").remove()}}function closeAllInfoBlocks(){var t=$(".infoblock__text"),e="button[data-close]";$("button[data-closeall]").remove(),$(e).text("... читати далі"),$(t).css("height",textElemStartHeight),$(e).parent().siblings(".infoblock__text-cover").css("display","block");for(var o=0;o<arrOfTextElemsStatus.length;o++)arrOfTextElemsStatus[o]=!1}$(document).ready(function(){for(var t=$(".infoblock__text"),e=0;e<t.length;e++)arrOfTextElemsStatus.push(!1),$(t[e]).outerHeight()>textElemStartHeight&&($(t[e]).append('<div class="infoblock__text-cover"></div>              <div class="infoblock__text-btns-wrapper">                <button class="infoblock__text-btn" onclick="toggleInfoBlock(this)" data-close="">... читати далі</button>              </div>'),$(t[e]).css("height",textElemStartHeight))});