"use strict";

// function wait(seconds) {
//     return new Promise((resolve) => {
//         setTimeout((resolve, seconds))
// })}
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


fetch('https://swapi.dev/api/people/1')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            console.log(data.name);
            console.log(data.birth_year);
            console.log(data.eye_color);
            console.log(data.gender);
            console.log(data.hair_color);
        })
        .catch(console.log);

fetch("https://swapi.dev/api/vehicles/4/")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        console.log(data.name);
        console.log(data.model);
        console.log(data.vehicle_class);
        console.log(data.manufacturer);
        console.log(data.length);
    })
    .catch(console.log);
// fetch(url, {headers: {'Authorization': 'token fb28f128b82617346c894fa3e4312b2237d0f2d9'}})