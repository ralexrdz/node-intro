let fs = require("fs")

console.log(process.argv)

/// TODO SINCRONO
let inicio
try {
    inicio = fs.readFileSync(process.argv[2]).toString()
} catch (error) {
    console.log("ERROR!!! el primero archivo no existe")
    // throw error
}

// console.log("1", inicio)
let fin = fs.readFileSync(process.argv[3]).toString()
// console.log("2", fin)
fs.writeFileSync(process.argv[4], inicio + fin)


// TODO ASINCRONO
// fs.readFile("inicio.txt", function (err, data) {
//     if (err) console.log(err)
//     console.log("1",data.toString())
//     let contInicio = data
//     fs.readFile("fin.txt", function (err, data) {
//         if (err) console.log(err)
//         console.log("2",data.toString())
//         let contFin = data
//         console.log("3",contInicio.toString())
//         console.log("4",contFin.toString())
//     })
// })

