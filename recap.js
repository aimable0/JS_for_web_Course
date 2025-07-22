// alert("Hello world!. This is from my separate JS file.");


 console.log("Hello, I am felling sleepy");

 console.log("But who am I");

 let firstName = "Aimable";
 let lastName = "Nkurikiyimana";

 console.log("I am,", firstName + ' ' + lastName);

 console.log("How long is my name?");

 let nameLength = firstName.length;
 console.log(nameLength, "characters");


//  some of the string methods

let sampleString = "I am the sample";

console.log(sampleString.toLocaleUpperCase());

console.log(sampleString.toLowerCase());

let aaa = "AAA";
let aaaConverted = aaa.replaceAll('A', 'b');
console.log(aaaConverted);
// console.log("AAA => " , "with the string method")

// looking for index of something
let name = "Aimable";
console.log("The index of 'e' in name: ", name, "is", name.indexOf('e'));


// create a small function that checks the domain of the email

let email = "n.aimable@alustudent.com";

function checkLastEmailPart(email) {
    let pointIndex = email.lastIndexOf('.');
    let lastPart = email.slice(pointIndex + 1, -1);
    console.log(lastPart);
}

checkLastEmailPart(email);


let author = "James Iradukunda";
let age = 22;
let title = "Who Am I";



let combination = `${author} ${age} ${title}`;
console.log(combination);




// html template
// how can we use template strings or string literals
// let html = `
//     <h1>${title}</h1>
//     <h2>By: ${author}</h2>
//     <p>age: ${age}</p>
// `;

// console.log(html);


// working with arrays
// what are arrays = just collection of values..

let array_1 = ['Aimable', 'Didier', 'Jeanluc', 'Mary', 'Carine', 'Uwase', 'Ngirimpuhwe'];


// some of the useful methods

// one for checking the total length of the array
console.log(array_1.length);

// one for joining the values of the array
console.log(array_1.join("-"));


// concatinating (adding more to the array) -
let result = array_1.concat(['James', 'Alex']);
console.log(result);


// some more: .push (adds an item and returns the new length of the array)

// push adds the item permenanenlty to the array
console.log(array_1.push('JMv Starbou'));

// but how do we remove an item from the array
// using .pop - this removes the last item from the array
// and returns it

// let's add another item to our array

console.log(array_1.push('UwaGen'));
// let's remove it

console.log(array_1.pop());


// where can we use booleans
// ex: in testing functions like include

let friends = ['Levis', 'Omar', 'Justice', 'Bush'];

// let's test if omar is in friends
console.log(`is Omar in ${friends}: `, friends.includes('Omar'));
console.log(`is Karake in ${friends}: `, friends.includes('karake'));


// null and undefined
let a = null;
let b = a + 10;

let c;

console.log(a, b, c);

console.log(Boolean(-100));
console.log(true);

// loose vs strict (all about comparing datatypes)

let num = 10;
console.log(num == '10'); //loose
console.log(num === '10'); //strict
console.log(num === 10);

// strict is great to use to avoid un intended implicit typeconversion before comparison
// which could result into unexpected behaviours


// but how do we do explicit typeconversion and get to know what type of data are we dealing with
// well, we can use "type of variable" --

console.log('\n');
let number = Number('100');
console.log(number);
console.log(typeof number);


console.log('\n');
let stringNumber = String(100);
console.log(stringNumber);
console.log(typeof stringNumber);


// CHAPTER 3
//  /?\ we don't add the ; on the end of the loop
for(let i=0; i < 5; i++) {
    console.log(i);
}


// use for loop and string literals to do dispaly names on a page

const names = ['Levis', 'Karake', 'James', 'Alex'];

for(let i= 0, len = names.length; i < len; i++){
    console.log(names[i]);
}

let html = `
    <ul>`;
// let's use template string and html variable
for(let i=0, len= names.length; i < len; i++){
    html += `
        <li>current name: ${names[i]}</li>
    `;
}
html += `</ul>`

console.log(html);

// while loop

// this runs forever
// let active = true;
// let timer = 0;
// while(active)
// {
//     timer++;
//     if (timer == 10){
//         active=false;
//     }
// }

let i = 0;
while (i < 5 ){
    console.log(`Hello: ${i}`)
    i++;
}
