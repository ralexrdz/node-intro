let mult = require('./mult.js')

module.exports = function (x, y) {
    let total = 1;
    for (let i = 0; i < y; i++) {
        total = mult(total, x)
    }
    return total
}