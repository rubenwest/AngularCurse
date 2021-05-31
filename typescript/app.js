"use strict";
(() => {
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    class Rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
        }
        calcularArea() {
            return this.base * this.altura;
        }
    }
    const mesa = new Rectangulo(6, 7);
    console.log(mesa);
    const area = mesa.calcularArea();
    console.log('Area:', area);
})();
