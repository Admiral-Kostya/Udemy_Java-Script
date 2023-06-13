"use strict";

let number = 5; /* объявляю переменную и присваиваю ей значение (5) */
const leftBorderWidth = 1;

number = 10; //number
console.log(number);

let myName = "Kostya"; //string
console.log(myName);

let heIsMarried = true; //boolean

/* console.log(something); */ //null

let und; //undefined
console.log(und);

//Объекты
const object = {
  hisName: "kostya", //ключ + значение
  age: 26, //ключ + значение
  isMarried: true, //ключ + значение
};
console.log(object["isMarried"]); // обращение к определенному свойству объекта
console.log(object.age); // обращение к определенному свойству объекта

//Массив не является отдельным типом данных, это частный случай объекта
//Массивы используются для хранения данных которые идут строго по порядку
/* let arr = ["plumb.png", "orange.jpg", 6, "logo.svg", {}, []];
console.log(arr[0]); */

const arr = [1, 2, 3];
console.log(arr[2]);

/* const obj = { a: 1, b: 2 }; */
const obj = {
  Anna: 500,
  Alice: 800,
};

const arrObj = {
  a: "a",
  1: "b",
  2: "c",
};

/* arrObj.b = "1234"; */
arrObj["b"] = "1234";
console.log(arrObj["b"]);
console.log(arrObj.b);

const storeName = "Marvel";
let storeDescription = {
  budget: 10000,
  employess: ["Kostya", "Lev", "Andrii"],
  products: {
    shirt: 400,
    mask: 50,
  },
  open: true,
};

/* alert("hello"); */

/* const result = confirm("Are you here?");
console.log(result); */

//команда позволяющая пользователю напечатать ответ, все ответы от пользователей приходят в виде строк
/* const answer = prompt("Вам есть 18?", "18");
console.log(typeof answer); */

//создание массива для постановки ряда вопросов для пользователя.
//создаем массив данных answers, обращаемся к первым трем элементам массива и прописываем команду prompt
const answers = [];
/* answers[0] = prompt("What is your name", "");
answers[1] = prompt("What is your surname", "");
answers[2] = prompt("How old are you?", "");
document.write(answers); */
console.log(typeof answers);

//ИНТЕРПОЛЯЦИЯ
//канкотинация - складывание нескольких строк
const category = "toys";
console.log(`https://someurl.com/${category}`);

const user = "Kostya";
alert(`Hello,${user} `);

// Операторы в Java Script

console.log("arr" + "-object");
console.log(4 + "5");

let incr = 10,
  decr = 10;

/* incr++; //инкримент - увеличение на единицу; постфиксная форма записи
decr--; */ //декримент - уменьшения значения на единицу; постфиксная форма записи
++incr; //префиксная форма записи
--decr; //префиксная форма записи

console.log(incr);
console.log(decr);

console.log(5 % 2);

console.log(2 * 4 == 8); //оператор сравнения.
console.log(2 * 4 === "8"); //строгое стравнение.

/* && - логический оператор "И";
|| - логический оператор "ИЛИ";
! - оператор отрицания - обращает значение в обратное */

const isChecked = true,
  isClosed = true;

console.log(isChecked && isClosed); //оба аргумента должны быть правдивыми

const isDone = true,
  isMade = false;

console.log(isDone || isMade); //хотя бы один аргумент должен быть правдивым

const water = false,
  meal = true;

console.log(water || !meal);
