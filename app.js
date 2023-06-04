let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
let message = ""

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "cards:" + firstCard + ' ' + secondCard
    sumEl.textContent = "sum: " + sum 
    if (sum<21){
        message = "Do you want to draw a new card?"
    }else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    }else { 
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
}

function newCard(){
    let card = 6
    sum += card
 renderGame()
}