import {Howl, Howler} from 'howler';

const disc = document.querySelector('.disc')
const song = new Howl({
    src: ['../assets/audio/plastic-brains.mp3']
})

const moveDisc = () => {
    disc.classList.toggle('translate')
}

const play = () => song.play()

disc.addEventListener('click', moveDisc)
disc.addEventListener('click', play)
