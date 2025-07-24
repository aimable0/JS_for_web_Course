// ---- MANIPULATING THE DOM -----
console.log(document)

// how do we select an tag in the html

// in many cases
// console.log(document.querySelector('h1'));

const h1 = document.querySelector('h1');

console.log(h1);


// this getElementby() returns an html collection. (except the id)
const h1Cpy = document.getElementsByTagName('ul');
console.log(h1Cpy);


const li = document.getElementById('him');
console.log(li);

const ul = document.getElementsByClassName('friends');
console.log(ul);

const liOne = document.getElementsByClassName('her');
console.log(liOne);


// selecting with a selector copied from chrom web dev tools
const specialLi = document.querySelector('body > ul > li.her');
console.log(specialLi);



// selecting all pi
const pTagArray = document.querySelectorAll('p');  //this returns a nodelist
console.log(pTagArray);


// changing the text content
// let's change the text uwase to Fillete
const uwaseLi = document.querySelector('li.her');
uwaseLi.innerText = 'Fillete';

// let's add another li tag to our friends ul
const newFriend = `<li style="color:green"><b>Jimmy Jones<b></li>`;

// grab friends
const friends = document.querySelector('.friends');

console.log(friends);

friends.innerHTML += newFriend;

// -------- GETTING AND SETTING ATTRIBUTES ----------



// today's challenge - programm onclick (FAILED)
const btn = document.querySelector('#btn');

console.log(btn);


btn.addEventListener(onclick, (Event, error) => {
    console.log("I was clicked");
})


// Second challenge .. try changing thea ttribute of a
const a = document.querySelector('a');
console.log(a);

// this has helped me get the attribute
console.log(a.getAttribute('href'));

// set the attribute
a.setAttribute('href', 'https://www.gty.com');

console.log(a.getAttribute('href'));

// let's style uwase to look purple and bold

const uwase = document.querySelector('.special-person');
console.log(uwase);

// let's make her bold
// I need the attribute and I need to set to styles bold
uwase.setAttribute('style', 'font-weight: bold; font-size: 28px; color: green');
// What's the biggest problem with changing styles using setAttribute :
// the problem is that it overides what was set before.

// How do we solve that we use the 'style' property and change different styles
// examples below

console.log(uwase.style)

// let's double the pixel
uwase.style['font-size'] = 48;
uwase.style['color'] = 'blue';


// how can we remove some of the attributes ; set their values to ""
uwase.style['font-size'] = "";
uwase.style['color'] = "";
uwase.style['font-weight'] = "";

// ADDING AND CHANGING CLASSES
// today's challenge -- create to class error and succes and alternate them on a p
