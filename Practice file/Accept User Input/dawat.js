//username = window.prompt("What is your username?");

let username; 

document.getElementById("mysubmit").onclick = function() {
    username = document.getElementById("mytext").value;
    //console.log(username);
    document.getElementById("print").textContent = `Hello ${username}!`;
}