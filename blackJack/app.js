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



const buildDeck = () =>{
    let values = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k']
    let types = ['h', 'c', 'd', 's']
    deck = []
    for (let i = 0; i < types.length; i++)
        for (let g = 0; g< values.length; g++)
        deck.push(values[g] + types[i])
}
buildDeck()
// builds a deck of cards
const shuffle = () => {
    for (let i = 0; i < deck.length; i++){
        let j = Math.floor(Math.random() *deck.length)
        let temp = deck[i]
        deck[i] = deck[j]
        deck[j] = temp
    }
}
 shuffle()
//  shuffles the cards so they are not in order
const getValue = () => {
    let data = car.split('')
    let value = data[0]

    if (isNaN(value))
        if (value === 'a'){
            return 11
        }else return 10
}
const newGame = () => {
    hidden = deck.pop()
    dealerSum += getValue(hidden)
}

console.log(deck)