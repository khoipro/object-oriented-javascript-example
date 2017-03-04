// Object can be change value by assign.

var h1 = document.getElementById('header');
console.log(h1.innerHTML);
h1.innerHTML = "Javascript changed it!";

// 2. Create variables and access them
var person = {
  name: 'Lauren',
  isGirl: true,
  "full name": "Lauren King" // special string
}

// Can access variable
console.log(person.name);
console.log(person.isGirl);
console.log(person['full name']);

// Adding method to object

// Function ui.js
function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};

// begin function roll

var dice = {
  sides: 6,
  roll: function () {
    // this in this case referal to `dice`
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

// Test
var contact = {
  firstName: "Andrew",
  lastName: "Chalkley",
  fullName: function() {
    console.log(this.firstName + " " + this.lastName);
  }
}