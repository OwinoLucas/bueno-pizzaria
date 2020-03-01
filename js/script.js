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

//for the first 4 pizzas since there values differ from the last two
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
    alert("You ordered " + getQuantity("")  +  " pizza."  +  ""  +  " Your total amount is kshs "  +  (choosenNumber));
    if (confirm("Do you want it/them delivered?") == false){
        alert(" Thank you for ordering at BUENO PIZZARIA!.")
    }
    else{
        prompt("Enter your location");
        alert("Your delivery fee is Ksh.200");
        alert("Your order will arrive within the hour.Have a good one");
    }
    
    
}

//for the last two pizzas
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
    alert("You ordered " + getQuantity("")  +  " pizza."  +  ""  +  " Your total amount is kshs "  +  (choosenNumber));
    if (confirm("Do you want it/them delivered?") == false){
        alert(" Thank you for ordering at BUENO PIZZARIA!.")
    }
    else{
        prompt("Enter your location");
        alert("Your delivery fee is Ksh.200");
        alert("Your order will arrive within the hour.Have a good one");
    }
}
