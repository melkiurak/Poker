import { getCardPlayer } from "./cards.js";

const texasHoldemBtn = document.getElementById('texasHoldem');
const gameContainer = document.getElementById('gameContainer');
const gameChoice = document.getElementById('gameChoice');
const titleGame = document.getElementById('titleGame');


export const texasHoldemState = {
    namePLayer: '',
    countPlayers: 0,
}


function optionsTexasHoldem() {
    const options = document.createElement('div')
    options.classList.add('game__container-options')
    options.innerHTML = `
    <form class="options__form" id="gameForm">
        <div class="options__form-group" id="formGroup">
            <label for="">Enter the name</label>
            <input type="text" id="playerName">
        </div>
        <div class="options__form-group">
            <label for="">Enter number of players</label>
            <input type="number" min="2" max="9" step="1" id="playersCount">
        </div>
        <button class="options__form-start" id="submit" type="submit">Start of the game</button>
    </form>
    `
    titleGame.textContent = "Get Ready to Play — Texas Hold'em Poker";
    gameContainer.appendChild(options);
    document.getElementById('gameForm').addEventListener('submit', verificationInput);
}
function startGame() {
    getCardPlayer(texasHoldemState.countPlayers);
}

function verificationInput(e) {
    e.preventDefault();

    const checkName = /^[A-Za-zА-Яа-яЁё\s-]{2,30}$/;
    const name = document.getElementById('playerName').value.trim();
    const players = +document.getElementById('playersCount').value;
    const formGroup = document.getElementById('formGroup');
    const oldWarning = formGroup.querySelector('.form__warning');
    if (oldWarning) {
        oldWarning.remove();
    }
    if(!checkName.test(name.trim())){
        const warning = document.createElement('p')
        warning.classList.add('form__warning')
        warning.textContent = 'Enter a name from 2 to 30 characters. Only letters, spaces and hyphens are allowed.';
        formGroup.appendChild(warning)
    } else {
        texasHoldemState.namePLayer = name;
        texasHoldemState.countPlayers = players;
        startGame()
    }
}

texasHoldemBtn.addEventListener('click', () => {
    console.log('Я стандартный покер ');
    gameChoice.style.display = 'none';
    optionsTexasHoldem();
})