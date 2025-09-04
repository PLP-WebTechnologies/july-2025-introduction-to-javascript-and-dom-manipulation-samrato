// ===============================
//  Part 1: Variables & Conditionals
// ===============================
let userName = "Willington";
let currentHour = new Date().getHours();
let greetingMessage = "";

// Conditional logic to set greeting based on time
if (currentHour < 12) {
  greetingMessage = "Good Morning, " + userName + "!";
} else if (currentHour < 18) {
  greetingMessage = "Good Afternoon, " + userName + "!";
} else {
  greetingMessage = "Good Evening, " + userName + "!";
}

// DOM interaction: show greeting
document.getElementById("greeting").textContent = greetingMessage;


// ===============================
//  Part 2: Functions
// ===============================

// Function 1: Add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Function 2: Format result with a message
function displayResult(result) {
  return "The sum is: " + result;
}

// Event listener for sum button
document.getElementById("sumBtn").addEventListener("click", function () {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  // If inputs are valid numbers
  if (!isNaN(num1) && !isNaN(num2)) {
    let sum = addNumbers(num1, num2);
    document.getElementById("sumResult").textContent = displayResult(sum);
  } else {
    document.getElementById("sumResult").textContent = "⚠️ Please enter valid numbers!";
  }
});


// ===============================
// Part 3: Loops
// ===============================

let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

// Example 1: for loop
function showFruits() {
  let fruitList = document.getElementById("fruitList");
  fruitList.innerHTML = ""; // Clear list before adding
  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    fruitList.appendChild(li);
  }
}

// Example 2: while loop (console countdown)
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}

// Event listener to show fruits on button click
document.getElementById("listBtn").addEventListener("click", showFruits);


// ===============================
// Part 4: DOM Interactions
// ===============================

// 1. Change background color on button click
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.body.classList.toggle("highlight"); // Toggles CSS class
});

// 2. Change text content dynamically
document.getElementById("toggleBtn").addEventListener("click", function () {
  let msg = document.getElementById("message");
  if (msg.textContent.includes("change")) {
    msg.textContent = "You changed my color!";
  } else {
    msg.textContent = "Click the button to change my color!";
  }
});

// 3. Create a new element on the fly
let newPara = document.createElement("p");
newPara.textContent = "JavaScript DOM manipulation works!";
document.body.appendChild(newPara);
