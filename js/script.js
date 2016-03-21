function pow(num, degree) {
  var powResult = 1;

  if (degree < 0) {
    for (var i = degree; i < 0; i++) {
      powResult = powResult * num;
    }
    return(1 / powResult);
  } else if (degree == 0) {
      return(1);
  } else {
    for (var i = 0; i < degree; i++) {
      powResult = powResult * num;
    }
    return(powResult);
  }

}

var num;
var degree;

num = prompt('Введите число');
degree = prompt('Введите степень');

console.log(num + ' в степени '+ degree + ' = ' + pow(num, degree));
