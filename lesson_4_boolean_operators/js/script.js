"use strict";

// Логическое [ И ] - &&, обозначает правду, если все верно
// 5 сущностей, которые всегда будут false:
// -- 0;
// -- пустая строка [];
// -- null;
// -- undefined;
// -- NaN.

/* const hamburger = false;
const fries = true;

if (hamburger && fries) {
  console.log("Я сыт");
} else {
  console.log("Я голоден");
}

console.log(hamburger && fries);  */ //возвращает логический тип данных

const hamburger = 2;
const fries = 1;

if (hamburger === 3 && fries /* или fries === 1 */) {
  console.log("true");
} else {
  console.log("false");
}

// Оператор ( И ) всегда возвращает первое ложное значение, если оно есть. На нем прекращается работа кода
// Оператор ( И ) возвращает значение последнего аргумента, если все значения верны.

console.log(1 && 0 && 5);
console.log(1 && 2 && 3 && 0 && 5);

// Логическое [ ИЛИ ] - || , проверка на хотя бы одно верное значение

const tesla = 0,
  bmv = 0,
  volvo = 1;

if (tesla || bmv || volvo) {
  console.log("Cars present");
} else {
  console.log("false");
}

const tomatto = 3;
const carrot = 0;
const potato = 3;
const orange = 4;

if ((tomatto === 3 && carrot === 2) || (potato === 3 && orange === 1)) {
  console.log("Ok!");
} else {
  console.log("error");
}

// Что выведет в консоль?

console.log((tomatto === 3 && carrot === 2) || (potato === 3 && orange));

console.log(NaN || 2 || undefined); // 2

console.log(NaN && 2 && undefined); // NaN

console.log(1 && 2 && 3); // 3

console.log((!1 && 2) || !3); // false

console.log(25 || (null && !3)); // 25

console.log(NaN || null || !3 || undefined || 5); // 5

console.log(NaN || (null && !3 && undefined) || 5); // 5

console.log((5 === 5 && 3 > 1) || 5); //true

//Выполняется ли условие?

/* const ham = 3;
const frie = 3;
const cola = 0;
const nuggets = 2;

if ((ham === 3 && cola) || (frie === 3 && nuggets)) {
  console.log("Done!");
} */ // Done!

// Выполняется ли условие?

/* let ham;
const frie = NaN;
const cola = 0;
const nuggets = 2;


if (ham || cola || frie === 3 || nuggets) {
   console.log('Done!')
} */ // Done!

/* Переменная hamburger задана через let, так как const подразумевает 
какое-либо начальное значение. С const будет ошибка, можете проверить.
А без значения там undefined, напоминаю  */

// Выполняется ли условие?

let ham; //undefined
const frie = NaN;
const cola = 0;
const nuggets = 2;

if ((ham && cola) || (frie === 3 && nuggets)) {
  console.log("Done!");
} else {
  console.log("Condition isn't met");
}
