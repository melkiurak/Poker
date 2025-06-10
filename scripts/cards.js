import { cardToString, colorSuit } from "./main.js";

const suits = ['Diamonds', 'Clubs', 'Spades', 'Hearts'];
const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const cards = [];
const players = document.querySelectorAll('.player')

const targetPositions  = Array.from(players).map((player) => {
    const rect = player.getBoundingClientRect();
    return {x: rect.left, y: rect.top}
})

for(const suit of suits){
    for(const value of values){
        cards.push({suit, value})
    };
};

export function distributionOfCards(player) {
    const positionDeckCard = ['deck__card-top', 'deck__card-middle', 'deck__card-bottom'];
    const deck = document.getElementById('deck');
    const deckCards = []; 
    for(let i = 0; i < player; i++){
        for(let i = 0; i < 2; i++){
            const deckCard = document.createElement('div');
            deckCard.classList.add('deck__card', positionDeckCard[i]);
            deck.appendChild(deckCard);
            deckCards.push(deckCard);
        }
    }
    return new Promise((resolve) => {
        deckCards.forEach(( card, index) => {
            setTimeout(() => {

                if(index === 0 && deck.length - 1) {
                    resolve(); 
                }
            }, index * 800);
        });
    });
}

export function randomCard(count){
    let cardsPlayer = [];
    for(let i = 0; i < count; i++){
        const randomIndex = Math.floor(Math.random() * cards.length);
        cardsPlayer.push(cards[randomIndex]);
        cards.splice(randomIndex, 1);
    }
    return cardsPlayer;
}
export function getCardPlayer(players) {
    const playersCards = [];
    for(let i = 0; i < players; i++){
        playersCards.push(randomCard(2));
    }
    console.log(playersCards);
    return playersCards;
}


export function renderCards(cardsArray, container) {
    container.innerHTML = ''
    cardsArray.forEach(card => {
        const cardElement = document.createElement('div');
        const suitImg = document.createElement('img');
        const cardValue = document.createElement('h2');

        suitImg.src = cardToString(card);
        cardElement.classList.add('card');
        cardValue.textContent = card.value;
        cardValue.style.color = colorSuit[card.suit];

        cardElement.appendChild(suitImg);
        cardElement.appendChild(cardValue);
        container.appendChild(cardElement);
    });
}