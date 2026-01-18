console.log("Script Running");


const shift = (sprite, col) => (col <= 7 ? sprite.style.setProperty("grid-column", col) : null);

let pepperoni_step = 1;
let veggie_step = 1;
let bbq_step = 1;



const pepperoniButton = document.querySelector("#pepperoni-button");
const veggieButton = document.querySelector("#veggie-button");
const bbqButton = document.querySelector("#bbq-button");

const pepperoniScooter = document.querySelector("#pepperoni-scooter");
const veggieScooter = document.querySelector("#veggie-scooter");
const bbqScooter = document.querySelector("#bbq-scooter");

const winnerDisplay = document.querySelector("#winner")


function movePepperoni() {
    pepperoni_step++;
    shift(pepperoniScooter, pepperoni_step);
    checkWInner("Pepperoni", pepperoni_step);
}


function moveVeggie() {
    veggie_step++;
    shift(veggieScooter, veggie_step);
    checkWinner("Veggie", veggie_step);
}


function checkWinner(name, step) {
    bbq_step++;
    shift(bbq_step);
    checkWinner("BBQ", bbq_step);
}


function checkWinner(name, step) {
    if (step >= 7) {
        winnerDisplay.textContent = name + "delivery wins! 🍕";
        pepperoniButton.disabled = true;
        veggieButton.disabled = true;
        bbqButton.disabled = true;
    }
}


pepperoniButton.addEventListener("click", movePepperoni);
veggieButton.addEventListener("click", moveVeggie);
bbqButton.addEventListener("click", moveBBQ);