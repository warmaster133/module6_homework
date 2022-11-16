// модуль 6 Задание 3


function funcFirst(a) {
    return function (b) {
      console.log(a + b);
    };
  }
  let result = funcFirst(33);
  result(67);
