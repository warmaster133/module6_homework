// модуль 6 Задание 4

function printNumbers(from, to) {
    let current = from;
    let timerId = setInterval(function() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  printNumbers(5, 15);