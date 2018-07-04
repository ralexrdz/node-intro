let fs = require("fs")

console.log(process.argv)

let inicio = fs.readFileSync("inicio.txt").toString()
// console.log("1", inicio)
let fin = fs.readFileSync("fin.txt").toString()
// console.log("2", fin)

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

// console.log('contenido inicio.txt',contInicio.toString())
// let contFin = fs.readFile("fin.txt")
// console.log(contFin.toString())

// fs.writeFileSync('juntos.txt', contInicio + contFin)