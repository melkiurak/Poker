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

    if (index === 0) {
        player.style.left = '50%';
        player.style.bottom = '-40px';
        player.style.top = '';
        player.style.transform = 'translateX(-50%)';
        return;
    }

    if (total === 2 && index === 1) {
        player.style.left = '50%';
        player.style.top = '-40px';
        player.style.bottom = '';
        player.style.transform = 'translateX(-50%)';
        return;
    }
}
function createPlayer() {
    const avatar = randomAvatar();
    const name = randomName();
    const player = document.createElement('div');
    const startChips = 5000
    const bankroll = 5000
    player.className = 'player'
    player.innerHTML = `<div class="player__timer"></div>
        <div class="player__info">
            <div class="player__info-img">
                <img src="${avatar}" alt="">
                <span>${countPlayer}</span>
            </div>
            <div class="player__info-amount">
                <span>${startChips}</span>
                <span>${bankroll}</span>

                <img src="./asset/Players/amoutIMG.png" alt="">
            </div>
            <div class="player__info-name">
                <span>${name}</span>
            </div>
        </div>
    `
    playerWrapper.appendChild(player);
    postitonPlayer(player, countPlayer - 1, countPlayer)
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