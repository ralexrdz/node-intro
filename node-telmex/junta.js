let fs = require("fs")
function juntaArchivos (archPrimero, archSegundo, archDestino) {
    let inicio
    try {
        inicio = fs.readFileSync(archPrimero).toString()
    } catch (error) {
        console.log("ERROR!!! el primero archivo no existe")
        // throw error
    }

    // console.log("1", inicio)
    let fin = fs.readFileSync(archSegundo).toString()
    // console.log("2", fin)
    fs.writeFileSync(archDestino, inicio + fin)
}

module.exports = {juntaArchivos}

/// TODO SINCRONO



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

