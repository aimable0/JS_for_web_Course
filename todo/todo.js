
const ul = document.querySelector('ul');

const clickMeButton = document.querySelector('button');

clickMeButton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = "New task";
    ul.prepend(li);
    console.log("New task added succesffuly");
})


const tasks = document.querySelectorAll('li');


// but how can we try to add a new li tag on the ul
// let's use the button we have


// EVENT BUBBLING AND DELEGATION.
// What's event bubbling: its when the vent propagates from the child to the parent.
// wich could cause some callback function on the parent side to fire when they are
// linked to the event that has propagated

// ex:
// let's create a child event and make it bubble to run the parent's call back function

// now let' stop the propagation

// tasks.forEach(task => {
//     task.addEventListener('click', e => {
//         console.log("Hey I was clicked");

//         // now let's stop the bubbling
//         e.stopPropagation();
//     });
// });


// EVENT DELEGATION

ul.addEventListener('click', e => {
    console.log(e.target);

    if (e.target.tagName === 'LI') {
        e.target.remove();
    } else {
        console.log(e.target);
    }
});
