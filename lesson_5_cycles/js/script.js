"use strict";

let num = 50;

/* while (num < 55) {
  console.log(num);
  num++;
} */

/* do {
  console.log(num);
  num++;
} while (num < 55); */

for (let i = 1; i < 8; i++) {
  console.log(num);
  num++;
}

for (let i = 1; i < 10; i++) {
  if (i === 6) {
    /* break; */ // прирывание цикла.
    continue; // пропускает значение { i } но не прерывает полностью циклю
  }
  console.log(i);
}

// Вложенность циклов

for (let i = 0; i < 3; i++) {
  console.log(i);
  for (let j = 0; j < 3; j++) {
    console.log(j);
  }
}

/* let result = "";
const length = 7;

for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    result += "*"; // записываем звездочку в строку
  }
  result += "\n"; // перенос строки
}
console.log(result); */

// Метки

first: for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 3; k++) {
      /*  if(k===2) continue first; */
      if (k === 2) break first;
      console.log(`Third level: ${k}`);
    }
  }
}

/* При помощи цикла выведите числа от 5 до 10 в консоль. 
5 и 10 включительно. Цикл можно использовать любой */

const first = 10;

for (let i = 5; i <= first; i++) {
  console.log(i);
}

/* При помощи цикла for вывести числа от 20 до 10 в консоль. 
В обратном порядке (20, 19, 18...). Когда цикл дойдет до 
числа 13 - остановить весь цикл */

for (let i = 20; i > 10; i--) {
  if (i === 13) {
    break;
  }
  console.log(i);
}

/* При помощи цикла for выведите чётные числа от 2 до 10 включительно */

for (let i = 2; i <= 10; i++) {
  if (i === 3) {
    continue;
  } else if (i === 5) {
    continue;
  } else if (i === 7) {
    continue;
  } else if (i === 9) {
    continue;
  }
  console.log(i);
}

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/* Перепишите цикл  for на вариант с while. 
Результат должен остаться точно таким же. 
Не создайте бесконечный цикл! Иначе браузер может зависнуть. */

for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
}

let i = 2;

while (i <= 16) {
  if (i % 2 === 0) {
    i++;
    continue;
  } else {
    console.log(i);
  }
  i++;
}

/* Заполните массив цифрами от 5 до 10 включительно. 
  Помните, что элементы массива можно сформировать так же, 
  как и обращаться к ним: arr[0] */

/* let arr = [5, 6, 7, 8, 9, 10];
console.log(arr[0]); */

const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
  arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);
return arrayOfNumbers;

/* const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
  result[i] = arr[i];
}

console.log(result);
return result; */

/* Измените данный массив так, чтобы все числа были увеличены в 2 раза, 
а если попадается строка строка - то к ней было добавлено " - done".
Для определения типа данных используйте typeof();
Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ] */

const arr = [10, 20, "Shopping - done", 40, "Homework - done"];

function secondTask() {
  const data = [5, 10, "Shopping", 20, "Homework"];

  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      data[i] = data[i] * 2;
    } else if (typeof data[i] === "string") {
      data[i] = `${data[i]} - done`;
    }
  }

  console.log(data);
  return data;
}

function thirdTask() {
  const data = [5, 10, "Shopping", 20, "Homework"];
  const result = [];

  for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i];
  }

  console.log(result);
  return result;
}

const lines = 5;
let result = "";

for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
