// do while loop
// this kind of loop loops even atleast once despite the condition being true or false


let i = 0
do {
    console.log("What'sup everybody")
    i++;
} while (i < -1);


// what's a switch
let day = 'Friday';

switch(day){
    case "Monday":
        console.log("Today its a monday - work day");
        break;
    case "Friday":
        console.log("Today' its a weekend!");
        break;
    case "Wednasday":
        console.log("Today its a wed -- getting in the middle");
        break;
    default:
        console.log("No day! hhh");
}

console.log("Dealing with array\n")

// what are some of the things I remember that I can do with an array

let arrayFriends = ['James', 'Karake', 'Braza-Alex'];
// check the lenght of the array
// concat the array
// pop and push items from the array
// index through the array => .indexof('item')
// we can check with methods like .includes()
// we can join arrays (also separate themo) .. .join('joiner character')



// FUNCTIONS.
// What's a a function in JS.
// its under object data type..

// function declaration
function greetUser(name) {
    console.log(`Hello ${name}!`);
}

// function calling
greetUser("Aimable");


// check the type of the function
console.log(typeof greetUser)

// Do you remember anyting about function expressiona
//any time you do something like variable = value you are doing an expression.
const greetWorld = function() {
    console.log("Hello world!");
};

greetWorld();

console.log(typeof greetWorld);

// The main diffence between function declaration and expression has to do with hoisting
// which is essential using a function before it's declared ..
// function declarations are not very good as function expression.


// can a function change a globa variable --Yes.
// Why: Because of the Block scope.. concept/

let age = 20;
console.log(age); //age = 20


const changeAnge = function(){
    let age = 21;
    console.log(age);
};

changeAnge(); // age = 21
console.log(age); // age = 21

// ARROW FUNCTIONS (RECENT IN THE LANGUAGE)

const greetMe = () => {
    console.log("Hello You!");
};

greetMe();
console.log(typeof greetMe);

// let's practice some arrow functions from normal functions
const greet = function (){
    return "Hello, world!";
}

// it's arrow functon would look like this..

const greetA = () => "Hello, world!";

// that's a simplified version of this
// const greetA = () => {
//     return "Hello, world!";
// }

console.log(greetA());

// funcion 2.
const bill = function(products, tax) {
    let total = 0;
    for(let i=0, len = products.length; i < len; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

// arrow version --remember the '=>' is what's essential makes an arrow function what it is
const billA = (products, tax) => {
    let total = 0;
    for(let i = 0, len = products.length; i < len; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};


// What's a callback function.
// its simplye a function passed to another fucntion to be called later.
// ex
const myFunc = (callMeBack) => {
    let name = "Aimable";
    callMeBack(name);
};


// Let's create a normal function
const callMeBack = (name) => {
    console.log(name);
};

// now let's use it as a callback
myFunc(callMeBack);

// another way of using callback function
// would be defining a function while it's being passed as an argument
// start by using a naromal function then the arrow function
// with a normal function

myFunc(function(name) {
    console.log(name);
});

// using an arrow function rather (which is the common way to define call back function)
myFunc(name => {
    console.log(name);
});


// FOREACH - array method: help us to loop thorugh the array and do something for each of the items in it.
let people = ['oamr', 'levis', 'gedeon', 'azalie'];

people.forEach(name => {
    console.log(`My name is ${name.toLocaleUpperCase()}, I am a friend of Aimable`);
});


// another example of using a callback function and foreach array method
let languages = ['Python', 'JavaScript', 'C', 'SQL'];
// let's create a call back function to be passed in the foreach method
// Le'ts also anticipate the second argument which forEach provide for us
// which is 'index' of the current item in the array
const helloLanguage = (name, index) => {
    console.log(`${index}: Hello, ${name}!`);
};

// Let's greet every language
languages.forEach(helloLanguage);


// const li = document.querySelector('#hi');
// console.log(li.textContent);

// today's first challenge.
// add friends to the the ul tag in html

const ul = document.querySelector('.friends');

const friends = ['Levis', 'James', 'Alex', 'Rachel', 'Uwase'];

friends.forEach(friend => {
    ul.innerHTML += `<li style="color: blue">${friend}</li>`;
})


// OBJECTs in JS
// how do we create object in js
const friend = {
    name: "Aimable",
    lastName: "Nkurikiyimana",
    age: 22,
    height: 170,
    skinColor: 'Black',
    friendsNames: ['levis', 'Justice', 'Karake', 'Owen'],

    // adding methods
    sayHello: () => {
        console.log("Hello, Aimable");
    },

    // using the this
    greetFriends: () => {
        // lets gree all friends
        friend.friendsNames.forEach(name => {
            console.log(`Hello ${name}`);
        })
    },


    // another function that takes value
    sayHi: (greeting) => {
        console.log(`${greeting}, ${friend.name}`);
    },

    // display info about the object
    displayInfo: () => {
        // becuse this is under the scope of an arrow function
        // this key is going to behave in away we don't intend it to.
        // this will refer to window
        // and if window (global object - context) doesn't have the friendsNames
        // we will be informed that friendsNames is 'undefined'.
        console.log(this.friendsNames);
    },

    // let's correct it with using normal function (But with shorthand)
    // without using the displayinfromatio: function() we can do -->
    displayInformation() {
        console.log(this.friendsNames);
    }
}

friend.displayInfo()        //this behaves not as intended
friend.displayInformation() //this behaves as intended

// how do we reference some of the properties of an object
// using the '.key' and the ['key']
// using .
console.log(friend.name);
console.log(friend.age);
console.log(friend.height);

// using ['key']
console.log(friend['name']);
console.log(friend['age']);
console.log(friend['height']);


// say hello
friend.sayHello();

// calling greetFriends
friend.greetFriends();


friend.sayHi("Wahtsup");


// display info
friend.displayInfo()


// the global context is window.
console.log(this);
window.console.log("Hello");

this.console.log("heyoo");
// but this is context dependant.



// this doesn't behave the same when working with function() and () =>
// when using function() .. this is automatically set to the current object inwhich its being used
// while when using the () => arrow function this remains the window object.
// its important to know becaue that can cause un intended errors.
// there's even a shorthand form of describing methods in object literals .. its what's prefered..

