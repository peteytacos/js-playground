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

//This code for the switch statementd didn't work, had a problem with the even listener. Maybe I'll try it live instead of local.

// const select = document.querySelector("select");
// const para = document.querySelector("p");

// select.addEventListener("change", setWeather);

// function setWeather() {
//   const choice = select.value;

//   switch (choice) {
//     case "sunny":
//       para.textContent =
//         "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
//       break;
//     case "rainy":
//       para.textContent =
//         "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
//       break;
//     case "snowing":
//       para.textContent =
//         "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
//       break;
//     case "overcast":
//       para.textContent =
//         "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
//       break;
//     default:
//       para.textContent = "";
//   }
// }

//

//
// let clickCount = 0;
// $('#button-variables-number').addEventListener('click', () => {
//   console.log('I was pressed ${++clickCount} times by now');
// });

// let clickCount = 0;
// document.querySelector('#button-variables-number').addEventListener('click', () => {
//   console.log(`I was pressed ${++clickCount} times by now`);
// });

// import $ from 'jquery';

// let clickCount = 0;
// $('#button-variables-number').on('click', () => {
//   console.log(`I was pressed ${++clickCount} times by now`);
// });


//fizzbuzz attempt 1
// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// for (let i = 1; i <= answer; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } if (i % 3 === 0) {
//     console.log("fizz");
//   }
//   if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

//fizzbuzz second attempt
// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// for (let i = 1; i <= answer; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   }
//   else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

//button alert js
// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   alert("Hello World");
// });

const fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  console.log(x);
}