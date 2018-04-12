function f (x, y, ...a) {
    return a
}
console.log(f(1, 2, "hello", true, 7))

function sum(x, y, z) {
    return x + y + z
  }
  
// para separar los elementos de un arrego en variables
const numbers = [1, 2, 3]

console.log(sum(...numbers))


// Para insertar obejtos en otro arreglo
let parts = ['shoulder', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];

console.log(lyrics)

// para clonar arreglos
let array1 = [1, 2, 3]
// let array2 = array1
let array2 = [...array1]

array2.push(4)

console.log(array1)


