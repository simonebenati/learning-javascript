'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!'


// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 11;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const random = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = random


let highscore = sessionStorage.getItem("value") || 0;
document.querySelector('.highscore').textContent = highscore

console.log('pagina ricaricata', highscore)
document.querySelector('.check').addEventListener('click', function () {


    // When there is no input
    if (!(document.querySelector('.guess').value))
        document.querySelector('.message').textContent = `⛔️ Please insert a number!`
    // When player wins
    else if (Number(document.querySelector('.guess').value) === random) {
        document.querySelector('.message').textContent = `🏆 You won!`
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = random
        if (Number(document.querySelector('.score').textContent) > highscore) {
            document.querySelector('.highscore').textContent = document.querySelector('.score').textContent
            highscore = document.querySelector('.score').textContent
            console.log(highscore)
        }
    }
    //When guess is too high
    else if (Number(document.querySelector('.guess').value) > random) {
        if (Number(document.querySelector('.guess').value) > 20) {
            alert(`🤓 You can only insert numbers between 1 and 20, READ!`)
            return
        }
        document.querySelector('.message').textContent = `📈 Your number is too high!`
        document.querySelector('.score').textContent = Number(document.querySelector('.score').textContent) - 1
        if (Number(document.querySelector('.score').textContent) === 0) {
            document.querySelector('.message').textContent = `😢 You lost!`
            document.querySelector('body').style.backgroundColor = '#ff0000'

            setTimeout(() => { location.reload(); }, 2000);
        }
    }
    // When Guess is too low.
    else if (Number(document.querySelector('.guess').value) < random) {
        if (Number(document.querySelector('.guess').value) < 1) {
            alert(`🤓 You can only insert numbers between 1 and 20, READ!`)
            return
        }
        document.querySelector('.message').textContent = `📉 Your Number is too low!`
        document.querySelector('.score').textContent = Number(document.querySelector('.score').textContent) - 1
        if (Number(document.querySelector('.score').textContent) === 0) {
            document.querySelector('.message').textContent = `😢 You lost!`
            document.querySelector('body').style.backgroundColor = '#ff0000'

            setTimeout(() => { location.reload(); }, 2000);

        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    sessionStorage.setItem("value", document.querySelector('.highscore').textContent)
    // highscore = sessionStorage.getItem("value")
    console.log(highscore)
    location.reload();
})






