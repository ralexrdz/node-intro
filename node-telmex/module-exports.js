let x = 10
let y = 78
let z = 99

function hola () {
    console.log('hola')
    return 'HOLA'
}
function adios () {
    console.log('hola')
}

function xyz () {
    console.log(x, y, z)
}


module.exports = {
    hola: hola,
    xyz
}