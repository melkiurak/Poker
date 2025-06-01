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
        1: { left: '14%', top: '0px' },                                   
        2: { right: '14%', top: '0px' }                                   
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
        4: { left: '24%', top: '0%' },
        5: { right: '25%', top: '0%' },
        6: { right: '0%', top: '20%' },
        7: { top: '50%', right: '-10%' },
        8: { right: '5%', bottom: '10%' }
    }
};


let countPlayer = 0
let maxPlayer = 9


function randomAvatar()  {
    const avatarIndex = Math.floor(Math.random() * avatarList.length)
    return avatarList[avatarIndex]
};
function randomName() {
    const nameIndex = Math.floor(Math.random() * nameList.length)
    return nameList[nameIndex]
};
function postitonPlayer(player, index, total) {
    player.style.left = '';
    player.style.top = '';
    player.style.bottom = '';
    player.style.right = '';
    player.style.transform = '';

    const position = playerPositions[total]?.[index];
    if(position){
        for(const prop in position){
            player.style[prop] = position[prop];
        }
    }
}
function createPlayer() {
    const avatar = randomAvatar();
    const name = randomName();
    const player = document.createElement('div');
    const bankroll = 5000
    player.className = 'player'
    player.innerHTML = `<div class="player__timer"></div>
        <div class="player__info">
            <div class="player__info-img">
                <img src="${avatar}" alt="">
                <span>${countPlayer}</span>
            </div>
            <div class="player__info-amount">
                <span>${bankroll}</span>
                <img src="./asset/Players/amoutIMG.png" alt="">
            </div>
            <div class="player__info-name">
                <span>${name}</span>
            </div>
        </div>
    `
    playerWrapper.appendChild(player);
    const allPlayers = document.querySelectorAll('.player');
    allPlayers.forEach((player, index) => postitonPlayer(player, index, allPlayers.length))
};

btnAddPlayer.addEventListener('click', () => {
    if(countPlayer < maxPlayer){
        countPlayer++;
        createPlayer();
        console.log('Общее количество', countPlayer)
    }
    if(countPlayer === maxPlayer) {
        btnAddPlayer.disabled  =  true;
        btnAddPlayer.style.display = 'none'
    }
})