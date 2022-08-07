// // Log to console
// console.log('Bon jour le monde!');
// console.log(123);
// console.log(true);
// var greeting = "Priviet!"
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});

// console.error('This is an error!');
// console.clear();
// console.warn('This is a warning!');
// console.time('Hello');
//   console.log('Hello world!')
//   console.log('Hello world!')
//   console.log('Hello world!')
//   console.log('Hello world!')
//   console.log('Hello world!')
// console.timeEnd('Hello');

// // var name = 'Nurse Chapel';
// // console.log(name);

// // console.log(name);

// var firstName = 'Seven';
// var lastName = 'Of Nine';
// console.log(firstName + ' ' + lastName);

// // LET
// // let name1;
// // name1 = 'T\'Pol Vulcanness';
// // console.log(name1);
// // name1 = 'Major';
// // console.log(name1);

// // CONST 
// const name = 'Alita';
// console.log(name);
// const greeting1 = 'Ahlan wa Sahlan';
// console.log(greeting1);
// const person = {
//   name: 'Beckett',
//   age: '24'
// }

// console.log(person);

// person.name = 'Sara';

// console.log(person);

// const numbers = [1,2,3,4,5];
// numbers.push(6);
// console.log(numbers);

// PRIMITIVE

// String
// const name = 'Seven of Nine';
// // Number
// const age = 19;
// // Boolean
// const hasKids = false;
// // Null
// const car = null;
// // Undefined
// let test;
// // Symbol
// const sym = Symbol();

// // REFERENCE TYPES
// // Array
// const hobbies = ['movies', 'fitness'];
// // Object literal 
// const address =  {
//   city: 'Puerto Galera',
//   state: 'Phillipines'
// }

// // Dates 
// const today = new Date();
// console.log(today);
// console.log(typeof address);

// let val;

// // Number to string
// val = String(42);
// val = String(4+4);

// // Boolean to string
// val = String(true);

// // Date to string
// val = String(new Date());

// // Array to string 
// val  = String([1,2,3,4]);

// // toString()
// val = (5).toString();

// val = (true).toString();

// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('Hello');
// val = Number([1,2,3]);

// val = parseFloat('100.30');

// // Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));

// const val1 = String(5);
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);
// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.max(2,33,3,4,-56,1);
// val = Math.random();  // Decimal

// val = Math.random() * 20;
// // val = Math.floor(Math.random() * 20);

// console.log(val);
// console.log(Math.round(val));

// Append

// firstName = 'Seven';
// lastName = 'Of Nine';

// let val;

// val = 'Seven ';
// val += 'Of Nine';


// // Escaping
// val = "T'Pol Vulcanness";
// val = 'T\'Pol Vulcanness\' cat';

// val = firstName.concat(' ',  lastName);

// val = firstName[0];

// val = firstName.indexOf('v');


// const str = 'Hello my name is T\'Pol';
// val = str.split(' ');
// val = str.replace('T\'Pol', 'Seven of Nine');

// val = str.includes('foo');

// console.log(val);


// TEMPLATE LITERALS
const name = 'T\'Pol';
const age = 29;
const job = 'Chief Science Officer';
const city = 'Enterprise';

// // // WITHOUT TEMPLATE STRINGS (es5)
// // html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job
// // + ' </li><li>City: ' + city + ' </li></ul>';
// // document.body.innerHTML = html;

// // html = '<ul>' +
// //        '<li>Name: ' + name + '</li>' +
// //        '<li>Age: ' + age + '</li>' +
// //        '<li>Job: ' + job + '</li>' +
// //        '<li>City: ' + city + '</li>'
// //        '</ul>'; 

// function hello(){
//   return 'hello';
// }
// // WITH TEMPLATE STRINGS (aka Literals)
// html = `
//   <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${2 + 2}</li>
//     <li>${hello()}</li>
//     <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//   </ul>
// `;

// document.body.innerHTML = html;

// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Starfruit', 'Snake Fruit', 'Durian'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

console.log(mixed);

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(100);

// // MUTATING ARRAYS
// numbers.push(250);
// // ADD TO FRONT
// numbers.unshift(120);
// // TAKE FROM END
// numbers.pop();
// // TAKE FROM FRONT
// numbers.shift();
// // SPLICE VALUES
// numbers.splice(1,3);
// // REVERSE ARRAY
// numbers.reverse();

// CONCAT ARRAY
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
// val = numbers.sort();

// Use the compare function
// val = numbers.sort(function(x,y){
//   return x - y;
// })

// // Reverse sort
// val = numbers.sort(function(x,y){
//   return y - x;
// });


// Find 
function under50(num){
  return num < 50;
};

function over50(num){
  return num > 50;
};

val = numbers.find(under50);
val = numbers.find(over50);

console.log(numbers);
console.log(val);