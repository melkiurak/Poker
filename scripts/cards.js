import { cardToString, colorSuit } from "./main.js";

const suits = ['Diamonds', 'Clubs', 'Spades', 'Hearts'];
const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const cards = [];

for(const suit of suits){
    for(const value of values){
        cards.push({suit, value})
    };
};
export function distributionOfCards(player) {
    const players = document.querySelectorAll('.player');
    const tableCards = document.querySelector('.table__area-cards').getBoundingClientRect();
    console.log(tableCards.left, tableCards.top);

    const targetPositions  = Array.from(players).map((player) => {
        const rect = player.getBoundingClientRect();
        return {x: rect.left, y: rect.top}
    });
    
    console.log(targetPositions)
    
    for (let i = 0; i < player; i++) {
        for (let j = 0; j < 2; j++) {
            animateCard( targetPositions[i],i, j);
        }
    };
    let tablePosition = [] ;
    for(let i = 0; i < 5; i++){
        tablePosition.push({
            x: tableCards.left + (i * 100),
            y: tableCards.top,
        });
        animateCard(tablePosition[i], i, 0)
    }
    
}
function animateCard(position, i, j){
    const deck = document.getElementById('deck');
    const positionDeckCard = ['deck__card-top', 'deck__card-middle', 'deck__card-bottom'];
    const deckCard = document.createElement('div');
    deckCard.classList.add('deck__card', ...positionDeckCard);
    deck.appendChild(deckCard);

    const deckRect = deckCard.getBoundingClientRect();

    const {x, y} = position;
    const dx = x - deckRect.left;
    const dy = y - deckRect.top;
    setTimeout(() => {
        deckCard.style.transform = `translate(${dx}px, ${dy}px)`;
        setTimeout(() => {
            deck.remove()
        }, 2500)
    }, 200 * (i * 2 + j));

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