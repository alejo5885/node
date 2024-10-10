function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('hola, ' + nombre);
            resolve(nombre);
        }, 1000);
    })
}

function hablar(callbackHablar) {
    setTimeout(function() {
            console.log('Bla bla bla bla...');
        callbackHablar();
    }, 1000);
}

function adios(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    })
}

console.log('Iniciando proceso...');
hola("Diego") 
    .then((nombre) => {
        console.log('Proceso terminado.');
    })
