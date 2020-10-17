import { Howl } from 'howler'

const audio = require('../assets/audio/plastic-brains.mp3')
const song = new Howl({
    src: [audio]
})

const disc = document.querySelector('.disc')
const cover = document.querySelector('.cover')
const border = document.querySelectorAll('.border')
const boxes = document.querySelectorAll('.box')
const discArtist = document.querySelector('#disc-artist')
const discTitle = document.querySelector('#disc-title')

const insertDisc = () => {
    disc.classList.remove('translate-out')
    disc.classList.add('translate-in')
    cover.classList.remove('blur-in')
    cover.classList.add('blur-out')
    border.forEach((e, i) => e.classList.add('border-animation' + ++i))
    boxes.forEach((e, i) => e.classList.add('animation-box-' + ++i))
    discArtist.classList.add('animation-disc-artist')
    discTitle.classList.add('animation-disc-title')
    song.play()
}

const takeOutDisc = () => {
    disc.classList.remove('translate-in')
    disc.classList.add('translate-out')
    cover.classList.remove('blur-out')
    cover.classList.add('blur-in')
    song.pause()
}

disc.addEventListener('click', insertDisc)
cover.addEventListener('click', takeOutDisc)

const name = document.querySelector('.band-name')
const image = document.querySelector('.band-image')
const description = document.querySelector('.description')
const web = document.querySelector('.website')

fetch('https://theaudiodb.com/api/v1/json/1/artist.php?i=152082')
    .then(response => response.json())
    .then(json => {
        name.innerHTML = json.artists[0].strArtist
        image.src = json.artists[0].strArtistThumb
        description.textContent = json.artists[0].strBiographyEN.substring(0, 780)
        web.innerHTML = '<a href="https://' + json.artists[0].strWebsite + '">' + json.artists[0].strWebsite + '</a>'
    })
