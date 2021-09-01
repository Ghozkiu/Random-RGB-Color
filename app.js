const button = document.querySelector('.container button');
const body = document.querySelector('body');
const label = document.querySelector('.container span');


button.addEventListener('click', () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb( ${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
    label.textContent = color;
});



