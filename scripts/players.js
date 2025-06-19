import { texasHoldemState } from "./state.js";

const playerWrapper = document.getElementById('player__wrapper');
const btnAddPlayer = document.getElementById('addPlayer');
const avatarList = [
    '/asset/Players/Avatar.png',
    '/asset/Players/Avatar2.png',
    '/asset/Players/Avatar3.png',
    '/asset/Players/Avatar4.png',
    '/asset/Players/Avatar5.png',
]
const nameList = ["Jack","Max","Leo","Cody","Ace","Duke","Chase","Finn","Blake"]
const playerPositions = {
    1: {
       0: { left: '50%', bottom: '-25px', transform: 'translateX(-50%)' },
    },
    2: {
        0: { left: '50%', bottom: '-25px', transform: 'translateX(-50%)' },
        1: { left: '50%', top: '-25px', transform: 'translateX(-50%)' }    
    },
    3: {
        0: { left: '50%', bottom: '-25px', transform: 'translateX(-50%)' }, 
        1: { left: '14%', top: '0' },                                   
        2: { right: '14%', top: '0' }                                   
    },
    4: {
        0: { left: '50%', bottom: '-25px', transform: 'translateX(-50%)' }, 
        1: { left: '-10%', top: '50%', transform: 'translateY(-50%)' },  
        2: { left: '50%', top: '-25px', transform: 'translateX(-50%)' }, 
        3: { right: '-10%', top: '50%', transform: 'translateY(-50%)' } 
    },
    5: {
        0: { left: '50%', bottom: '-25px', transform: 'translateX(-50%)' },
        1: { left: '-4%', bottom: '19%' },
        2: { left: '-4%', top: '19%' },
        3: { right: '-4%', top: '19%' },
        4: { right: '-4%', bottom: '19%' }
    },
    6: {
        0: { left: '50%', bottom: '-25px', transform: 'translateX(-50%)' },
        1: { left: '-4%', bottom: '19%' },
        2: { left: '-4%', top: '19%' },
        3: { left: '50%', top: '-25px', transform: 'translateX(-50%)' },
        4: { right: '-4%', top: '19%' },
        5: { right: '-4%', bottom: '19%' }
    },
    7: {
        0: { left: '50%', bottom: '-25px', transform: 'translateX(-50%)' },
        1: { left: '-4%', bottom: '19%' },
        2: { left: '-4%', top: '19%' },
        3: { left: '26%', top: '-5px', transform: 'translateX(-25%)' },
        4: { right: '21%', top: '-5px' },
        5: { right: '-4%', top: '19%' },
        6: { right: '-4%', bottom: '19%' }
    },
    8: {
        0: { left: '50%', bottom: '-25px', transform: 'translateX(-50%)' },
        1: { left: '5%', bottom: '10%' },
        2: { left: '-10%', top: '50%', transform: 'translateY(-50%)' },
        3: { left: '5%', top: '10%' },
        4: { left: '50%', top: '-25px', transform: 'translateX(-50%)' },
        5: { right: '5%', top: '10%' },
        6: { right: '-10%', top: '50%', transform: 'translateY(-50%)' },
        7: { right: '5%', bottom: '10%' }
    },
    9: {
        0: { left: '50%', bottom: '-25px', transform: 'translateX(-50%)' },
        1: { left: '5%', bottom: '10%' },
        2: { left: '-10%', top: '50%' },
        3: { left: '0%', top: '20%' },
        4: { left: '24%', top: '0' },
        5: { right: '25%', top: '0' },
        6: { right: '0%', top: '20%' },
        7: { top: '50%', right: '-10%' },
        8: { right: '5%', bottom: '10%' }
    }
};


function randomAvatar()  {
    const avatarIndex = Math.floor(Math.random() * avatarList.length)
    return avatarList[avatarIndex]
};
function randomName() {
    const nameIndex = Math.floor(Math.random() * nameList.length)
    return nameList[nameIndex]
};
function resetStyles(element){
    element.removeAttribute('style');
};
export function createPlayer(playerData, index,) {
    const avatar = randomAvatar();
    const player = document.createElement('div');
    const bankroll = 5000;
    const isMainPlayer = index === 0;
    const name = playerData.name || randomName();    
    player.classList.add('player', isMainPlayer ? 'player__main' : 'player__other');
    
    const playerInfoClass = isMainPlayer ? 'player__info-main' : 'player__info-other';
    const playerInfoCards = isMainPlayer ? 'player__cards-main' : 'player__cards-other';
    const playerImgClass = isMainPlayer ? 'player__info-img-main' : 'player__info-img-other';
    const playerAmountClass = isMainPlayer ? 'player__info-amount-main' : 'player__info-amount-other';
    const playerNameClass = isMainPlayer ? 'player__info-name-main' : 'player__info-name-other';

    player.innerHTML = `<div class="player__timer"></div>
    <div class="player__cards ${playerInfoCards}">
    </div>
        <div class="${playerInfoClass}">
            <div class="player__info-img ${playerImgClass}">
                <img src="${avatar}" alt="">
                <span>${index + 1}</span>
            </div>
            <div class="player__info-amount ${playerAmountClass}">
                <span>${bankroll}</span>
                <img src="../asset/Players/amountIMG.png" alt="">
            </div>
            <div class="player__info-name ${playerNameClass}">
                <span>${name}</span>
            </div>
        </div>
        ${isMainPlayer ? `` : '<div class="player__line first__line"></div> <div class="player__line second__line"></div>'}
    `
    playerWrapper.appendChild(player);
    texasHoldemState.players.push({id: index, name: name, cards: [], chips: bankroll, isFolded: false})
    const allPlayers = document.querySelectorAll('.player');
    allPlayers.forEach((player, index) => positionPlayer(player, index, allPlayers.length));
};
function positionPlayer(player, index, total) {
    resetStyles(player)

    player.classList.remove('player__side-left', 'player__side-right');

    const position = playerPositions[total]?.[index];
    const playerImg = player.querySelector('.player__info-img');
    const playerAmount = player.querySelector('.player__info-amount');
    const playerName = player.querySelector('.player__info-name');
    const playerCards = player.querySelector('.player__cards');
    if(position){
        for(const prop in position){
            player.style[prop] = position[prop];
        }
        if ('left' in position && parseFloat(position.left) <= 49) {
            player.classList.add('player__side-left');
            player.style.transform = `${position.transform ? position.transform + ' ' : ''}scaleX(-1)`;
            playerImg.classList.add('player__info-img-side');
            playerAmount.classList.add('player__info-amount-side');
            playerName.classList.add('player__info-name-side');
            playerCards.classList.add('player__cards-side')
            
        } 
        else if ('right' in position && parseFloat(position.right) <= 49) {
            player.classList.add('player__side-right');
        }        
    }
    
}
/*
btnAddPlayer.addEventListener('click', () => {
    if(playerState.countPlayer < playerState.maxPlayer){
        createPlayer();
        playerState.countPlayer++;
    }
    if(playerState.countPlayer === playerState.maxPlayer) {
        btnAddPlayer.disabled  =  true;
        btnAddPlayer.style.display = 'none'
    }
})*/
