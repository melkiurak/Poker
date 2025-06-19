import { createCard, distributeToPlayers } from "./cards.js";
import { createPlayer } from "./players.js";
import { texasHoldemState } from "./state.js";
const game = document.getElementById('game');

export function cardToString(card){
    const suitSymbols = {
        Diamonds: '/asset/card/Diamonds.png',
        Clubs: '/asset/card/Club.png',
        Spades: '/asset/card/Spades.png',
        Hearts: '/asset/card/Heart.png',
    };
    return suitSymbols[card.suit]
}
export const colorSuit = {
    Diamonds: '#EAA680',
    Clubs: '#7AA7FF',
    Spades: '#98DEE3',
    Hearts: '#E97B88',
}
function localGame() {
    const tableElement = document.querySelector('.table__area-cards');
    const savedGame = localStorage.getItem('game');
    if (!savedGame) return;
    game.style.display = 'none';


    const gameParsed = JSON.parse(savedGame);

    gameParsed.players.forEach((player, index, card) => {
        createPlayer(player, index);
        distributeToPlayers(player, index, card)
    });
    
    texasHoldemState.tableCards = gameParsed.tableCards.map((card, index) => {
        const cardElement = createCard(card.suit, card.value);
        const tableArea = tableElement.getBoundingClientRect();

        const x = tableArea.left + (index * 100); 
        const y = tableArea.top; 
        const deckRect = cardElement.getBoundingClientRect();
        const dx = x - deckRect.left;
        const dy = y - deckRect.top;

        cardElement.style.transform = `translate(${dx}px, ${dy}px)`;
        cardElement.classList.add('animate__card');

        tableElement.appendChild(cardElement);
        return {
            ...card,
            element: cardElement,
        };
    });

}
localGame()
