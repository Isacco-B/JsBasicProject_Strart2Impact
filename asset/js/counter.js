// This function create new element for the counter app.
function counterBuilder(tag, clas, text) {
    element = document.createElement(tag);
    element.setAttribute('class', clas);
    element.textContent = text 
    return element;
  }


const counterContainer = counterBuilder('div', 'counter-container', '')
document.body.appendChild(counterContainer);

const title = counterBuilder('h1', 'num', '0');
counterContainer.appendChild(title);

const btnContainer = counterBuilder('div', 'btns', '');
counterContainer.appendChild(btnContainer);

const btndecrease = counterBuilder('button', 'dec', '-')
btnContainer.appendChild(btndecrease);

const btnreset = counterBuilder('button', 'reset', 'Reset')
btnContainer.appendChild(btnreset);

const btnincrease = counterBuilder('button', 'inc', '+')
btnContainer.appendChild(btnincrease);


// function for decrease, increase & reser the counter app.
let counter = 0;
let num = document.querySelector('.num');

btndecrease.onclick = decreases;
btnincrease.onclick = increases; 
btnreset.onclick = reset; 

function decreases() {
    counter -- 
    num.innerText = counter
}

function increases() {
    counter ++
    num.innerText = counter

}

function reset() {
    counter = 0
    num.innerText = counter
}