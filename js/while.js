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
       console.log(wanted + " cones sold...");
   }else if(wanted > random){
       console.log("I cannot sell you " + wanted + " cones I only have " + random + " left.");
   }else {
       console.log("Yay! I sold them all!");
       break;
   }
}while (random !== 0);