// variables in JavaScript are used to store data values. There are three ways to declare a variable: var, let, and const.

// Using var(var is global scoped  or function scoped variable , it can be re-declared and updated)
var name = "Aamna";
console.log(name); // Output: Aamna

// Using let (let is block scoped variable , it can be updated but not re-declared)
let age = 25;
console.log(age); // Output: 25

// Using const (const is block scoped variable , it cannot be updated or re-declared)
const country = "USA";
console.log(country); // Output: USA

//Data types 
// data types are classified into primitive and non-primitive types 
// Here are five common primitive data types in JavaScript

// 1. String (String are used to represent text data and are enclosed in single or double quotes)
let city = "New York";
console.log(city); // Output: New York

// 2. Number (Numbers are used to represent both integer and floating-point numbers)
let temperature = 30.5;
console.log(temperature); // Output: 30.5

// 3. Boolean (Boolean represents a logical entity and can have two values: true or false)
let isSunny = true;
console.log(isSunny); // Output: true

// 4. Undefined (A variable that has been declared but not assigned a value is of type undefined)
let address;
console.log(address); // Output: undefined

// 5. Null (Null is an assignment value that represents no value or no object)
let phoneNumber = null;
console.log(phoneNumber); // Output: null

// Non-primitive data types include Objects, Arrays, and Functions.
// Example of an Object
let person = {
    name: "Aamna",
    age: 25
};
console.log(person); // Output: { name: 'Aamna', age: 25 }

// Example of an Array
let colors = ["red", "green", "blue"];
console.log(colors); // Output: [ 'red', 'green', 'blue' ]

// Example of a Function
function greet() {
    return "Hello, World!";
}
console.log(greet()); // Output: Hello, World!

// operators are used to perform operations on variables and values. Here are some common types of operators in JavaScript:

// 1. Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b); // Addition: Output: 15
console.log(a - b); // Subtraction: Output: 5
console.log(a * b); // Multiplication: Output: 50
console.log(a / b); // Division: Output: 2
console.log(a % b); // Modulus: Output: 0
console.log(a++);   // Increment: Output: 10
console.log(b--);   // Decrement: Output: 5

// 2. Assignment Operators
let c = 20;
c += 5; // c = c + 5
console.log(c); // Output: 25
c -= 5; // c = c - 5
console.log(c); // Output: 20
c *= 2; // c = c * 2
console.log(c); // Output: 40
c /= 4; // c = c / 4
console.log(c); // Output: 10   
c %= 3; // c = c % 3
console.log(c); // Output: 1

// 3. Comparison Operators
console.log(a == b); // Equal to: Output: false
console.log(a != b); // Not equal to: Output: true
console.log(a === b); // Strict equal to: Output: false
console.log(a !== b);   // Strict not equal to: Output: true
console.log(a > b); // Greater than: Output: true
console.log(a < b); // Less than: Output: false
console.log(a >= b); // Greater than or equal to: Output: true
console.log(a <= b); // Less than or equal to: Output: false    

// 4. Logical Operators
let x = true;
let y = false;
console.log(x && y); // Logical AND: Output: false
console.log(x || y); // Logical OR: Output: true
console.log(!x); // Logical NOT: Output: false
console.log(!y); // Logical NOT: Output: true

// 5. String Operators
let str1 = "Hello, ";
let str2 = "World!";
console.log(str1 + str2); // Concatenation: Output: Hello, World!
let str3 = "Hello";
str3 += ", Everyone!";
console.log(str3); // Output: Hello, Everyone!

// loops are used to execute a block of code repeatedly as long as the specified condition is true.
// for loop
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
// output: 0 1 2 3 4 5

// print sum of natural numbers 1 to 10 using for loop
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i; // sum = sum + i
}
console.log(sum); // output: 55

// print multiplication table of 5 using for loop
let num = 5;
for (let i = 1; i <= 10; i++) {
    number = num * i;
    console.log(num + " x " + i + " = " + number);
} // output: 5 x 1 = 5 ... 5 x 10 = 50

// while loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
} // output: 0 1 2 3 4

// print multiplication table of 7 using while loop
let n = 7;
let k = 1;
while (k <= 10) {
    let result = n * k;
    console.log(n + " x " + k + " = " + result);
    k++;
}
// output: 7 x 1 = 7 ... 7 x 10 = 70

// print sum of first 10 natural numbers using while loop
let total = 0;
let m = 1;
while (m <= 10) {
    total += m; // total = total + m
    m++;
}
console.log(total); // output: 55

// do...while loop
let p = 0;
do {
    console.log(p);
    p++;
} while (p < 5);
// output: 0 1 2 3 4

// print multiplication table of 2 using do...while loop
let s = 2;
let t = 1;
do {
    let result = s * t;
    console.log(s + "x" + t + "=" + result);
    t++;
} while (t <= 10);
// output: 2x1=2 ... 2x10=20

// for in loop
let student = {
    name: "Aamna",
    age: 25,
    grade: "A"
};
for (let key in student) {
    console.log(key + ": " + student[key]);
}
// output: name: Aamna age: 25 grade: A

// for of loop
let colorsArray = ["Red", "Green", "Blue"];
for (let color of colorsArray) {
    console.log(color);
} // output: Red Green Blue

