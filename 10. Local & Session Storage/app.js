// Set Local Storage Item
// localStorage.setItem('name', 'Akhil');
// localStorage.setItem('age', '20');

// Set Session Storage Item
// sessionStorage.setItem('name', 'Arjun');

// Remove from the Storage
// localStorage.removeItem('name');

// Get from the storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit',function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task Saved');

  e.preventDefault();
});


const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
})