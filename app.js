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
// const name = 'T\'Pol';
// const age = 29;
// const job = 'Chief Science Officer';
// const city = 'Enterprise';

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
// const numbers = [43,56,33,23,44,36,5];
// const numbers2 = new Array(22,45,33,76,54);
// const fruit = ['Apple', 'Starfruit', 'Snake Fruit', 'Durian'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

// console.log(mixed);

// let val;

// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// val = numbers[0];
// // Insert into array
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(100);

// // // MUTATING ARRAYS
// // numbers.push(250);
// // // ADD TO FRONT
// // numbers.unshift(120);
// // // TAKE FROM END
// // numbers.pop();
// // // TAKE FROM FRONT
// // numbers.shift();
// // // SPLICE VALUES
// // numbers.splice(1,3);
// // // REVERSE ARRAY
// // numbers.reverse();

// // CONCAT ARRAY
// val = numbers.concat(numbers2);

// // Sorting arrays
// val = fruit.sort();
// // val = numbers.sort();

// // Use the compare function
// // val = numbers.sort(function(x,y){
// //   return x - y;
// // })

// // // Reverse sort
// // val = numbers.sort(function(x,y){
// //   return y - x;
// // });


// // Find 
// function under50(num){
//   return num < 50;
// };

// function over50(num){
//   return num > 50;
// };

// val = numbers.find(under50);
// val = numbers.find(over50);

// console.log(numbers);
// console.log(val);

// OBJECT LITERALS
// const person = {
//   firstName: 'T\'Pol',
//   lastName: 'Vulcanness',
//   age: 29,
//   email: 'tpol@enterprise.com',
//   hobbies: ['fitness', 'meditation', 'mathematics'],
//   address: {
//     city: 'Shi\'Kahr',
//     planet: 'Vulcan'
//   },
//   getBirthYear: function(){
//     return 2022 - this.age;
//   }
// }

// let val;

// val = person;
// // Get specific value
// val = person.firstName;
// val = person['lastName'];
// val = person.age;
// val = person.hobbies[2];
// val = person.address.city;
// val = person.getBirthYear();


// console.log(val);

// const people = [
//   {name: 'Seven of Nine', age: 19},
//   {name: 'Nurse Chapel', age: 24},
//   {name: 'Six of Cylons', age: undefined}
// ];

// for(let i = 0; i < people.length; i++){
//   console.log(people[i].name + ' is a cool chick');
// }

// let val;

// const today = new Date();
// let birthday = new Date('6-4-1974 3:33:33');
// birthday = new Date('June 4 1974');
// birthday = new Date('6/4/74');


// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);

// console.log(birthday);

// Conditional if else statements
const id = 100;

// // EQUAL TO
// if(id == 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NO EQUAL TO
// if(id != 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE AND TYPE
// if(id === 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO VALUE AND TYPE
// if(id !== 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// TEST IF UNDEFINED
// if (typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`)
// } else {
//   console.log('NO ID');
// }

// GREATER OR LESS THAN
// if(id > 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// IF ELSE
const color = 'red';

// if (color === 'red'){
//   console.log('Color is red');
// } else if (color === 'blue'){
//   console.log('Color is blue')
// } else {
//   console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS

const name = 'T\'Pol';
const age = 29;

// if (age > 0 && age < 12){
//   console.log(`${name} is a child`);
// } else if (age >= 13 && age <=19){
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an adult`);
// }

// // OR || 
// if (age < 16 || age > 65){
//   console.log(`${name} cannot run in race`);
// } else {
//   console.log(`${name} is registered for the race`);
// }

// // TERNARY OPERATOR -> expression bodied method
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// SWITCH statements
// switch(color){
//   case 'red': 
//     console.log('Color is red');
//     break;
//   case 'blue': 
//     console.log('Color is blue');
//     break;
//   default:
//     console.log('Color is not red or blue');
//     break;
// }

// switch(new Date().getDay()){
//   case 0: 
//     day = 'Sunday'
//     break;
//   case 1: 
//     day = 'Monday'
//     break;
//   case 2: 
//     day = 'Tuesday'
//     break;
//   case 3: 
//     day = 'Wednesday'
//     break;
//   case 4: 
//     day = 'Thursday'
//     break;
//   case 5: 
//     day = 'Friday'
//     break;
//   case 6: 
//     day = 'Saturday'
//     break;
// }

// console.log(`Today is ${day}`);

// FUNCTION DECLARATIONS
// function greet(firstName = 'Pretty', lastName = 'Girl'){
//   // if(typeof firstName === 'undefined'){firstName = 'Pretty'}
//   // if(typeof lastName === 'undefined'){lastName = 'Girl'}
//   // console.log('Zdravstvuyte!');
//   return `Здравствуйте ${firstName} ${lastName}!`;
// }

// console.log(greet());

// FUNCTION EXPRESSIONS
// const square = function(x = 3){
//   return x * x;
// };

// console.log(square(8));

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// (function(){
//   console.log('IIFE ran . . .');
// })();

// (function(name){
//   console.log(`Привет . . . ${name}`);
// })('Six of Cylons');

// PROPERTY METHODS -> when a function is put inside and object!!!
// const todo = {
//   add: function() {
//     console.log('Add todo . . . ');
//   },
//   edit: function(id){
//     console.log(`Edit todo ${id}`);
//   }
// }

// todo.delete = function(){
//   console.log('Delete todo . . . ');
// }

// todo.add();
// todo.edit(22);
// todo.delete();

// FOR LOOP
// for (let i = 0; i < 10; i++){
//     if(i === 2){

//     console.log(`Number ${i} is my favorite number`);
//     continue;
//   }

//   if(i === 5){
//     console.log('Stop the loop');
//     break;
//   }
//   console.log(`Number ${i}`);
// }

// WHILE LOOP
// let i = 100;

// // while (i < 10){
// //   console.log(`Number ${i}`);
// //   i++;
// // }

// do {
//   console.log(`Number ${i}`);
//   i++;
// }
// while (i < 10);

// LOOP THROUGH ARRAY
 const cars = ['Dodge', 'Tesla', 'Ferrari', 'Mercedes'];

//  for (let i = 0; i < cars.length; i++){
//   console.log(i + ' ' + cars[i]);
//  }

// FOREACH
// cars.forEach(function(car, index, array){
//   console.log(`${index} ${car}`);
//   console.log(array);
// });

// MAP
// const users = [
//   {id:1, name:'Seven of Nine'},
//   {id:2, name:'Nurse Chapel'},
//   {id:3, name:'T\'Pol'},
//   {id:4, name:'Six of Cylons'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);


// FOR IN LOOP
// const user = {
//   firstName: 'T\'Pol',
//   lastName: 'Vulcanness',
//   age: 29
// }

// for (let x in user){
//   console.log(`${x} : ${user[x]}`);
// }

// ALERT
// window.alert('Привет,  Мир');

// PROMPT 
// const input = prompt();
// alert(input);

//CONFIRM
// if(confirm('Are you sure?')){
//   console.log('Yes');
// } else{
//   console.log('No');
// }

// let val;

// // Outer height and width
// val = window.outerHeight;
// val = window.outerWidth;

// // Scroll points 
// val = window.scrollY;
// val = window.scrollX;

// // Location objects 
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// // Redirect
// // window.location.href = 'http://google.com';
// // window.location.reload();

// // HISTORY object
// // window.history.go(-2);
// // window.history.length;

// // Navigator object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;

// console.log(val);

