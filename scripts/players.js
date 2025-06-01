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
const positions = [
  { left: '50%', bottom: '-40px', transform: 'translateX(-50%)' },
  { left: '20%', top: '10px' },
  { left: '80%', top: '10px' }
]


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
    player.style.transform = '';

    switch(index){
        case 0: 
            player.style.left = '50%';
            player.style.bottom = '-25px';
            player.style.transform = 'translateX(-50%)';
            break;
        case 1:
            if(total === 8 || total === 9) {
                player.style.left = '5%';
                player.style.bottom = '10%';
            } else if(total === 5 || total === 6 || total === 7) {
                player.style.left = '-4%';
                player.style.bottom = '19%';
                player.style.transform = ''
            }
            else if(total === 4){
                player.style.left = '-10%';
                player.style.top = '50%';
                player.style.transform = 'translateY(-50%)'
            }
            else if(total === 3){
                player.style.left = '14%';
                player.style.top = '0px';
            }
             else if(total === 2) {
                player.style.left = '50%';
                player.style.transform = 'translateX(-50%)';
                player.style.top = '-25px';
            }
            break;
        case 2: 
            if(total === 9) {
                player.style.left = '-10%';
                player.style.transform = ''
                player.style.top = '50%';
                player.style.right = '';
            } else if(total === 8){
                player.style.left = '-10%';
                player.style.transform = 'translateY(-50%)';
                player.style.top = '50%';
                player.style.right = '';
            } 
            else if(total === 5 || total === 6 || total === 7){
                player.style.left = '-4%';
                player.style.top = '19%';
                player.style.transform = ''
                player.style.right = '';
            }
             else if(total === 4) {
                player.style.left = '50%';
                player.style.transform = 'translateX(-50%)';
                player.style.top = '-25px';
                player.style.right = '';
            }
             else if(total === 3) {
                player.style.right = '14%';
                player.style.top = '0px';
            }
            break;
        case 3:
            if(total === 9) {
                player.style.left = '0%';
                player.style.top = '20%';
            } else if(total === 8){
                player.style.left = '5%';
                player.style.top = '10%';
            } 
            else if(total === 7) {
                player.style.left = '26%';
                player.style.transform = 'translateX(-25%)';
                player.style.top = '-5px';
                player.style.right = '';
            } 
            else if(total === 6) {
                player.style.left = '50%';
                player.style.transform = 'translateX(-50%)';
                player.style.top = '-25px';
                player.style.right = '';
            } 
            else if(total === 5) {
                player.style.right = '-4%';
                player.style.top = '19%';
                player.style.transform = ''
            } 
            else if(total === 4) {
                player.style.right = '-10%';
                player.style.top = '50%';
                player.style.transform = 'translateY(-50%)'
            }
            break; 
        case 4: 
            if(total === 9){
                player.style.left = '24%';
                player.style.transform = '';
                player.style.top = '0%';
                player.style.right = '';
            } else if (total === 8){
                player.style.left = '50%';
                player.style.transform = 'translateX(-50%)';
                player.style.top = '-25px';
                player.style.right = '';
            } 
            else if(total === 7){
                player.style.right = '21%';
                player.style.top = '-5px';
                player.style.transform = '';
            } 
            else if(total === 6) {
                player.style.right = '-4%';
                player.style.top = '19%';
                player.style.transform = ''
            }
            else if(total === 5){
                player.style.right = '-4%';
                player.style.bottom = '19%';
                player.style.transform = ''
            }
            break;
        case 5:
            if(total === 9){
                player.style.right = '25%';
                player.style.top = '0%';
                player.style.transform = ''
            } else if(total === 8) {
                player.style.right = '5%';
                player.style.top = '10%';
                player.style.transform = ''
            } 
            else if(total === 7){
                player.style.right = '-4%';
                player.style.top = '19%';
                player.style.transform = ''
            }
            else if(total === 6){
                player.style.right = '-4%';
                player.style.bottom = '19%';
                player.style.transform = ''
            }
            break;
        case 6: 
            if(total === 9){
                player.style.transform = '';
                player.style.right = '0%';
                player.style.top = '20%';
            } else if(total === 8){
                player.style.transform = 'translateY(-50%)';
                player.style.top = '50%';
                player.style.right = '-10%'
            }
            else if( total === 7){
                player.style.right = '-4%';
                player.style.bottom = '19%';
                player.style.transform = ''
            }
            break;
        case 7: 
            if(total === 9){
                player.style.top = '50%';
                player.style.right = '-10%';
            }else if( total === 8){
                player.style.right = '5%';
                player.style.bottom = '10%';
            }
            break;
        case 8: 
            if(total === 9) {
                player.style.right = '5%';
                player.style.bottom = '10%';
                player.style.transform = ''
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