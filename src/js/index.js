import {Howl, Howler} from 'howler';
import audio from '../assets/audio/plastic-brains.mp3'

const disc = document.querySelector('.disc')
const song = new Howl({
    src: [audio]
})

const moveDisc = () => {
    disc.classList.toggle('translate')
}

const play = () => song.play()

disc.addEventListener('click', moveDisc)
disc.addEventListener('click', play)
