import { Howl, Howler } from 'howler'

const audio = require('../assets/audio/plastic-brains.mp3')
const song = new Howl({
    src: [audio]
})

const disc = document.querySelector('.disc')
const cover = document.querySelector('.cover')

const insertDisc = () => {
    disc.classList.remove('translate-out')
    disc.classList.add('translate-in')
    song.play()
}

const takeOutDisc = () => {
    disc.classList.remove('translate-in')
    disc.classList.add('translate-out')
    song.pause()
}

disc.addEventListener('click', insertDisc)
cover.addEventListener('click', takeOutDisc)
