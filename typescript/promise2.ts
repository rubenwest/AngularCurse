const retirarDinero = ( montonRetirar: number): Promise<number> => {

    let dineroActual = 1000;

    return new Promise((resolve, reject)=>{

        if ( montonRetirar > dineroActual ){
            reject('No hay suficientes fondos');
        }else{
            dineroActual -= montonRetirar;
            resolve(dineroActual);
        }

    });

}

retirarDinero (500)
    .then( montoActual => console.log(`Me queda ${montoActual}`))
    .catch ( console.warn)