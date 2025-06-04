import { getCardPlayer, randomCard, renderCards } from "./cards.js";
import { createPlayer } from "./players.js";

const cardContainer = document.querySelector('.table__area-cards');
const texasHoldemBtn = document.getElementById('texasHoldem');
const gameContainer = document.getElementById('gameContainer');
const gameChoice = document.getElementById('gameChoice');
const titleGame = document.getElementById('titleGame');
const game = document.getElementById('game')

export const texasHoldemState = {
    namePLayer: '',
    countPlayers: 0,
    maxPlayer: 9,
}


function optionsTexasHoldem() {
    const options = document.createElement('div')
    options.classList.add('game__container-options')
    options.innerHTML = `
    <form class="options__form" id="gameForm">
        <div class="options__form-group" id="formGroupName">
            <label for="">Enter the name</label>
            <input type="text" id="playerName">
        </div>
        <div class="options__form-group" id="formGroupPlayers" >
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
    game.style.display = 'none';

    const playersCards = getCardPlayer(texasHoldemState.countPlayers)
    const tableCards = randomCard(5);

    console.log('Table cards:', tableCards);
    console.log('Игроки:', playersCards);

    for(let i = 0; i < texasHoldemState.countPlayers; i++){
        if(i===0){
           createPlayer(texasHoldemState.namePLayer)
        } else {
            createPlayer();
        }
    }

    renderCards(tableCards, cardContainer);

}

function verificationInput(e) {
    e.preventDefault();

    const checkName = /^[A-Za-zА-Яа-яЁё\s-]{2,30}$/;
    const name = document.getElementById('playerName').value.trim();
    const playersInput = document.getElementById('playersCount').value.trim();
    const players = Number(playersInput);
    const formGroupName = document.getElementById('formGroupName');
    const formGroupPlayers = document.getElementById('formGroupPlayers');
    const oldWarning = gameForm.querySelector('.form__warning');

    if (oldWarning) {
        oldWarning.remove();
    }
    if (!checkName.test(name)) {
        const warning = document.createElement('p');
        warning.classList.add('form__warning');
        warning.textContent = 'Enter a name from 2 to 30 characters. Only letters, spaces and hyphens are allowed.';
        formGroupName.appendChild(warning);
        return;
    }
    if (!playersInput || isNaN(players) || players < 2 || players > 9) {
        const warning = document.createElement('p');
        warning.classList.add('form__warning');
        warning.textContent = 'Enter a number of players from 2 to 9.';
        formGroupPlayers.appendChild(warning);
        return; 
    }
    texasHoldemState.namePLayer = name;
    texasHoldemState.countPlayers = players;
    startGame();
}

texasHoldemBtn.addEventListener('click', () => {
    console.log('Я стандартный покер ');
    gameChoice.style.display = 'none';
    optionsTexasHoldem();
})