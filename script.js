
window.onload = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTaskToUI(task));
};

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();
  if (task === '') return;
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  addTaskToUI(task);
  taskInput.value = '';
}

function addTaskToUI(task) {
  const li = document.createElement('li');
  li.textContent = task;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '&times;';
  deleteBtn.onclick = () => deleteTask(li, task);

  li.appendChild(deleteBtn);
  document.getElementById('taskList').appendChild(li);
}

function deleteTask(li, task) {
  li.remove();
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
