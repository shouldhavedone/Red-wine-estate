$(function(){
    $(window).scroll(function () {
        if($(window).scrollTop() >= 1){
            $(".utility-bar").css({
                "backgroundColor": "#fff"
            }, 1000);
            $(".hours, #utility-navigation>ul>li>a").css({
                "color": "rgb(140, 38, 51)"
            }, 1000);
            $("#primary-navigation").css({
                "backgroundColor": "rgb(140, 38, 51)"
            }, 1000);
        }else {
            $(".utility-bar").css({
                "backgroundColor": ""
            }, 1000);
            $(".hours, #utility-navigation>ul>li>a").css({
                "color": "#fff"
            }, 1000);
            $("#primary-navigation").css({
                "backgroundColor": ""
            }, 1000);
        }
    });



});

