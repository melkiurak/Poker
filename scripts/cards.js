import { texasHoldemState } from "./game.js";
import { cardToString, colorSuit } from "./main.js";
const deck = document.getElementById('deck');
const tableArea = document.querySelector('.table__area-cards').getBoundingClientRect();

export function deckCards() {
    const suits = ['Diamonds', 'Clubs', 'Spades', 'Hearts'];
    const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const cards = [];
    for (const suit of suits) {
        for (const value of values) {
            const cardElement = document.createElement('div');
            const suitImg = document.createElement('img');
            const cardValue = document.createElement('h2');

            cardElement.classList.add('card', 'deck__card');

            suitImg.src = cardToString({ suit, value }); 
            cardValue.textContent = value;              
            cardValue.style.color = colorSuit[suit];   

            cardElement.appendChild(suitImg);
            cardElement.appendChild(cardValue);
            cards.push({ suit, value, element: cardElement }); 
            deck.appendChild(cardElement); 
        }
    };
    cards[18].element.classList.add('deck__card-middle');
    cards[cards.length - 1].element.classList.add('deck__card-bottom');
    return cards;
}
const cards = deckCards();
export function randomCard(count){
    let cardsPlayer = [];
    for(let i = 0; i < count; i++){
        const randomIndex = Math.floor(Math.random() * cards.length);
        cardsPlayer.push(cards[randomIndex]);
        cards.splice(randomIndex, 1);
    }
    return cardsPlayer;
};
export function getCardPlayer(players) {
    const playersCards = [];
    for(let i = 0; i < players; i++){
        playersCards.push(randomCard(2));
    }
    return playersCards;
};

export function distributionOfCards(player, playersCards, tableCards) {
    const players = document.querySelectorAll('.player');
    const blokcCardPlayer = Array.from(players).map(player => player.querySelector('.player__cards'));
    
    let tablePosition = [];
    
    const targetPositions  = blokcCardPlayer.map((playerCard) => {
        const rect = playerCard.getBoundingClientRect();
        return {x: rect.left, y: rect.top}
    });
    
    
    for (let i = 0; i < player; i++) {
        for (let j = 0; j < 2; j++) {
            animateCard(playersCards[i][j].element,targetPositions[i],i, j, blokcCardPlayer[i]);
        };
    };
    for(let i = 0; i < 5; i++){
        tablePosition.push({
            x: tableArea.left + (i * 100),
            y: tableArea.top,
        });
        animateCard(tableCards[i].element, tablePosition[i], i, 0, deck)
    };
}
function animateCard(cardElement, position, i, j, targetContainer){
    const deckRect = cardElement.getBoundingClientRect();
    const {x, y} = position;
    const dx = x - deckRect.left;
    const dy = y - deckRect.top;

    cardElement.style.transition = 'transform 0.6s ease-out';
    cardElement.style.transform = `translate(${dx}px, ${dy}px)`;

    setTimeout(() => {
        cardElement.style.transition = 'none';
        cardElement.style.transform = 'none';
        targetContainer.appendChild(cardElement);
    }, 600);
}
