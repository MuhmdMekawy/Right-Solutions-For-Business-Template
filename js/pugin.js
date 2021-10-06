window.onload = function(){
    $(".loading").fadeOut(1000);
    
};

$(document).ready(function(){
    $("input").focus(function(){
        $(this).css({
            "background-color" : "yellow" ,
            "border" : "1px solid yellow " ,
            "caret-color" : "red" ,
        })
    });

    $(window).on("scroll" , function(){
        let src = $(window).scrollTop();
        if (src >= 1000){
            $(".up").fadeIn(1000);
            $(".up").click(function(){
                $(window).scrollTop(0);
            })
        }
        else{
            $(".up").fadeOut(1000);
        }
    });
    
    new WOW().init();
});