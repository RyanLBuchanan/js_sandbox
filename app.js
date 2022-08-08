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

