// what do I want to achieve
// to console.log (the usernmae providee
// and test the passwrod againt the pattern

const form = document.querySelector('form');

console.log(form.username.value);


// create a function that checks if the password is valid
// pattern : password must have letters 6-8 and include a number



const passwordIsValid = (pattern, password) => {
    return pattern.test(password);
}

form.addEventListener('submit', (e) => {
    // e.preventDefault();
    // console.log(e);
    console.log(`Username: ${form.username.value}`);
    console.log(`Password: ${form.userpassword.value}`);


    // password check (password must contain @)
    const pattern = /[a-zA-Z]{5,}/;
    const patternTwo = /@|!|#/;
    const patternThree = /[0-9]{1,}/;

    const password = form.userpassword.value;
    if (passwordIsValid(pattern, password) && passwordIsValid(patternTwo, password) && passwordIsValid(patternThree, password) && password.length >= 8){
        console.log("Password is Valid");
    } else {
        console.log("Password is Invalid");
    }

    // check for '@' in the password
    if (passwordIsValid(patternTwo, password)) {
        console.log("The password contains some special character symbol");
    } else {
        console.log("The password doesn't contain the special character symbol");
    }


    // check for numbers
    if (passwordIsValid(patternThree, password)) {
        console.log("Passowrd contains: numbers");
    } else {
        console.log("password doesn't contain numbers");
    }


    // check for dollar sign
    const patternFour = /\$/;
    console.log(password.search(patternFour));
    if (password.search(patternFour)) {
        console.log("The password contains the '$' sign at index", password.search(patternFour))
    } else {
        console.log("The password contains no '$ sign' ");
    }

})


// Lets try a live check.
// if the password of the user is right we put it in green and the borders are made green


// Let's put the KeyboardEvent to use
// let's console.eveyr key pressed

const userPassword = document.querySelector('#userpassword');

userPassword.addEventListener('keyup', (e) => {
    console.log("key clicked: ", e.key)
        // password check (password must contain @)
    const pattern = /[a-zA-Z]{1,}/;
    const patternTwo = /@|!|#/;
    const patternThree = /[0-9]{1,}/;


    let passwordhint = document.querySelector('.passwordhint');
    const password = form.userpassword.value;
    if (passwordIsValid(pattern, password) && passwordIsValid(patternTwo, password) && passwordIsValid(patternThree, password) && password.length >= 8){
        console.log("Password is Valid");
        userPassword.setAttribute('class', 'valid');
        if (passwordhint) {
            passwordhint.remove();
        }

    } else {
        userPassword.setAttribute('class', 'invalid');

        // now let's give a short hint to why the password is invalid.
        passwordhint.textContent = "Hint: Password must contain atleast 8character with numbers and special character";
        console.log("Password is Invalid");
        e.preventDefault();
    }
})

// how can we remove the error and success on password after
// something that I will look into..



