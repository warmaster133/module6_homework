 // модуль 6 Задание 1. 

 let arr = [0,1,2,3,4,12,24, null, 'word', NaN, undefined, -5, true, false];
let iterNumTwo = 0;
let iterNumOne = 0;
function getNum() {
    for(let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
        if (isNaN(arr[i]) === true) {
            console.log(`${arr[i]} = NaN`);
        } else if (arr[i] % 2 == 0) {
            iterNumTwo++;
        } else if (arr[i] % 2 !== 0) {
            iterNumOne++;
        }
    } else if (typeof arr[i] == "object") {
        console.log(`Null = ${arr[i]}`);
    } else if (typeof arr[i] == "undefined") {
        console.log(`undefined = ${arr[i]}`);
    } else if (typeof arr[i] == "string") {
        console.log(`Строка = ${arr[i]}`);
    } else if (typeof arr[i] == "boolean") {
        console.log(`Boolean = ${arr[i]}`);
    } 
    }
    console.log(`Количество четных чисел в массиве ${iterNumTwo}`);
    console.log(`Количество нечетных чисел в массиве ${iterNumOne}`);
}
getNum();