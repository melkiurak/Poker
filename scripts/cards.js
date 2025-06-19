import { texasHoldemState } from "./state.js";
import { cardToString, colorSuit } from "./main.js";

export function deckCards() {
    const suits = ['Diamonds', 'Clubs', 'Spades', 'Hearts'];
    const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const cards = [];
    
    for (const suit of suits) {
        for (const value of values) {
            const cardElement = createCard(suit, value);
            cards.push({ suit, value, element: cardElement }); 
        }
    }
    
    return cards;
}
export function createCard(suit, value) {
    const deck = document.getElementById('deck');
    const cardElement = document.createElement('div');
    const suitImg = document.createElement('img');
    const cardValue = document.createElement('h2');

    cardElement.classList.add('card', 'deck__card');
    
    suitImg.src = cardToString({ suit, value }); 
    cardValue.textContent = value;              
    cardValue.style.color = colorSuit[suit];   
    
    cardElement.appendChild(suitImg);
    cardElement.appendChild(cardValue);
    deck.appendChild(cardElement); 
    return cardElement;
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
export async function distributionOfCards(playerCount) {
    const playersCards = getCardPlayer(texasHoldemState.countPlayers);
    const tableCards = randomCard(5);

    const players = document.querySelectorAll('.player');
    const blokcCardPlayer = Array.from(players).map(player => player.querySelector('.player__cards'));
    const tableElement = document.querySelector('.table__area-cards');
    const tableArea = tableElement.getBoundingClientRect();
    texasHoldemState.tableCards = tableCards;

    await distributeToPlayers(playerCount, playersCards, blokcCardPlayer);    
    await distributeToTable(tableCards, tableElement, tableArea);
};
export async function distributeToPlayers(playerCount, playersCards, blokcCardPlayer) {
    const targetPositions  = blokcCardPlayer.map((playerCard) => {
        const rect = playerCard.getBoundingClientRect();
        return {x: rect.left, y: rect.top}
    });
    for (let i = 0; i < playerCount; i++) {
        for (let j = 0; j < 2; j++) {
            await animateCard(playersCards[i][j].element, targetPositions[i],i, j, blokcCardPlayer[i]);
        };
        texasHoldemState.players[i].cards = playersCards[i]
    };
};
async function distributeToTable(tableCards, tableElement, tableArea,) {
    let tablePosition = [];
    for(let i = 0; i < 5; i++){
        tablePosition.push({
            x: tableArea.left + (i * 100),
            y: tableArea.top,
        });
       await animateCard(tableCards[i].element, tablePosition[i], i, 0, tableElement)
    };
};

function animateCard(cardElement, position, i, j, targetContainer) {
  return new Promise(resolve => {
    const deckRect = cardElement.getBoundingClientRect();
    const { x, y } = position;
    const dx = x - deckRect.left;
    const dy = y - deckRect.top;

    setTimeout(() => {
      cardElement.style.transition = 'transform 0.6s ease-out';
      cardElement.style.transform = `translate(${dx}px, ${dy}px)`;

      setTimeout(() => {
        cardElement.classList.add('animate__card');
        targetContainer.appendChild(cardElement);
        resolve(); 
      }, 200);
    }, 10 * (i * 2 + j));
  });
};
