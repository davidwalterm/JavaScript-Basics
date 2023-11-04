console.log("I like pizza!");
console.log("It's really good!");

window.alert("I REALLY LOVE PIZZA!");

//This is a comment
/*
    This
    is
    a
    multi
    line
    comment
*/
// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let firstName = "Bro";
let age;
age = 21;
age = age + 1;
let student = true;
let notStudent = false;
age = age + 1;
let stringAge = "21";
stringAge = stringAge + 1;

console.log("Hello",firstName);
console.log("You are",age,"years old");
console.log("Enrolled:",student);
console.log(notStudent);
console.log(stringAge);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

/* 
    arithmetic expression is a combination of...
    operands (values, variables, etc.)
    operators (+ - * %)
    that can be evaluated to a value
    ex. y = x + 5;
*/

let numberOfStudents = 20;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
let extraStudents = numberOfStudents % 3;

numberOfStudents += 1;
numberOfStudents -= 1;
numberOfStudents *= 2;
numberOfStudents /= 2;

let result = 1 + 2 * (3 + 4);

console.log(extraStudents);
console.log(numberOfStudents);
console.log(result);

/*
        operator precedence
        1. parenthesis ()
        2. exponents 
        3. multiplication & division
        4. addition & substraction
*/

// How to accept user input

// EASY WAY with a window prompt

let username = window.prompt("What's your name?");
console.log(username);

// DIFFICULT WAY HTML textbox