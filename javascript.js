// let name, admin;

// name = "John";

// admin = name;

// alert(admin);

//

// let ourPlanetName = "Earth";

// let currentUserName = "John";

//

// console.log(23 + 97);

//

// let vacationSpots = ["tokyo", "boston", "los angeles", "sydney"];

// console.log(vacationSpots);

// let vacationSpots = ["tokyo", "boston", "los angeles", "sydney"];

// console.log(vacationSpots);

//

// let x = 0.2 + 0.1;

// console.log(x);

//

// let a = 10;

// console.log(a);

//

// function favoriteAnimal(animal) {
//   return animal + " is my favorite animal!";
// }

// console.log(favoriteAnimal("Goat"));

//

// alert("not a number" / 2);

//

//call an alert with an embedded variable using backtics

// let name = "John";

// // embed a variable
// alert(`Hello, ${name}!`); // Hello, John!

//

//boolean values

// let isGreater = 4 > 1;

// alert(isGreater); // true (the comparison result is "yes")

//

// typeof operator

// console.log(typeof alert);

//Or operator

// if (1 || 0) {
//   // works just like if( true || false )
//   alert("truthy!");
// }

//Logical operators

// let userName = prompt("Who's there?", "");

// if (userName === "Admin") {
//   let pass = prompt("Password?", "");

//   if (pass === "TheMaster") {
//     alert("Welcome!");
//   } else if (pass === "" || pass === null) {
//     alert("Canceled");
//   } else {
//     alert("Wrong password");
//   }
// } else if (userName === "" || userName === null) {
//   alert("Canceled");
// } else {
//   alert("I don't know you");
// }

//

// I asked ChatGPT if it could do the above, with the spec that I got from the course, and it did it perfectly. Question w/spec:
// Help me write javascript, here is the spec: Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

// Ask for a login
// let login = prompt("Who's there?", "");

// if (login === "Admin") {
//   // Ask for a password
//   let password = prompt("Password?", "");

//   if (password === "TheMaster") {
//     alert("Welcome!");
//   } else if (password === "" || password === null) {
//     alert("Canceled");
//   } else {
//     alert("Wrong password");
//   }
// } else if (login === "" || login === null) {
//   alert("Canceled");
// } else {
//   alert("I don’t know you");
// }

//
