const allP = document.querySelectorAll('p');

console.log(allP);

// what do we want to do
// we want to give different classes to the ptag
// depending on whether they have error or success in the text
// how do we do that ?
// loop through
// check if the word erro is there or success
// and if so then add the class accordingly

allP.forEach(p => {
    // console.log(p.innerText)
    if (p.innerText.includes('error')){
        console.log("Error");
        p.classList.add('error');
    } else if (p.innerText.includes('success')){
        console.log("Success");
        p.classList.add('success');
    }
})

