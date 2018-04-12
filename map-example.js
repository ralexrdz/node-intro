let myArray = [
    {
        x: 1,
        y: 2
    },
    {
        x: 3,
        y: 4
    },
    {
        x: 5,
        y: 6
    }
]

// let justXArray = []
// for (let i=0; i< myArray.length; i++) {
//     justXArray.push(myArray[i].x)
// }

// let justXArray = myArray.map(function (elem) {
//     return elem.xs
// })

// let justXArray = myArray.map(elem => { return elem.x } )

let justXArray = myArray.map(elem => elem.x )

