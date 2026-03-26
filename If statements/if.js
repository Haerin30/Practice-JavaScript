//boolean
let isCrispy = true;

if (isCrispy) {
    console.log("Hello Crispy!");
} else {
    console.log("You are not Crispy!");
}


let age = 101;
let haslicense = true;

if (age >= 16 && age < 100) {

    console.log("You are old enough to drive.");
    
    if (haslicense) {
        console.log("You have a license, you can drive.");
    } else {
        console.log("You don't have a license, you cannot drive.");
    }

} else if (age <= 0) { 
    console.log("Invalid age.");
} else if (age >= 100)  {
    console.log("You are too old to drive.");
}
 else {
    console.log("You are not old enough to drive.");
}

