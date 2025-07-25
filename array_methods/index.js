
// ---------- FILTER METHOD ----------
const scores = [10, 20, 35, 40, 50, 60, 10];

// how can we use filter

const returnedValues = scores.filter((num) => {
    return num % 2 != 0;
})

// console.log(scores);
// console.log(returnedValues);

// exercies #1

// check the data and store only users who are premium in a separate array.
const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true},
];


// how do we do that .
// check if the premium property of the user is true ..
//     // console.log(typeof user);
//     // console.log(user.premium);
//     return user.premium;
// });

// the most minimlaist style
const premiumUsers = users.filter(user => user.premium);

// console.log(premiumUsers)


// ---------- MAP METHOD ----------
// map takes each time in the array does something with it to produce a new value
// and stores that new value

// again let's use our score.
// lets create another array that hase doubled value for each item

// const doubledScores = scores.map((score) => {
//     return score * 2;
// });

// minimalistic version
const doubledScores = scores.map(score => score * 2);

// console.log(scores);
// console.log(doubledScores)


// exercies #2
const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50},
]

// create a new array with all the prices over 30 cut in half

const saleProducts = products.map((product) => {
    if (product.price > 30) {
        return {name: product.name, price: product.price / 2};
    } else {
        return product;
    }
})

// console.log(products);
// console.log(saleProducts);


// -------- REDUCE METHOD (the accumulator)--------
// it reduce the array by adding all the item in an array (sort of like accumulating)

const scoresSample = [10, 20, 40, 70, 90, 30, 100];

// let's try to add up all scores in the array above 100
const accumulated = scoresSample.reduce((total, score, index) => {
        // initialize total
        // if (total != 0 && index == 1) {
        //     total = 0;
        // }

        if (score > 90) {
            console.log(index);
            return total += score;
        }
        else {
            return total;
        }
},0);

// NOTE: not adding an initial value led to unpexted results..
// ALWAYS: 1. MAKE SURE YOU UNDERSTAND THE ORDER OF PASSING ARGUMENTS,
//         2. PROVIDE AN INITIAL VALUE WHEN USING REDUCE

console.log(scoresSample)
console.log(accumulated)



// exercises #3
// using the scoresTwo..
// now how many numbers are above 50; total count

const scoresTwo = [10, 20, 75, 40, 50, 60, 10, 90];
// count should be 3.

const above50Count = scoresTwo.reduce((count, score) => {
    if (score > 50) {
        return count++;
    } else {
        return count;
    }
}, 0)

console.log(above50Count);
