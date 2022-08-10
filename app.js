// EXAMINING THE DOCUMENT OBJECT

// let val;

// val = document;
// val = document.all[0];
// val = document.all.length;
// val = document.head;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links[0];
// val = document.links[0].className;
// val = document.links[0].classList;

// val = document.images;

// val = document.scripts;

// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);

// DOM Selectors for Single Elements
// getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#999';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // document.getElementById('task-title').style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Text';

// taskTitle.innerHTML = '<span style="color:gold">Task List</span>';


// // document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'blue';
// document.querySelector('li:nth-child(3)').style.color = 'goldenrod';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(4)').textContent = 'Элло, мир, товарищ!';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Priviet!';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Priviet!';

// // Convert HTML collection into an array
// lis = Array.from(lis);

// // lis.reverse();

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Priviet`;
// });

// console.log(lis);

// document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
//   item.textContent = `${index}: 你好世界!`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//   li.style.background = "#f4f4f4";
// });

// for(let i = 0; i < liEven.length; i++){
//   liEven[i].style.background = 'gray';
// }

// console.log(items);

// // let val;

// // const list = document.querySelector('ul.collection');
// // const listItem = document.querySelector('li.collection-item:first-child');

// // val = listItem;
// // val = list;

// // // Get child nodes
// // val = list.childNodes;
// // val = list.childNodes[0].nodeName;
// // val = list.childNodes[1].nodeType;

// // // TYPE OF NODES
// // // 1 - Element
// // // 2 - Attribute (deprecated)
// // // 3 - Text node
// // // 8 - Comment
// // // 9 - Document itself
// // // 10 - Doctype

// // // Get children elements nodes
// // val = list.children;
// // val = list.children[0];
// // list.children[1].textContent = "Guten tag!";

// // // Children of children
// // list.children[3].children[0].id = "test-link";
// // val = list.children[3].children[0];

// // // First child
// // val = list.firstChild;
// // val = list.firstElementChild;

// // // Last child
// // val = list.lastChild;
// // val = list.lastElementChild;

// // // Count child elements
// // val = list.childElementCount;

// // // Get parent node
// // val = listItem.parentNode;
// // val = listItem.parentElement;
// // val = listItem.parentElement.parentElement;

// // // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// // Get previous sibling
// // val = listItem.previousSibling;
// // val = listItem.previousElementSibling;


// console.log(val);

// Create element
// const li = document.createElement('li');

// // Add class
// li.className = 'collection-item';

// // Add id
// li.id = 'bon-jour-item'

// // Add attribute
// li.setAttribute('title', 'Bon jour Item');

// // Create text node and append
// li.appendChild(document.createTextNode('Bon jour le Monde!'));

// // Create new link element
// const link = document.createElement('a');

// // Add classes
// link.className = "delete-item secondary-content";

// // Add icon html
// link.innerHTML = '<i class = "fa fa-remove"></i>';

// // Append link into li
// li.appendChild(link);

// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

// REPLACE ELEMENTS
// Create an element
// const newHeading = document.createElement('h2');

// // Add id
// newHeading.id = 'task-title';

// // New text node
// newHeading.appendChild(document.createTextNode('T\'Pol\'s List'));

// // Get the old heading 
// const oldHeading = document.getElementById('task-title');

// // Parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading)

// // console.log(newHeading);

// // Remove element 
// const lis = document.querySelectorAll('li');

// const list = document.querySelector('ul');

// // Remove list item
// lis[0].remove();

// // Remove child element
// list.removeChild(lis[3]);

// // CLASSES & ATTRIBUTES
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// // CLASSSES
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('TEST');
// link.classList.remove('TEST');
// val = link;

// // ATTRIBUTES
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', 'Google');
// val = link.hasAttribute('title');
// val = link.getAttribute('title');

// val = link;

// console.log(val);

// document.querySelector('.clear-tasks').addEventListener('click', 
// function(e){
//   console.log('Привет, мир!')

//   // e.preventDefault();
// });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
//   console.log('Щелкнул!');

//   let val;

//   val = e;

//   // Event target element
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;

//   e.target.innerText = "Здравствуйте!";

//   // Event type
//   val = e.type;

//   // Timestamp
//   val = e.timeStamp;

//   // Coordinates of event relative to the window
//   val = e.clientY;
//   val = e.clientX;

//   // Coordinates of event relative to the element
//   val = e.offsetY;
//   val = e.offsetX;


//   console.log(val);
//   // e.preventDefault();
// }

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // CLICK
// // card.addEventListener('click', runEvent);

// // // DOUBLE CLICK
// // card.addEventListener('dblclick', runEvent);

// // MOUSEDOWN
// // card.addEventListener('mousedown', runEvent);
// // card.addEventListener('mouseup', runEvent);

// // MOUSE ENTER
// // card.addEventListener('mouseenter', runEvent);
// // card.addEventListener('mouseleave', runEvent);

// // // MOUSE OVER and OUT
// // card.addEventListener('mouseover', runEvent);
// // card.addEventListener('mouseout', runEvent);

// // MOUSE MOVE
// card.addEventListener('mousemove', runEvent);

// // Event handler
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// // Clear input
// taskInput.value = '';

// // form.addEventListener('submit', runEvent);

// // KEYDOWN
// // taskInput.addEventListener('keydown', runEvent);
// // KEYUP
// // taskInput.addEventListener('keyup', runEvent);
// // KEYPRESS
// // taskInput.addEventListener('keypress', runEvent);
// // FOCUS
// // taskInput.addEventListener('focus', runEvent);
// // // BLUR
// // taskInput.addEventListener('blur', runEvent);
// // // Cut
// // taskInput.addEventListener('cut', runEvent);
// // Input
// // taskInput.addEventListener('input', runEvent);
// // CHANGE
// select.addEventListener('change', runEvent);

// function runEvent(e){
//   console.log(`EVENT TYPE ${e.type}`);

//   console.log(e.target.value);

  // heading.innerText = e.target.value;

  // // Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
// }

// EVENT BUBBLING
// document.querySelector('.card-title').addEventListener('click',
// function(){
//   console.log('card-title');
// }); 

// document.querySelector('.card-content').addEventListener('click',
// function(){
//   console.log('card-content');
// }); 

// document.querySelector('.card').addEventListener('click',
// function(){
//   console.log('card');
// }); 

// document.querySelector('.col').addEventListener('click',
// function(){
//   console.log('col');
// }); 


/** <--------------- DELETE LIST ITEM -------------------------------------------> */

// EVENT DELEGATION event on parent and going down opposite of bubbling
const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  // console.log(e.target);
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }
  
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
    }
  }

  /** <--------------- DELETE LIST ITEM -------------------------------------------> */

  // SET LOCAL STORAGE ITEM
  // localStorage.setItem('name', 'T\'Pol');
  // localStorage.setItem('age', '29');

  // SET SESSION STORAGE ITEM
  // sessionStorage.setItem('name', 'Six of Cylons');

  // REMOVE FROM LOCAL STORAGE
  // localStorage.removeItem('name');

  // GET FROM STORAGE
//   const name = localStorage.getItem('name');
//   const age = localStorage.getItem('age');

// // CLEAR LOCAL STORAGE
// localStorage.clear();

//   console.log(`Well . . . hi there! My name is ${name} and, er . . . um, I am ${age}.`);

// document.querySelector('form').addEventListener('submit', 
// function(e){
//   const task = document.getElementById('task').value;

//   let tasks;

//   if(localStorage.getItem('tasks') === null){
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.push(task);

//   localStorage.setItem('tasks', JSON.stringify(tasks));

//   alert('Task saved');

//   console.log(tasks);

//   e.preventDefault();
// });

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function(tasks){
//   console.log(tasks);
// });