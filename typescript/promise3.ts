const sumar = (a: number, b: number):number =>  a + b;

const nomber = ():string => 'Hola mundo';

const obtenerSalario = ():Promise<string> => {

    return new Promise ( ( resolve, reject ) => {
        resolve('lavida');
    });
}
obtenerSalario().then (a => console.log(a.toUpperCase()))