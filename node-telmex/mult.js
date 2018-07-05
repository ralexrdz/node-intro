let suma = require('./suma.js')

module.exports = function (x, y) {
    let total = 0;
    for (let i = 0; i < y; i++) {
        total = suma(total, x)
    }
    return total
}