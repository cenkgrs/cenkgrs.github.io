$(document).delegate(".nav-block", "click", function(){
    
    var area = $(this).data("type");
    $('html, body').animate({
        scrollTop: $("div."+area).offset().top
      }, 2000)
});

$(document).ready(function(){
    
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
    
    if(scroll > 50){
        $(".navigation-area").addClass("fixed-navigation");

    }
    else if(scroll < 50){
        $(".navigation-area").removeClass("fixed-navigation");

    }
    
    });
});