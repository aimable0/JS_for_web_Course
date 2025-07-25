const form = document.querySelector('form');

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    let score = 0;

    if (e.target.q1Answer.value === 'Car'){
        score += 25;
        console.log("q1: correct");
    }
    if (e.target.q2Answer.value === "8"){
        score += 25;
        console.log("q2: correct");
    }
    if (e.target.q3Answer.value === 'Clock'){
        score += 25;
        console.log("q3: correct");
    }
    if (e.target.q4Answer.value === 'Swim'){
        score += 25;
        console.log("q4: correct");
    }
    console.log(score);


    // ANIMATING OUR SCORE DISPLAY
    window.scrollTo(0,0);

    // Let's animate our score..
    const scoreP = document.querySelector('.score');
    scoreP.style.display = 'block';

    let i = 0;
    const scoreAnimator = setInterval(() => {
        scoreP.textContent = `You've got ${i}%`;
        if (score === i) {
            clearInterval(scoreAnimator);
        }
        i++;
    }, 10);


    // NORMAL WAY OF DISPLAYING SCORE.
    // displaying the score
    // const scoreP = document.querySelector('.score');

    // if (score == 100) {
    //     scoreP.textContent = `You've got it all ${score}%`;
    //     scoreP.textContent += "   Congratulations!";
    // } else {
    //     scoreP.textContent = `You got ${score}% !`;
    // }

    // use window' method to scroll the page up to the beginning of the page
    // but what's 'window' object: its the global object that stores everything we use from methods to properties in front end js
})


// can you naively try other windwo methods ..
// le'ts try setTimeout ..
// setTimeout(() => {
//     window.alert("Thank you for taking our quiz.");
// }, 500);
// The function above takes the arrowfunction to fire after some milliseconds when the page is loaded.


// can you try using a method like setInterval

// window.setInterval(() => {
//     console.log("Hello guyes!")
// }, 1000)

// that runs forever ..
// how do we stop it ...
// we can use something like
// window.cleatInterval or clearInterval ..


// example

// let i = 0
// const timer = setInterval(() => {
//     console.log("Hello people");
//     i++;
//     console.log(i);
//     if (i === 5) {
//         console.log("stopping ..");
//         clearInterval(timer);
//     }
// }, 1000);


// now using this knowledge how can we animate our score ?
