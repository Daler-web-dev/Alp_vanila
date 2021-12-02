import music from './data.js'

let musicPlace = document.querySelector('.music')
let counter = 0
let button = document.querySelector('button.buttonNext')
let buttonRepeat = document.querySelector('button.buttonRepeat')
let getTime = document.querySelector('button.getTime')
let progress = document.querySelector('.progress div')

let changeTrack = (how) => {
    let audio = document.createElement('audio')
    let source = document.createElement('source')
    let procent = 0

    if (how == 'next') {
        counter++
    } else if (how == 'prev') {
        counter--
    } else if (how == 'random') {
        counter = Math.random()
    } else {
        throw new Error('WTF?')
    }

    musicPlace.innerHTML = ''
    source.setAttribute('src', './Music/' + music[counter].name + '.mp3')
    source.setAttribute('type', 'audio/mpeg')
    audio.setAttribute('controls', 'controls')
    audio.setAttribute('autoplay', 'autoplay')
    audio.append(source)
    musicPlace.append(audio)

    counter++

    buttonRepeat.onclick = () => {
        event.target.classList.toggle('active')
        audio.setAttribute('loop', 'loop')
    }

    setTimeout(() => {
        setInterval(() => {
            let currentTime = audio.currentTime
            let duration = audio.duration

            procent = 100 / duration * currentTime

            progress.style.width = procent + '%'
        }, 1000)
    }, 1000)
}

button.onclick = () => {
    next()
}

next()

