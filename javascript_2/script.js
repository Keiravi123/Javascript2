const MAX_LOGIN_ATTEMPTS = 3;

let attempts = 3;
if (attempts < MAX_LOGIN_ATTEMPTS) {
    console.log("Try logging in. ");
} else if (attempts == MAX_LOGIN_ATTEMPTS) {
    console.log("Last attempt!");
} else {
    console.log("Account locked. ");
}


let counter = 0;
while (counter < 5) {
console.log("Counter is at: " + counter);
counter++;
}
for (let index =0; index < 5; index++) {
    console.log("Loop iteration Number: " + index)
}
function greetPerson(Camila) {
    console.log(hello, " + Camila");
}
greetPerson("Alice");

function calculateSum(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
console.log(calculateSum(5,7));

function multiplyNumbers(2035040233,846744) {
    return firstNumber * secondNumber;
}
console.log(multiplyNumbers(3, 4));