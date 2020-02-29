$(document).ready(function(){
    $(".pizz").click(function(){
        $(".pizz").hide();
        $(".piz").show();
    });
    $(".piz").click(function(){
        $(".piz").hide();
        $(".pizz").show();
    });

    $(".top").click(function(){
        $(".top").hide();
        $(".tops").show();
    });
    $(".tops").click(function(){
        $(".tops").hide();
        $(".top").show();
    });

    $(".cr").click(function(){
        $(".cr").hide();
        $(".crr").show();
    });
    $(".crr").click(function(){
        $(".crr").hide();
        $(".cr").show();
    });
});