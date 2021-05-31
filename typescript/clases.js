"use strict";
class Avenger {
    /*         nombre: string = 'Ruben';
            equipo: string = 'Capi';
            nombreReal: string = 'Scott';
            puedePelear: boolean = true; */
    constructor(nombre, equipo, nombreReal, puedePelear) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = puedePelear;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = puedePelear;
    }
}
const antman = new Avenger('Ruben', 'Ironman');
console.log(antman);
antman.equipo = 'Ironman';
