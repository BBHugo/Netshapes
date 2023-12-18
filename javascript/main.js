let background = document.querySelector(".background")

document.querySelector('h5').addEventListener('click',showMarquee)

function showMarquee(){
    let marquee = document.querySelector('#marquee')
    if(marquee.style.display !== 'none'){
        marquee.style.display = 'none'
    }else {
        marquee.style.display = 'inline'
    }

    console.log('Website provided to Netshapes, Inc for usage by Hugo Mendoza. Any code provided by Hugo Mendoza remains under ownership of Hugo Mendoza unless otherwise stated in writing. Hello World! :)')
}

let imageIndex = 2

function changeBackground() {
    // background.style.transition = 'opacity 500ms'

    // background.style.opacity = '0'

    let opacity = .8

    

     background.style.opacity = opacity

    background.src = `img/background${imageIndex}.jpg`


    // background.style.opacity = '.5'


    imageIndex++

    if(imageIndex > 4){
        imageIndex = 1
    }
}

setInterval(changeBackground, 4000)