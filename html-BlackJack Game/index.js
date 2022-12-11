let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let isAlive = true
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl= document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")

let playerName = "Per"
let playerChips = 145

let playerEl = document.getElementById("player-el")
playerEl.textContent = playerName + ":  $" + playerChips

function getRandomCard() {
    let randomNumber =  Math.floor(Math.random()*13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()

}

function renderGame() {
    cardEl.textContent = "Cards:  "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + ","

    }
    sumEl.textContent = "Sum:  "+ sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    
    } else if (sum === 21) {
        message = "You got blackjack"
        hasBlackJack = true
    } else if (sum > 21) {
        message = "you lost"
        isAlive = false
    }
messageEl.textContent = message
}
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
 
    }
}
