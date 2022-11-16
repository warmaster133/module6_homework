// модуль 6 Задание 2


function justNumber(a) {
    if (a <= 1000) {
      if (a < 2) {
        console.log(`${a} - Это непростое число`);
      } else {
        for (let i = 2; i < a; i++) {
          if (a % i === 0 && a !== 2) {
            return console.log(`${a} - Число непростое`);
          }
        }
        console.log(`${a} - Число простое`);
      }
    } else {
      console.log("Данные неверны");
    }
  }
  justNumber(17);
