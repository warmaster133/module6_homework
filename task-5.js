// модуль 6 Задание 5

let power = (a, n) => {
    if (n > 1) {
      b = a;
      for (i = 2; i <= n; i++) {
        b = b * a;
      }
      console.log(b);
    } else if ((n === 1)) {
      console.log(a);
    } else if (n === 0) {
      console.log(1);
    } else {
      console.log("Введите верное значение");
    }
  };
  power(18, 1);