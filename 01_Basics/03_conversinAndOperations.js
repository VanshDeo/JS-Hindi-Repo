let score = "33abc";

// const { score } = req.body // We dont know if the data coming from frontend is what datatype

console.log(typeof score);
console.log(typeof(score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN

score = null;
console.log(Number(score)); // 0

score = undefined;
console.log(Number(score)); // NaN

// "33" => 33
// "33abc" => NaN; type => Number
// true => 1; false => 0
// null => 0
// undefined => NaN
// string => NaN

let isLoggedIn = 1;

let boooleanIsLoggedIn = Boolean(isLoggedIn)
console.log(boooleanIsLoggedIn);


// 1 => true; 0 => false
// "" => false; "<Anything in string>" => true

let num = 33;
console.log(String(num));
console.log(typeof String(num));


// ************************************************ Operations *******************************************************

let value = 3;
let negValue = -value;
console.log(negValue);


let str1 = "Hello";
let str2 = " Vansh"

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// In the above example, if string is first then other values will be treated as string and string concatenation will occur
// If number is first then other values with number type is added and then if a string is concatenated the before result will be converted to string and then concatenated

console.log(+true); // 1; Since + is added then JavaScript thinks that it is a number and true gets converted to 1
// console.log(true+); // Gives an error

console.log(+ ""); // 0
console.log(+ "t"); // NaN

let num1, num2, num3;
num1 = num2 = num3 = 4 // Every variable gets 4 as a value

let gameCounter = 100;
// console.log(gameCounter++); // 100; Postfix increment operator
// console.log(++gameCounter); // 101; Prefix increment operator





 

