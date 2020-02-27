
exports.min = function min (array) {
  return (arguments.length&&array.length)?array.sort()[0]:0;
}

exports.max = function max (array) {
  return (arguments.length&&array.length)?array.sort().reverse()[0]:0;
}

exports.avg = function avg (array) {
  return (arguments.length&&array.length)?array.reduce((a,b)=>a+b)/array.length:0;
}
