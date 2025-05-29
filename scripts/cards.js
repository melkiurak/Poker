const suits = ['Diamonds', 'Clubs', 'Spades', 'Hearts']
const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
const cards = [];
const players = 2;
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
const playersCards = [];
for(let i = 0; i < players; i++){
    playersCards.push(randomCard(2));
}
const tableCards = randomCard(5);

console.log(playersCards)
console.log(tableCards)