let misFuncs = require('./misFunciones.js')

let x = [1, 2, 3, 4, 5, 6, 7]
let personas = [
  {
    name: 'Osvaldo',
    lastName: 'Alcantara'
  },
  {
    name: 'Raul',
    lastName: 'Rodriguez'
  },

  {
    name: 'Raul',
    lastName: 'Sandche'
  }
]
// farEach

x.forEach(elem => {
  console.log(elem)
})

// map

let y = x.map(elem => misFuncs.sumale4(elem))
console.log(y)

let iniciales = personas.map(p => {
  return p.name.slice(0, 1) + p.lastName.slice(0, 1)
})

console.log('iniciales', iniciales)

// filter

let raules = personas.filter(p => p.name === 'Raul')

console.log(raules);

// find

let primerRaul = personas.find(p => p.name === 'Raul')

console.log(primerRaul);

// reduce

let suma = x.reduce((num, total) => {
  if (num > 4) return total
  else total += num
  return total
}, 0)

console.log(suma)
