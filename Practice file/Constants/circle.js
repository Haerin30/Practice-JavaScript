const PI = 3.14159;
let radius;
let circumference;

//radius = window.prompt("What is the radius of the circle?");  
document.getElementById("mysubmit").onclick = function() {
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    console.log(`The circumference of the circle is ${circumference}`);
    document.getElementById("result").textContent = `The circumference of the circle is ${circumference}`;
}
//radius = Number(radius);

//circumference = 2 * PI * radius;

//console.log(`The circumference of the circle is ${circumference}`);