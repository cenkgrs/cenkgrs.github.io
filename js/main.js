
$(document).ready(function(){
    $(".progress .progress-bar").removeClass("w0");

    $(document).delegate(".nav-block", "click", function(){
    
        var area = $(this).data("type");
        $('html, body').animate({
            scrollTop: $("div."+area).offset().top-200
          }, 2000)
    });
    
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
    
        if(scroll > 50){
            $(".navigation-area").addClass("fixed-navigation");
            $(".up-arrow").fadeIn();

        }
        else if(scroll < 50){
            $(".navigation-area").removeClass("fixed-navigation");
            $(".up-arrow").fadeOut();

        }
        else if(scroll > 100){
            alert("a");
        }
    
    });

    $(document).delegate(".up-arrow", "click", function(){
        $('html,body').animate({
            scrollTop: $("div.page").offset().top
        }, 1000)
    });
    
});