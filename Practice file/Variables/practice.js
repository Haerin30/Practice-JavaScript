let fullname = "Crispy Fry"
let age = 19
let student = true

document.getElementById("p1").textContent = 'My name is ' + fullname;
document.getElementById("p2").textContent = 'I am ' + age + ' years old.';
document.getElementById("p3").textContent = 'It is ' + student + ' that I am a student.';
// or
document.getElementById("p4").textContent = `My name is ${fullname}`;
