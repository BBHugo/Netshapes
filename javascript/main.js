let background = document.querySelector(".background")

document.querySelector('h5').addEventListener('click',showMarquee)


//This is for the footer
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

    // let opacity = .8
    // background.style.opacity = opacity
    //!!!!!OK! SO WE NEED TO FIND A WAY TO SET THE INTERVAL FOR THE FADE OUT OVER A SHORT PERIOD OF TIME INSTEAD OF INSTANT

    // while (opacity === .8){
    //     opacity
    // }


    background.src = `img/background${imageIndex}.jpg`


    // background.style.opacity = '.5'


    imageIndex++

    if(imageIndex > 4){
        imageIndex = 1
    }
}

// setInterval(changeBackground, 4000)



//************************************************* */

let opacityVal = .8



function changeBackground2() {
    // let imageIndex2 = 2
    let number = 1
    // if(opacityVal > .8){
    //     number = 1
    // }else if(opacityVal < 0){
    //     background.src = `img/background${imageIndex2}.jpg`
    //     imageIndex2++
    //     number = 2
    //         if(imageIndex2 > 4){
    //             imageIndex2 = 1
    // }
    // }else if(opacityVal > .8 ) {
    //     number = 1
    // }

    if(number == 1){
        opacityVal -= .1
    }else if(number == 2){
        opacityVal += .1
    }

    if(opacityVal < 0){
        number = 2
        console.log('switched to 2')
    }else if(opacityVal >= .8){
        number = 1
        console.log('switched to 1')
    }

    console.log(`The number is ${number}`)




    background.style.opacity = opacityVal
    
}

setInterval(changeBackground2, 200)