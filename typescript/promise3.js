"use strict";
const sumar = (a, b) => a + b;
const nomber = () => 'Hola mundo';
const obtenerSalario = () => {
    return new Promise((resolve, reject) => {
        resolve('lavida');
    });
};
obtenerSalario().then(a => console.log(a.toUpperCase()));
