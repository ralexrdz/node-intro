let suma = require('./suma.js')
let mult = require('./mult.js')
let expo = require('./expo.js')

let param1 = parseInt(process.argv[2])
let param2 = parseInt(process.argv[3])

console.log('suma: ', suma(param1, param2))
console.log('mult: ', mult(param1, param2))
console.log('expo: ', expo(param1, param2))
// let juntador = require('./junta.js')

// juntador.juntaArchivos(process.argv[2], process.argv[3], process.argv[4])

// let funcMate = require('./')

// console.log(funcMate.suma(process.argv[2], process.argv[3]))
// console.log(funcMate.mult(process.argv[2], process.argv[3]))
// console.log(funcMate.expo(process.argv[2], process.argv[3]))

// let me = require('./module-exports.js')

