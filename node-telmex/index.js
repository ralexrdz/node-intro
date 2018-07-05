// let juntador = require('./junta.js')

// juntador.juntaArchivos(process.argv[2], process.argv[3], process.argv[4])

let funcMate = require('./')

console.log(funcMate.suma(process.argv[2], process.argv[3]))
console.log(funcMate.mult(process.argv[2], process.argv[3]))
console.log(funcMate.expo(process.argv[2], process.argv[3]))