console.log("hello world!");
const tasks = document.querySelector('.tasks');


const addTask = task => {
    const temp = `<li class="todo-task"><p>${task}</p><button class="delbutton"><i class="fas fa-trash"></i></button></li>`;
    tasks.innerHTML += temp;
}

// ---- ADDING TODO -----
const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.stopPropagation();
    e.preventDefault();

    if (form.task.value.trim()) {
        let task = form.task.value.trim();
        addTask(task);
    }

    // clear the form after submission
    form.reset();
})


// ---- DELETING TODO -----
// how do we delete the task
tasks.addEventListener('click', e => {

    if (e.target.parentElement.classList.contains('delbutton')) {
        console.log("Got here .. the del button clicked");
        e.target.parentElement.parentElement.remove();
    }
})



// FILTERING A TODO.
// 1. detect the letter(s) written by the user

const searchToDo = document.querySelector('#search_todo');


// 2. How about we create a function to filter the todos


const filterToDo = (term) => {
    // What will I filter ? tasks..
    // console.log(Array.from(tasks.children));
    Array.from(tasks.children)
        .filter(todo => !(todo.textContent.includes(term)))
        .forEach(todo => todo.classList.add('filtered_out'))

    // here is the issue.. when the user deletes certain letter
    // the classes still remain and the previous filtered remain filtered out
    // even when the key is changed to match them.

    // now let's try to remove the filtered_out class when we don't want it

    Array.from(tasks.children)
        .filter(todo => {
            return  (todo.textContent.includes(term))})
        .forEach(todo => todo.classList.remove('filtered_out'))

    // good to note: HOW DOES THE LAST CHECK HELP MAKE THE TODO REAPPEAR.
    // the last check techincally removes the filtered_out as the
    // user deletes his key search, we  will finallyl be having the search term equalt to "", (empty string) which is technically present (so the include("") will return true.)
    // in every string hence the fitler check will result to true to all the elements and hence return them all
    // and hence on 'all' the filtered_out class will be removed hence they all reappear
};

searchToDo.addEventListener('keyup', (e) => {
    let term = e.target.value;
    console.log(term);
    filterToDo(term);
})


let sample2 = "aimable";
console.log(sample2.includes(""));
console.log(sample2.includes("a"));
console.log(sample2.includes("z"))