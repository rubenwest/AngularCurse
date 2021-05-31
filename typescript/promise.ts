console.log('inicio');

const prom1 = new Promise(( resolve, reject ) => {

        setTimeout(() => {
            reject('termina el timeout')
        }, 1000);

})

prom1
    .then(msj => console.log(msj))
    .catch(err => console.warn(err)
    )

console.log('fin');
