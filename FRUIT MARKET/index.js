const MANGO_ICON = "🥭";
const ORANGE_ICON = "🍊";
const APPLE_ICON = "🍏";


const display = document.querySelector(".display");
const mangoDisplay = document.getElementById('mango-display');
const orangeDisplay = document.getElementById('orange-display');
const appleDisplay = document.getElementById('apple-display');
const mango = document.getElementById('mango-btn');
const orange = document.getElementById('orange-btn');
const apple = document.getElementById('apple-btn');

let mangoes = 0;
let oranges = 0;
let apples = 0;

function addMango(){
    mango++;
    display.textContent += Mango_ICON;
    mangoDisplay.textContent = mangoes;
}
function addOrange(){
    orange++;
    display.textContent += ORANGE_ICON;
    orangeDisplay.textContent = oranges;
}
function addApple(){
    apple++;
    display.textContent += APPLE_ICON;
    appleDisplay.textContent = apples;
}

mango.addEventListener('click', addMango);

orange.addEventListener('click', addOrange);

apple.addEventListener('click', addApple);