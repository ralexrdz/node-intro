let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// con var output: 2 -- porque no tiene contexto de bloque
// expected output: 1