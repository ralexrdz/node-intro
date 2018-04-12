let x = { a:1, b:2}

let z = { c:3, a: 4}

// let y = x
let y = Object.assign({}, x)

y.a = 2

console.log(x)

