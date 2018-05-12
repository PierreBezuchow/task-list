//UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load event listeners

loadEventListeneres();

function loadEventListeneres (){
  // Add task event
  form.addEventListener('submit', addTask);
  //Remove task event
  taskList.addEventListener('click', removeTask);
  //Clear tasks event
  clearBtn.addEventListener('click', clearTasks);
}

//Add task
function addTask(e){
  if(taskInput.value.trim() === ''){ //trim() will trim the spaces
    alert('Add a task!');

  }else{ //without else it would still create empty task

  //Create li element
  const li = document.createElement('li');
  //Create class
  li.className = 'collection-item';
  //Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //Create link element
  const link = document.createElement('a');
  //Create class
  link.className = 'delete-item secondary-content'; //secondary item class was added strictly because in materialize you can use that if you want something to the right

  //Add icon html (Materialize)
  link.innerHTML = '<i class = "fa fa-remove"></i>';
  //Append the link to li
  li.appendChild(link);

  //Append the li to ul
  taskList.appendChild(li);

  //Clear input
  taskInput.value = '';
  }


  e.preventDefault();
}

//Remove task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();
    }
    
  }

}