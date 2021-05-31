"use strict";
const avenger = {
    name: 'steve',
    clave: 'capitan america',
    poder: 'Escudo'
};
console.log(avenger.clave);
console.log(avenger.name);
console.log(avenger.poder);
const { clave, poder } = avenger;
console.log(clave);
console.log(poder);
const avengers = ['Thor', 'Spiderman', 'Arrow'];
const [loki, arana, flecha] = avengers;
console.log(loki, arana, flecha);
