
const button = document.getElementById('rollbtn');
const display1 = document.getElementById('randomNumber1');
const display2 = document.getElementById('randomNumber2');
const display3 = document.getElementById('randomNumber3');
const min = 1;
const max = 10;
let randomNumber;

rollbtn.onclick = function() {
    randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
    display1.textContent = "Random number: " + randomNumber1;
    randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
    display2.textContent = "Random number: " + randomNumber2;
    randomNumber3 = Math.floor(Math.random() * (max - min + 1)) + min;
    display3.textContent = "Random number: " + randomNumber3;
}