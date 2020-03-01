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

function getSizeValue(){
    var choosenValue = document.getElementsByClassName("S").value;
    return parseInt(choosenValue); 
}
function getToppings(){
    var choosenToppings = document.getElementsByClassName("T").value;
    return parseInt(choosenToppings); 
}
function getCrusts(){
    var choosenCrusts = document.getElementsByClassName("C").value;
    return parseInt(choosenCrusts); 
}
function getQuantity(){
    var choosenQuantity = document.getElementsByClassName("No").value;
    return parseInt(choosenQuantity); 
}
function addTotal(){
    var choosenNumber = (getSizeValue() + getToppings() + getCrusts()) * getQuantity();
    alert("You have Ordered " + getQuantity("")  +  " pizza."  +  ""  +  " The Total Amount is kshs "  +  (choosenNumber)  +  ""  +  " Thank you for your order welcome again.");
}

function getSizeValue(){
    var choosenValue = document.getElementsByClassName("Ss").value;
    return parseInt(choosenValue); 
}
function getToppings(){
    var choosenToppings = document.getElementsByClassName("T").value;
    return parseInt(choosenToppings); 
}
function getCrusts(){
    var choosenCrusts = document.getElementsByClassName("C").value;
    return parseInt(choosenCrusts); 
}
function getQuantity(){
    var choosenQuantity = document.getElementsByClassName("No").value;
    return parseInt(choosenQuantity); 
}
function addTotalToo(){
    var choosenNumber = (getSizeValue() + getToppings() + getCrusts()) * getQuantity();
    alert("You have Ordered " + getQuantity("")  +  " pizza."  +  ""  +  " The Total Amount is kshs "  +  (choosenNumber)  +  ""  +  " Thank you for your order welcome again.");
}
