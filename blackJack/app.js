// Use the concepts we’ve learned in class to develop a game of your choice. Take the time in the breakout rooms until 11:30 (when we break for lunch) to find and identify the gaming concepts. There will be a demonstration from scratch of how we can utilize these tools to build the game.
// GAME Requirements:
// -Each game must have an Orginal Commit History (aka No Recycled Code from older projects :nerd_face:)
// -Each game must have a WinState/Lose State
// Each Game must keep User’s Score
// Each Game MustUse at least 1 element learned in class. IE: Classes, Objects, etc.
// If 2 player game…P1 and P2 must be able to be controlled by user..No AIs of default computer moves--unless necessary {ie:BlackJack}
// :rotating_light:WIREFRAME until lunch then execute code afterwards…A game is only as good as its planning.

let dealerSum = 0;
let yourSum= 0;

let dealerAceCount = 0;
let yourAceCount = 0;

let hidden;
let deck;
let canHit = true;

window.onload = function() {
    buildDeck();
    shuffle();
    newGame();
}

const buildDeck = () =>{
    let values = ['a', '2', '3', '4', '5', '6', '7', '8', '9', 't', 'j', 'q', 'k']
    let types = ['h', 'c', 'd', 's']
    deck = []
    for (let i = 0; i < types.length; i++)
        for (let g = 0; g < values.length; g++)
        deck.push(values[g] + types[i])
}

 // builds a deck of cards
const shuffle = () => {
    for (let i = 0; i < deck.length; i++){
        let j = Math.floor(Math.random() * deck.length)
        let temp = deck[i]
        deck[i] = deck[j]
        deck[j] = temp
    }
    console.log(deck)
}

// //  shuffles the cards so they are not in order

const newGame = () => {
    hidden = deck.pop()
    dealerSum += getValue(hidden)
    dealerAceCount += checkAce(hidden)
    // console.log(hidden)
    // console.log(dealerSum)
    while (dealerSum < 17) {
        let cardImg = document.createElement("img")
        let card = deck.pop()
        cardImg.src = "./cards/" + card + ".png"
        dealerSum += getValue(card)
        dealerAceCount += checkAce(card)
        document.getElementById("dealerCards").append(cardImg)
    }
    console.log(dealerSum)

    for ( let i = 0; i < 2; i++){

        let cardImg = document.createElement("img")
        let card = deck.pop()
        cardImg.src = "./cards/" + card + ".png"
        yourSum += getValue(card)
        yourAceCount += checkAce(card)
        document.getElementById("playerCards").append(cardImg) 
    }
    console.log(yourSum)

    document.getElementById("hit").addEventListener("click", hit)
    document.getElementById("stay").addEventListener("click", stay)


 }

 const stay = () => {
    dealerSum = reduceAce(dealerSum, dealerAceCount)
    yourSum = reduceAce(yourSum, yourAceCount)
    canHit = false
    document.getElementById("hidden").src = "./cards/" + hidden + ".png"
    let message = ""
    if (yourSum > 21){
        message = "You Lose!"
    }
    else if (dealerSum > 21){
        message = "You Win!"
    }
    else if (yourSum === dealerSum){
    message = "Tie"
    }
    else if (yourSum > dealerSum){
        message = "You Win!"
    }
    else if (yourSum < dealerSum){
        message = "You Lose!"
    }

    document.getElementById("results").innerText = message
    document.getElementById("dealerSum").innerText = dealerSum
    document.getElementById("playerSum").innerText = yourSum
}

 const hit = () => {
    if (!canHit){
        return
    }
        let cardImg = document.createElement("img")
        let card = deck.pop()
        cardImg.src = "./cards/" + card + ".png"
        yourSum += getValue(card)
        yourAceCount += checkAce(card)
        document.getElementById("playerCards").append(cardImg) 

        if (reduceAce(yourSum,yourAceCount) > 21){
            canHit = false
        }
 }

const getValue =(card) => {
    let data = card.split("")
    let value = data[0]

    if (isNaN(value)){
        if(value === "a"){
            return 11
        } 
        return 10
    }
    return parseInt(value)
}

const checkAce = (card) => {
    if (card[0] === 'a'){
        return 1
    }
    return 0
}

const reduceAce = (playerSum, playerAceCount) => {
    while (playerSum > 21 && playerAceCount > 0){
        playerSum -= 10
        playerAceCount -= 1
    }
    return playerSum
}