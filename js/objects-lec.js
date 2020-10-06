"use strict";
console.log("Welcome to Intro to Objects!");

/*********************************************
*              INTRO TO OBJECTS
******************************************** */

/**
 * Objects are an unordered collection of related data in the form of
 * key:value pairs
 */
// var rubberDucky = {
//     color: "yellow",
//     role: "emotional support",
//     name: "cody"
// };
// console.log(rubberDucky)
/*********************************************
 *              CREATING NEW OBJECTS
 ******************************************** */

/**
 * Objects can be created in JavaScript through the use of the 'new
 * Object()' constructor, or Object literal notation using curly braces.
 */

/**
 * TODO TOGETHER: Create a new variable (of type Object) and call it 'myPhone'. Use either the constructor or Object literal notation.
 */


var myPhone = new Object();
myPhone.model = "iPhone XS";
myPhone.color = "Black";
myPhone.storage = " 512 GB";
myPhone.ring = function(){
        console.log("ring ring");
    };
myPhone.picture = function (){
    console.log("take picture");
};
//
//
//     console.log(myPhone);

// var myPhone = {
//     color: "black",
//     model: "iPhone XS",
//     storage: "512 GB",
//     ring: function(){
//         console.log("ring ring");
//     },
//     picture: function(){
//         console.log("Take A Picture!");
//     }
// };
// console.log(myPhone.color);
// console.log(myPhone.model);
// console.log(myPhone.storage);
// myPhone.ring();
// myPhone.picture();
/**
 * TODO: Create a new Object and call it 'myMac'. use either the constructor or Object literal notation.
 */
    var myMac = {

};
/*********************************************
 *              PROPERTIES
 ******************************************** */

/**
 * TO DO TOGETHER: Using dot notation, assign these properties to your phone
 * Object: 'model', 'color', 'storage'. Console log your phone variable to
 * check that the information was stored properly.
 */

/**
 * TO DO: Using dot notation, assign these properties to your Mac
 * Object: 'model', 'size', 'year', Console log the Object to check if the
 * information was stored properly
 */

myMac.size = "16-inch Retina";
myMac.model = "macbook pro";
myMac.Year = "2019";
console.log(myMac);

myMac.name = {
    firstName: "Ryan",
    lastName: "P"
};


/**
 * TO DO TOGETHER: Assign a 'name' property to your phone. This should be of
 * type Object and store properties for the user's 'firstName' and
 * 'lastName'. Use console log to access the user's 'lastName'
 */

/**
 * TO DO: Using dot notation, assign a property called 'folders' that stores
 * an Array representing different folders in your system.
 */
myMac.folders = ["documents", "pictures", "other"];
console.log(myMac.folders);
myMac.folders.forEach(function (folder){
    console.log(folder);
})
/**
 * TO DO: Assign a 'login' property. This should be an object that stores
 * 'username','fakePassword' and 'email'
 */
myMac.login = {
    username: "blue water",
    fakePassword: "fakePassword",
    email: "is shiny"
};
console.log(myMac.login);
console.log(myMac);
/*********************************************
 *                  METHODS
 ******************************************** */

/**
 * TO DO TOGETHER: We are going to add functionality to our phone Object.
 * Using the dot notation, add a method named 'call' that console logs the
 * message: "Dialing..."
 */
myPhone.call = function(){
    console.log("Dialing");
};
/**
 * TO DO: Let's add functionality to our Mac Object. Create a method named
 * 'powerOn'. When called, this should display a console message that says
 * "Powering on..."
 */
myMac.powerOn = function(){
    console.log("Powering On");
};
/**
 * TO DO TOGETHER: Let's add one more piece of functionality. Create a
 * method on the phone object that returns a message displaying the user's
 * firstName and lastName. Hint: use the 'this' keyword.
 */
myMac.currentUser = function (){
    console.log("Current user: " + this.name.firstName + " " + this.name.lastName);
};
myMac.currentUser();
/**
 *
 * TO DO: One last thing. Let's add a 'currentUser' method that displays the
 * Mac user's 'username' and 'email'. Use the 'this' keyword to reference
 * the properties we created earlier.
 */
myMac.currentUser = function (){
    console.log("Current user: " + myMac.login.username + " " + myMac.login.email);
};
myMac.currentUser();

/*********************************************
 *                  NESTED VALUES
 ******************************************** */

/**
 * Because an Object is a collection of data and functionality, very often
 * we will see nested values. This can mean an Array of Objects containing
 * Arrays, Objects containing other Objects and so on.
 *
 * It is important to understand the shape of our data so that we can
 * navigate through it.
 */


/*********************************************
 *                  ARRAYS OF OBJECTS
 ******************************************** */

/**
 * If we have an Array of Objects, we can iterate through it to access each
 * Object element and pull the properties and methods that we need.
 */


var chooseYourFighter = [
    {
        name: {
            firstName: "Spongebob",
            lastName: "Squarepants"
        },
        catchPhrase: function (){
            return "I'M READY";
        },
        abilities: ["karate", "Bubble Blowing", "Jelly Fishing"]
    },
    {
        name: {
            firstName: "Patrick",
            lastName: "Star"
        },
        catchPhrase: function (){
            return "no this is patrick";
        },
        abilities: ["rock hiding", "Wumbo", "Secret Photo"]
    },
    {
        name: {
            firstName: "Eugene",
            lastName: "Krabs"
        },
        catchPhrase: function (){
            return "ME MONNIES";
        },
        abilities: ["take money", "hide money", "Tiny violin"]
    },
    {
        name: {
            firstName: "Squidward",
            lastName: "Tentacles"
        },
        catchPhrase: function (){
            return "NASAL SIGH";
        },
        abilities: ["whimper", "complain", "bad music"]
    }
    ];
chooseYourFighter.forEach(function (fighter){
    console.log(fighter.name.firstName);
    console.log("Their abilities are: " );

    fighter.abilities.forEach(function(ability){
        console.log(ability);
    });
    console.log("*************************");
});
