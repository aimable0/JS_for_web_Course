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

// using an arrow function rather
myFunc((name) => {
    console.log(name);
});