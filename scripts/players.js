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
    if(index === 0) {
        player.style.left = '50%';
        player.style.bottom = '-40px';
        player.style.transform = 'translateX(-50%)';
    }
    if(total === 2){
        const positions = [
            { left: '50%', bottom: '-40px', transform: 'translateX(-50%)' },
            { left: '10%', top: '0'},
            { right: '10%', top: '0'},
        ];
        player.style.left = positions[index].left || '';
        player.style.right = positions[index].right || '';
        player.style.bottom = positions[index].bottom || '';
        player.style.top = positions[index].top || '';
        player.style.transform = positions[index].transform;
    }  
    if(total === 1){
          const positions = [
            { left: '50%', bottom: '-40px', transform: 'translateX(-50%)' },
            { left: '50%', top: '-40px', transform: 'translateX(-50%)' },
        ];
        player.style.left = positions[index].left || '';
        player.style.bottom = positions[index].bottom || '';
        player.style.top = positions[index].top || '';
        player.style.transform = positions[index].transform || '';
    }
}
function createPlayer() {
    const avatar = randomAvatar();
    const name = randomName();
    const player = document.createElement('div');
    const bankroll = 5000
    player.className = 'player'
    player.innerHTML = ` <div class="player__timer"></div>
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
    playerWrapper.appendChild(player)
    postitonPlayer(player, countPlayer - 1, maxPlayer)
};
btnAddPlayer.addEventListener('click', () => {
    if(countPlayer < maxPlayer){
        countPlayer++;
        createPlayer();
    }
    if(countPlayer === maxPlayer) {
        btnAddPlayer.disabled  =  true;
        btnAddPlayer.style.display = 'none'
    }
})