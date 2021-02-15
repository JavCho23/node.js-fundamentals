const os = require("os")

//Poder ver la arquitectura del so
console.log(os.arch())
// Poder ver el so en el que estamos corriendo
console.log(os.platform())
// Información de las CPUs
console.log(os.cpus())
// Constantes
//console.log(os.constants)

// Memoria
function kb(bytes) {
    return bytes / 1024
}
function mb(bytes) {
    return kb(bytes) / 1024
}
function gb(bytes) {
    return mb(bytes) / 1024
}
console.log(gb(os.freemem()))
console.log(gb(os.totalmem()))

//
