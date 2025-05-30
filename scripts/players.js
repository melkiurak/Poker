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
}
function randomName() {
    const nameIndex = Math.floor(Math.random() * nameList.length)
    return nameList[nameIndex]
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