// Arrays are used to store multiple values in a single variable. Arrays can hold values of different data types, including numbers, strings, objects, and even other arrays.

// Creating an array
let fruits = ["Apple", "Banana", "Orange"];
let marks = [90, 85, 95, 88];
let mixedArray = ["Hello", 42, true, { name: "Aamna" }, [1, 2, 3]];

console.log(fruits); // Output: [ 'Apple', 'Banana', 'Orange' ]
console.log(marks); // Output: [ 90, 85, 95, 88 ]
console.log(mixedArray); // Output: [ 'Hello', 42, true, { name: 'Aamna' }, [ 1, 2, 3 ] ]
console.log(marks.length); // Output: 4

// Accessing array elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Orange
console.log(marks[2]); // Output: 95

// Array Methods
// array.filter(); // creates a new array with all elements that pass the test implemented by the provided function. e.g., filtering even numbers from an array

let numbersArray = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbersArray.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [ 2, 4, 6 ]

// array.reduce(); // executes a reducer function on each element of the array, resulting in a single output value. e.g., summing all numbers in an array

let sumOfNumbers = numbersArray.reduce((prev, curr) => prev + curr, 0);
console.log(sumOfNumbers); // Output: 21




// Arrow forEach loop is a concise way to iterate over array elements using an arrow function as the callback.
let array = ["Pune", "Bangalore", "Mumbai"];
array.forEach((val, idx) => {
    console.log(val, idx);
});
// Output: Pune Bangalore Mumbai

// for a given array of numbers , print the squareof each number using arrow function and forEach loop

let numbers = [1, 2, 3, 6, 4, 5, 9];
numbers.forEach((num) => {
    console.log(num * num);
});
// Output: 1 4 9 36 16 25 81

// Functions are blocks of code designed to perform a particular task. They are executed when the function is called (invoked).

// Function Declaration
function greet(name) { // this is parameter
    return "Hello, " + name + "!";
}
console.log(greet("Aamna")); // this is argument
//  // Output: Hello, Aamna!

// Function definition with parameters and return value
function add(x, y) {
    return x + y;
}
console.log(add(5, 10)); // Output: 15

// Arrow Function
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(4, 6)); // Output: 24

// create a function using a "function" keyword that takes string as an argument and returns the number of vowels in the string.

function countVowels(str) {
    let count = 0;
    for (const char of str) {

        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            count++;
        }

    } return count;
}

console.log(countVowels("Aamna")); // Output: 3

// perform the same using arrow function
const countVowelsArrow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            count++;
        }
    }
    return count;
}


// create an array of marks and filter the marks of students that scored more than 50
let StudentsMarks = [45, 67, 89, 23, 56, 78, 90, 34];
let filteredMarks = StudentsMarks.filter((mark) =>
    mark > 50);
console.log(filteredMarks); // Output: [ 67, 89, 56, 78, 90 ]

// JavaScript DOM
// GetElementById
let header = document.getElementById('header');
header.innerHTML = 'Welcome to JavaScript DOM Manipulation';
console.log(header); // Output: <div id="header">Welcome to JavaScript DOM Manipulation</div>
// GetElementsByClassName
let items = document.getElementsByClassName('item');
items[0].innerHTML = 'Item 1 Updated';
items[1].innerHTML = 'Item 2 Updated';
console.log(items); // Output: HTMLCollection of elements with class 'item'
// QuerySelector
let main = document.querySelector('#main');
main.style.backgroundColor = 'lightblue';
console.log(main); // Output: <div id="main" style="background-color: lightblue;"></div>
// QuerySelectorAll
let listItems = document.querySelectorAll('.list-item');    
listItems.forEach((item, index) => {
    item.innerHTML = 'List Item ' + (index + 1) + ' Updated';
});
console.log(listItems); // Output: NodeList of elements with class 'list-item'  

// Events in JavaScript

// onclick Event
let button = document.getElementById('Mybutton');
button.onclick = () => {
    alert("Button clicked!");
};

// onmouseover Event
let hoverDiv = document.getElementById('hoverDiv');
hoverDiv.onmouseover = () => {
    hoverDiv.style.backgroundColor = 'lightgreen';
    console.log("Mouse over on div");
};

// onmouseout Event
hoverDiv.onmouseout = () => {
    hoverDiv.style.backgroundColor = 'white';
    console.log("Mouse out from div");
};  

// classes and Objects in JavaScript

// Class Definition
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }}
// Creating an Object
let myCar = new Car("Toyota", "Camry", 2020);
console.log(myCar); // Output: Car { brand: 'Toyota', model: 'Camry', year: 2020 }
// Accessing Object Properties
console.log(myCar.brand); // Output: Toyota
console.log(myCar.model);   // Output: Camry    
console.log(myCar.year); // Output: 2020

// Callbacks in JavaScript
// defining a function that takes another function as a parameter
function fetchData(callback) {
    // Simulating data fetching with a timeout
    setTimeout(() => {
        const data = "Sample Data";
        callback(data); // calling the callback function with the fetched data
    }, 2000);
}

// defining a callback function to handle the fetched data
function handleData(data) {
    console.log("Data received:", data);
}
// calling fetchData with handleData as the callback function
fetchData(handleData); // Output after 2 seconds: Data received: Sample Data   
