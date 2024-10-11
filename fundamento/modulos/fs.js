const fs = require("fs")

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        console.log(data.toString())
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err, ) {
        if (err) {
            console.error("No he podido escribirlo", err)
        } else
    })
}

leer(__dirname + "/archivo.txt")