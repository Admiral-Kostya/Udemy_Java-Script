"use strict";

// Цикл while сначала проверяет условие потом выполняет код

/* let count = 0;
while (count < 10) {
  console.log(count);
  if (count === 4) {
    break;
  }
  count++;
}
 */

// Цикл do while сначала  выполняет код один раз а затем проверяет условие.

let count = 10;

do {
  console.log(count);
  count--;
} while (count > 7);

// Цикл for

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//указание шага
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

/* let arr = [5, 7, 9, 1, 0]; */

/* for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] * 2);
} */

/* for (let item of arr) {
  console.log(item * 2);
} */

let obj = {
  name: "Kostya",
  age: 26,
  number: 8099999999,
};

for (let key in obj) {
  //console.log(key); // выводит ключ в консоль
  console.log(obj[key]); // выводит значение в консоль
}

/* const arr = [5, 8, 9, "homework", 8, 10, "test"];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") {
    arr[i] = `${arr[i]} - done`;
  } else if (typeof arr[i] === "number") {
    arr[i] = arr[i] * 2;
  }
}
console.log(arr);
return arr; */

let arr = [5, 6, 7, 8, 9, 10];

arr.forEach(function (item, i, array) {
  console.log(`Элемент: ${item * 2}
   Индекс: ${i}
    Массив: ${array} `);
});
