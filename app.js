const button = document.querySelector('.container button');
const body = document.querySelector('body');
const label = document.querySelector('.container span');


//just executes the event
button.addEventListener('click', () => {
    applyRandomColor();
});


//returns a string with a random color
const generateRandomColor = () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb( ${red}, ${green}, ${blue})`
}

//apply the random color
const applyRandomColor = () => {
    color = generateRandomColor();
    body.style.backgroundColor = color;
    label.textContent = color;
}


//auto generates a random color when page is loaded
applyRandomColor();



