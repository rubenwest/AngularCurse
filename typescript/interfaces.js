"use strict";
(() => {
    const enviarMision = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la mision`);
    };
    const regresarMision = (xmen) => {
        console.log(`Regresando ${xmen.nombre} de la mision`);
    };
    const wolverine = {
        nombre: 'logan',
        edad: 60
    };
    enviarMision(wolverine);
    regresarMision(wolverine);
})();
