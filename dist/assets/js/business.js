var iMenuOpen=!1;$(".search__type-btn").click(function(){iMenuOpen=iMenuOpen?($(".search__type-list").css("display","none"),!1):($(".search__type-list").css("display","block"),!0)}),$(".search__list-item").click(function(){for(var e=$(".search__field"),s=$(".search__list-item"),i=0;i<s.length;i++)if(this==s[i]){$(e).css("display","none"),$(e[i]).css("display","block");var t=$(this).siblings(".search__list-item-img-wrapper").children("img").attr("src"),c=$(this).siblings(".search__list-item-img-wrapper").children("img").attr("alt");$(".search__type-btn img").attr({src:t,alt:c})}$(".search__type-list").css("display","none"),iMenuOpen=!1}),$(document).click(function(e){1==iMenuOpen&&"search__type-btn-cover-for-click"!=event.target.className&&($(".search__type-list").css("display","none"),iMenuOpen=!1)});