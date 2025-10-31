// Primitive datatypes

/* 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt */

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 123456789098765432n // Now it becomes BigInt


// Reference or Non primitive datatypes

/* Array, Objects, Functions */

const heroes = ["Shaktimaan", "Naagraj", "Doga"]
console.log(typeof heroes); // object; It states that Array is an object

let myObj = {
    name: "Vansh",
    age : 20
}
console.log(typeof myObj); // object

const myFunction = function() {
    console.log("Hello World");
    
}
console.log(typeof myFunction); // function; In more detail we can say it's type is Object function

// Note : We can easily figure out that JS is dynamically typed programming language

// *********************************************************************************************************************

// Stack => Primitive; Heap => Non Primitive

let myYoutubeName = "ChaiaurCode";

let anotherName = myYoutubeName
anotherName = "chaiaurcode.com"

console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email : "user@google.com",
    upi : "user@axl"
}

let userTwo = userOne;

userTwo.email = "vansh@google.com"
console.log(userOne);
console.log(userTwo);
