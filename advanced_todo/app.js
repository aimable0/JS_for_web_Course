console.log("hello world!");


// ---- ADDING TODO -----
// Let's create a sort of storage for our todos
let todosList = [];
const form = document.querySelector('form');
const ul = document.querySelector('.tasks');

form.addEventListener('submit', (e) => {
    e.stopPropagation();
    e.preventDefault();
    let taskName = form.taskName.value;
    if (taskName) {
        // let's append the task
        todosList.push(taskName);
        console.log(todosList);
    }
});

todosList.forEach((task) => {
    console.log(task)
});


// DISPLAYING TASK ON THE WEB
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // grabbing the task provided by user.
    let task = e.target.task.value;


    if (task) {

        const li = document.createElement('li');
        const p = document.createElement('p');
        const button = document.createElement('button');
        const i = document.createElement('i');

        li.setAttribute('class', 'todo-task');
        p.textContent = task;
        button.setAttribute('class', 'delbutton');
        i.setAttribute('class', 'fas fa-trash');

        button.appendChild(i);
        li.appendChild(p);
        li.appendChild(button);
        ul.appendChild(li);
    }

    e.target.task.value = "";
})



// ---- DELETING TODO -----
