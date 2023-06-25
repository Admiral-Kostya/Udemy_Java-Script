function myTest(num1, num2) {
  if (typeof num1 === "string" && typeof num2 === "number") {
    console.log("Hello, world!");
  } else {
    console.log("Wrong");
  }
}
myTest("Hello", "25");

function arr(value) {
  let arrow = [value - 1, value, value + 1];
  return arrow;
}
let arrResult = arr(3);
console.log(arrResult);

function test(baza, progress) {
  if (typeof progress != "number" || progress <= 0) {
    console.log(baza);
  } else {
    console.log(baza + progress);
  }
}
test(5, 9);

function calcSum(numOne, numTwo) {
  let numSum = numOne + numTwo;
  return numSum;
}

let numResult = calcSum(6, 9);

console.log(`Summ: ${numResult}`);
