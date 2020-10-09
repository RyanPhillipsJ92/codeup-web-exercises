(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
           var area = Math.PI * Math.pow(circle.radius,2);
            return area;
        },

        logInfo: function (doRounding) {
            if(doRounding === true) {
                let rounded = Math.round(circle.getArea());
                return console.log("Area of a circle with radius rounded: " + this.radius + ", is: " + rounded);
            }else {
                return console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea());
            }
        }
    };
// TODO: complete this method.
    // TODO: return the proper value
// If doRounding is true, round the result to the nearest integer.
// Otherwise, output the complete value
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
circle.radius = 5;

// log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();