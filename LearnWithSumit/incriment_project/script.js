const button = document.querySelector('#button');
const display = document.querySelector('#display');
let number = 0;


button.addEventListener("click", () => {
    number++;
    display.textContent = number;
})