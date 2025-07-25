const button = document.querySelector('button');
const popUpWrapper = document.querySelector('.popup-wrapper');

button.addEventListener('click', (e) => {
    popUpWrapper.style['display'] = 'block';

    e.stopPropagation(); //to make sure there's no un intended propagation
})

const close = document.querySelector('.close');

close.addEventListener('click', () => {
    popUpWrapper.style['display'] = 'none';
})


// let's close the popup by clicking anywhere
popUpWrapper.addEventListener('click', () => {
    popUpWrapper.style['display'] = 'none';
})