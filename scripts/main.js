export function cardToString(card){
    const suitSymbols = {
        Diamonds: '/asset/Diamonds.png',
        Clubs: '/asset/Club.png',
        Spades: '/asset/Spades.png',
        Hearts: '/asset/Heart.png',
    };
    return suitSymbols[card.suit]
}
export const colorSuit = {
    Diamonds: '#EAA680',
    Clubs: '#7AA7FF',
    Spades: '#98DEE3',
    Hearts: '#E97B88',
}