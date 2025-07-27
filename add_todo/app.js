const ul = document.querySelector('.tasks');

// test
console.log(ul)

const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    // grabbing the task provided by user.
    let task = e.target.task.value;

    // displaying the task on the web.
    // checking whether the task is not empty.
    if (task) {
        let li = document.createElement('li');
        li.textContent = task;
        ul.appendChild(li);
    }

    // trying to make the type bar empty again
    e.target.task.value = "";
})


// what happens when we have not submit.
// observation: there is no way to deal with the form when we have two inputs
// without using the submit input type ..


// what happens when we have the ul inside the form.
// observations: no change detected.


// HOW CAN WE DO A LIVE FILTER.
// 1: we must have a way to check through all the task we currntly have
form.addEventListener('submit', e => {
    e.preventDefault();

    let 
})

