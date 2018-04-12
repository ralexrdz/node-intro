'use strict';

var _misFunciones = require('./misFunciones.js');

var x = [1, 2, 3, 4, 5, 6, 7];

// map

var y = x.map(function (elem) {
  return (0, _misFunciones.sumale4)(elem);
});
console.log(y);