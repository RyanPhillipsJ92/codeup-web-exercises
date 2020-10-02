"use strict";

// ********
// NUMBER 2
// ********
function showMultiplicationTable(input){
    for(var i = 1; i <= 10; i++){
        console.log(input + " x " + i + " = " + (input * i));
    }
}
showMultiplicationTable(9876543210);

// ********
// NUMBER 3
// ********
// var random = Math.floor((Math.random() * 3) + 1);
for(var i = 1; i <=10; i++){
    var random = Math.floor((Math.random() * 2) * 100);
    if(random % 2 === 0){
        console.log(random + " is Even!");
    } else {
        console.log(random + " is Odd!");
    }
}



// ********
// NUMBER 4
// ********

var x = "";
for(var i = 1; i <= 9; i++){
    x+=1;
    console.log((i * x)+ "");
}

// ********
// NUMBER 5
// ********
for(var i = 100; i > 0; i--){
    if(i % 5 === 0){
        console.log(i);
    }
}



