"use strict";
// var i = 1;
// var number = 2;
// while (i <= 16){
//     console.log(number);
//     i++;
//     number = number * 2;
// }





var random = Math.floor((Math.random() * 50) + 50 );
do {
    var wanted = Math.floor(Math.random() * 5) + 1;
    if(wanted < random){
       random-=wanted;
       console.log(wanted + " cones sold..." + random + " cones to go");
   }else if(wanted > random){
       console.log("I cannot sell you " + wanted + " cones I only have " + random + " left.");
   }else {
       console.log("Yay! I sold them all!");
       break;
   }
}while (random !== 0);




// random num between 50 - 100

var allCones = Math.floor((Math.random() * 50) + 50 );
do {
    // random num between 1 - 5
    var conesPurchased = Math.floor(Math.random() * 5) + 1;

    if(conesPurchased > allCones){
        var outOfStock = "Can't sell you " + conesPurchased + ". I only have " + allCones;
        console.log(outOfStock);
    }else {
        // subtracting purchased cones from total cones
        allCones -= conesPurchased
        var soldCones = conesPurchased + " cones sold..." + allCones + " cones to go";
        console.log(soldCones);
    }
}while (allCones > 0);












