"use strict";

if (4 == 9) {
  console.log("Ok");
} else {
  console.log("Error");
}

const num = 100000;

if (num < 49) {
  console.log("Error");
} else if (num > 1000) {
  console.log("too much");
} else {
  console.log("oK");
}

// Тернарный оператор  ( ? )
// Тернарный оператор - оператор, в работе которого учавствуют 3 элемента.

const Num = 50;

//Присваиваем переменной Num 50. Дальше проверяем, если переменная равна 50 - ок, если нет - еррор
// Такая запись позволяет экономить объем места и кода
Num == 50 ? console.log("ok") : console.log("error");
// Первый аргумент ( Num == 50 )
// Второй аргумент ( console.log("ok") )
// Третий аргумент ( console.log("error") )

const word = 51;

// Конструкция, работающая на строгое сравнение
// Точно также можно проверять и строки

switch (word) {
  case 49:
    console.log("Wrong");
    break;
  case 100:
    console.log("Wrong");
    break;
  case 50:
    console.log("Correct");
    break;
  default:
    console.log("Not today");
    break;
}
