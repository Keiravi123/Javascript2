alert("Hellou"); 

const MAX_LOGIN_ATTEMPTS = 3;

let attempts = 2; 
if (attempts < MAX_LOGIN_ATTEMPTS) {
    console.log("Try logging in." );
} else if (attempts === MAX_LOGIN_ATTEMPTS) {
    console.log("Last attempt!");
} else {
    console.log("Account locked.") ;
}

let counter =0;
while (counter <5) {
    console.log("Counter is at: " +counter);
    counter++;
}

for (let index = 0; index <5; index++) {
    console.log("Loop iteration number: " + index);
}

function greetPerson(Camila) {
    console.log("Hello, " + Camila);
}
greetPerson("Camila");

function calculateSum(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
console.log(calculateSum(5, 7));

function multiplyNumbers(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

let petTypes = ["Cat", "Dog", "Rabbit", "Parrot", "Fish"];
console.log(petTypes[0]);
for (let index = 0; index < petTypes.length; index++) {
    let pet = petTypes[index];
    console.log("Pet type" + (index + 1) + ": " + pet);
}

document.getElementById("demo").innerText = "Hello Wordl!";

document.getElementsByClassName("example-class")[0].style.color = "pink";

let imgTag = document.getElementsByTagName("img")[0];
imgTag.setAttribute("alt", "Example Image");

let newAttr = document.createAttribute("data-custom");
newAttr.value = "customData";
imgTag.setAttributeNode(newAttr);

document.getElementsById("demo").style.fontSize = "20px";
document.getElementById("demo"). innerText = "Hello World!";

document.getElementsByClassName("example-class")[0].style.color = "blue";



document.getElementById("demo").style.fontSize = "20px"; 
document.getElementById("clickButton").onclick = function () {
    alert("Button clicked!");
    } ;
    let timer;

    function initialize() {
        const dynamicText = document.getElementById('dynamicText');
        dynamicText.innerText = "Timer is not running.";
    }
    
    document.getElementById('changeStyleBtn').onclick = function() {
        const title = document.getElementById('main-title');
        title.style.color = 'red';
        title.style.fontSize = '2em';
        title.setAttribute('data-changed', 'true'); // Adding new attribute
    };
    
    function highlightText() {
        const description = document.querySelector('.description');
        description.classList.toggle('highlight'); // Add/Remove highlight on mouse over
    }
    
    document.getElementById('startTimerBtn').onclick = function() {
        clearInterval(timer); // Clear any existing timers
        let count = 0;
        timer = setInterval(() => {
            count++;
            document.getElementById('dynamicText').innerText = `Timer running: ${count} seconds`;
        }, 1000);
    };
    
    document.getElementById('stopTimerBtn').onclick = function() {
        clearInterval(timer);
        document.getElementById('dynamicText').innerText = "Timer is stopped.";
    };
    