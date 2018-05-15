// Write a program that asks the user for his first name and his last name.
// The program then displays them in one sentence.

const userName = prompt('What is your First and Last name?')
alert('Well hello there, ' + userName)

// Write a program that asks the user for a raw price.
const rawPrice = Number(prompt("Provide a raw price")); // nb's type is number
console.log(rawPrice)
// After that, it calculates the corresponding final price using a VAT rate of 20.6%.
const vat = 0.206
let vatRate = function (rawPrice, vat) {
  return rawPrice * 0.206
}
alert("Your VAT rate is " + vatRate)

// Write a program that asks for a temperature in Celsius degrees,
// then displays it in Fahrenheit degrees.

let cels = Number(prompt('Put your temperature in Celsius below'))

let fTemp = function (cels){
  return cels * 9/5 + 32
}
alert("Your temperature in Fahrenheit is " + fTemp)


// Observe the following program.
// Add the necessary code to swap the values of variables number1 and number2

let number1 = 5
let number2 = 3
// muahaha, thank you, E6
const number1 = 3
const number2 = 5

console.log(number1); // Should show 3
console.log(number2); // Should show 5
