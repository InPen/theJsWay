// program that displays your name and age
console.log("Maria Inés")
console.log(27)

// program that displays the results of adding,
// subtracting, multiplying and dividing 6 by 3

// Addition
function add(a, b) {
  return a + b
}
const addSolution = add(6,3)
console.log('6 + 3 = ' + addSolution)

// Subtraction
function subtract(pizza, macAndCheesels) {
  return pizza - macAndCheesels
}
const subtractSolution = subtract(6,3)
console.log('6 - 3 = ' + subtractSolution)

// Multiplication
function multiply(j, i) {
  return j * i
}
multiply(6,3)
console.log('6 * 3 = ' + multiply(6,3))

// Division
function divide(pb, jay) {
  return pb/jay
}
divide(6, 3)
console.log('6 / 3 = ' + divide(6,3))

// Values prediction
console.log(4 + 5) //adds 4+5=9
console.log("4 + 5") //just a string that is displayed as 4 + 5
console.log("4" + "5") //multiplies 4*5 and returns 45 on terminal
