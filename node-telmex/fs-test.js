var fs = require("fs")

// CODIGO SINCRONO, BLOQUEA EJECUCIÓN

// var data = fs.readFileSync('input.txt')
// console.log(data.toString())


// CÓDIGO ASÍNCORNO, NO BLOQUE LA EJECUCIÓN
let dataInicio
let dataFin
fs.readFile('inicio.txt', function (err, data) {
    if (err) return console.error(err)
    // console.log(data.toString())
    dataInicio = data.toString()
})
fs.readFile('fin.txt', function (err, data) {
    if (err) return console.error(err)
    // console.log(data.toString())
    dataFin = data.toString()
})

console.log("Program Ended")