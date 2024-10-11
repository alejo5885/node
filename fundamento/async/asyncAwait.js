async function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('hola, ' + nombre);
            resolve(nombre);
        }, 1000);
    })
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
                console.log('Bla bla bla bla...');
            // resolve(nombre);
            resolve('Hay un error');
        }, 1000);
    })
}

function adios(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    })
}

async function main() {
    let nombre = await hola("Diego");
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log("Termina el proceso")
}

console.log("Comeinza el proceso");
main();