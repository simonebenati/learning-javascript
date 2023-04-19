'use strict';

//Functions
function clearBoard () {
    score = 0;
    scores = [0, 0]
    scorePlayer1.textContent = '0';
    scorePlayer2.textContent = '0';
    dice.classList.add('hidden');
    currentScore1.textContent = '0';
    currentScore2.textContent = '0';
    if(activePlayer === 1){
        document.querySelector('.player--1').classList.remove('player--active');
        document.querySelector('.player--0').classList.add('player--active');
        activePlayer = 0;
    }
}
function rollDices () {
    let random = Math.trunc(Math.random() * 6) + 1
    dice.src = `dice-${random}.png`
    dice.classList.remove('hidden')
    if(random !== 1){
        score += random;
        document.getElementById(`current--${activePlayer}`).textContent = score;
        console.log(score,scores)
    }
    else {
        score = 0;
        document.getElementById(`current--${activePlayer}`).textContent = score;
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        activePlayer = (activePlayer === 0) ? 1 : 0;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
        
    }
}

function hold () {
    if ((scores[activePlayer] + score) < 10) {
        scores[activePlayer] += score
        console.log(`active player ${activePlayer+1}`, scores[activePlayer])
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
        score = 0;
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = (activePlayer === 0) ? 1 : 0;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
    }
    else if ((scores[activePlayer] + score) >= 10){
        console.log(`scores > 10`)
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer] + score
        alert(`Player ${activePlayer+1} WON the game! 🏆`)
        clearBoard()
        }
}



//Element selection
const scorePlayer1 = document.getElementById('score--0');
const scorePlayer2 = document.getElementById('score--1');
const currentScore1 = document.getElementById('current--0');
const currentScore2 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const rollBtn = document.querySelector('.btn--roll');




// Starting conditions
scorePlayer1.textContent = '0';
scorePlayer2.textContent = '0';
dice.classList.add('hidden');
let score = 0;
let activePlayer = 0;
let scores = [0, 0];

newGameBtn.addEventListener('click', clearBoard);
rollBtn.addEventListener('click', rollDices);
holdBtn.addEventListener('click', hold);

