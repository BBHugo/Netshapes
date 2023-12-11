let background = document.querySelector(".background")

let imageIndex = 2

function changeBackground() {
    // background.style.transition = 'opacity 500ms'

    // background.style.opacity = '0'


    background.src = `img/background${imageIndex}.jpg`


    // background.style.opacity = '.5'


    imageIndex++

    if(imageIndex > 4){
        imageIndex = 1
    }
}

setInterval(changeBackground, 4000)