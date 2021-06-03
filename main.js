const scorpion = {
    name:'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['fire-suriken','fire-spear','fire-axe'],
    attack: function () {
        return console.log(this.name+' '+ 'Fight...')
    }
}

const subzero = {
    name:'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['ice','ice-sword','ice-axe'],
    attack: function () {
        return console.log(this.name+' '+ 'Fight...')
    }
}


function createplayer(className, obj) {
    let arenas = document.querySelector('.arenas');
    let player = document.createElement('div');
    player.classList.add(className);
    let progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');
    let life = document.createElement('div');
    let name = document.createElement('div');
    life.classList.add('life');
    life.style.width = '100%';
    life.innerHTML = obj.hp;
    name.classList.add('name');
    name.innerHTML = obj.name;
    let character = document.createElement('div');
    character.classList.add('character');
    let image = document.createElement('img');
    image.src = obj.img;
    character.appendChild(image);
    player.appendChild(progressbar);
    player.appendChild(character);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    arenas.appendChild(player);

}

createplayer('player1', scorpion);
createplayer('player2', subzero);