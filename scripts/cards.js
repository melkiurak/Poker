const cardContainer = document.querySelector('.table__area-cards');

const suits = ['Diamonds', 'Clubs', 'Spades', 'Hearts']
const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
const cards = [];
for(const suit of suits){
    for(const value of values){
        cards.push({suit, value})
    };
};
function randomCard(count){
    let cardsPlayer = [];
    for(let i = 0; i < count; i++){
        const randomIndex = Math.floor(Math.random() * cards.length);
        cardsPlayer.push(cards[randomIndex]);
        cards.splice(randomIndex, 1);
    }
    return cardsPlayer;
}
export function getCardPlayer(players) {
    const playersCards = []
    for(let i = 0; i < players; i++){
        playersCards.push(randomCard(2));
    }
    console.log(playersCards);
    return playersCards;
}
const tableCards = randomCard(5);

function cardToString(card){
    const suitSymbols = {
        Diamonds: '/asset/Diamonds.png',
        Clubs: '/asset/Club.png',
        Spades: '/asset/Spades.png',
        Hearts: '/asset/Heart.png',
    };
    return suitSymbols[card.suit]
}
const colorSuit = {
    Diamonds: '#EAA680',
    Clubs: '#7AA7FF',
    Spades: '#98DEE3',
    Hearts: '#E97B88',
}
console.log(tableCards)

tableCards.forEach((card) => {
    const cardElement = document.createElement('div');
    const suitImg = document.createElement('img');
    const cardValue = document.createElement('h2');

    suitImg.src = cardToString(card);
    cardElement.classList.add('card');
    cardValue.textContent = card.value;
    cardValue.style.color = colorSuit[card.suit]


    cardContainer.appendChild(cardElement);
    cardElement.appendChild(suitImg);
    cardElement.appendChild(cardValue);
})