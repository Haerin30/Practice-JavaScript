const decrease = document.getElementById("decrement");
const increase = document.getElementById("increment");
const reset = document.getElementById("reset");
const number = document.getElementById("number");

let count = 0;

increment.onclick = function() {
    count++;
    number.textContent = count;
}

decrement.onclick = function() {
    count--;
    number.textContent = count;
}

reset.onclick = function() {
    count = 0;
    number.textContent = count;
}