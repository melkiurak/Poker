const texasHoldemBtn = document.getElementById('texasHoldem');
const gameContainer = document.getElementById('gameContainer');
const gameChoice = document.getElementById('gameChoice');
const titleGame = document.getElementById('titleGame');



function optionsTexasHoldem() {
    const options = document.createElement('div')
    options.classList.add('game__container-options')
    options.innerHTML = `
    <form class="options__form">
        <div class="options__form-group">
            <label for="">Enter the name</label>
            <input type="text">
        </div>
        <div class="options__form-group">
            <label for="">Enter number of players</label>
            <input type="number">
        </div>
        <button class="options__form-start">Start of the game</button>
    </form>
    `
    titleGame.textContent = "Get Ready to Play — Texas Hold'em Poker"
    gameContainer.appendChild(options);

}

texasHoldemBtn.addEventListener('click', () => {
    console.log('Я стандартный покер ');
    gameChoice.style.display = 'none';
    optionsTexasHoldem();
})