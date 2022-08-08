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
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'bon-jour-item'

// Add attribute
li.setAttribute('title', 'Bon jour Item');

// Create text node and append
li.appendChild(document.createTextNode('Bon jour le Monde!'));

// Create new link element
const link = document.createElement('a');

// Add classes
link.className = "delete-item secondary-content";

// Add icon html
link.innerHTML = '<i class = "fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);