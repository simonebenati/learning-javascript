'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!'


// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 11;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const random = Math.trunc(Math.random()*20)+1;

document.querySelector('.number').textContent = random

document.querySelector('.check').addEventListener('click', function() { 

    let numberIsCorrect = false;
    let guess = Number(document.querySelector('.guess').value);
    if(guess < 1 || guess > 20){
        alert(`your number is incorrect, please read 🤓`)
        return
    }

    switch (guess) {
        case 0:
            document.querySelector('.message').textContent = '⛔️ No number was provided!';
            break;
        case random:
            document.querySelector('.message').textContent = '🏆 You won!'
            document.querySelector('.highscore').textContent = document.querySelector('.score').textContent 
            break;
        default:
            document.querySelector('.message').textContent = '❌ Wrong guess!'
            document.querySelector('.score').textContent = Number(document.querySelector('.score').textContent) - 1
            if (guess > random) console.log(`Not quite there yet, try a lower number!`)
            else if (guess < random) console.log(`Not quite there yet, try a higher number!`)
            break;
    }

});

document.querySelector('.again').addEventListener('click', function(){
    location.reload();
})




