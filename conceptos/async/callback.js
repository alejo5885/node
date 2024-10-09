const nombre = 'Diego';

function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('hola, ' + nombre);
        miCallback(nombre);
    }, 1100);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios', nombre);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso...');
hola(nombre, function() {;
    adios(nombre, function() {
        console.log('Terminando proceso...');
    });
});

// hola('Diego', function() {})
// adios('Diego', function() {})