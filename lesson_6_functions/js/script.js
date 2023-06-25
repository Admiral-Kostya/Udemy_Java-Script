"use strict";

// имя функции должно начинаться с глагола с припиской того над чем выполняется действие
// внутри () используются данные которые функция будет использовать внутри себя
//

function showFirstMessage(text) {
  console.log(text);
}
// когда функция запустится, она возьмет текст из вызова функции, передаст её в аргумент функции
// и дальше выведет в консоль
showFirstMessage("Hello World!"); // вызов функции, без вызова функция работать не будет

// если объявить переменную внутри функции, то снаружи она не будет доступна
// функция может брать глобальную переменную и использовать её внутри себя
// ЗАМЫКАНИЕ ФУНКЦИИ - это сама функция со всеми внешними переменными, которые ей доступны

let num = 20; // глобальная переменная
function showFirstMessage(text) {
  console.log(text);
  let num = 10;
  console.log(num); // локальная переменная
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a, b) {
  return a + b;
  /*  console.log("sdvcsdvs") */ // return позволяет вернуть код внутри функции за её пределы. На return работа функции заканчивается.
}
console.log(calc(4, 5));
console.log(calc(5, 5));
console.log(calc(6, 5));

// function declaration такую функцию можно вызвать перед её объявлением
function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

// function expression  такую функцию можно вызвать только после её объявления
const logger = function () {
  console.log("Hello");
};
logger();

//стрелочная функция
const Calc = (a, b) => {
  return a + b;
};

/* const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
  console.log(curr * amount);
}
convert(500, eurCurr);
convert(500, usdCurr); */

const usdCurr = 28;
const discount = 0.9;
function convert(amount, curr) {
  return curr * amount;
}

function promotion(result) {
  console.log(result * discount);
}

promotion(convert(500, usdCurr));
