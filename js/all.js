$(document).ready(function(){$(".progress .progress-bar").removeClass("w0"),$(document).delegate(".nav-block","click",function(){var o=$(this).data("type");$("html, body").animate({scrollTop:$("div."+o).offset().top-200},2e3)}),$(window).scroll(function(){var o=$(window).scrollTop();50<o?($(".navigation-area").addClass("fixed-navigation"),$(".up-arrow").fadeIn()):o<50?($(".navigation-area").removeClass("fixed-navigation"),$(".up-arrow").fadeOut()):100<o&&alert("a")}),$(document).delegate(".up-arrow","click",function(){$("html,body").animate({scrollTop:$("div.page").offset().top},1e3)}),$(document).delegate(".job","click",function(){target=$(this).data("target"),$(target).fadeToggle()}),$(document).delegate(".open-porfolio","click",function(){document.location.href="portfolio.html"})});