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