const contain = document.querySelector('.container')
const text = document .querySelector('#text')

const totalTime = 7500
const breatheTime = (totalTime/5) *2
const holdTime = totalTime/2

animation()

function animation() {
    text.innerText = 'Breathe In!'
    contain.className = 'container-grow'

    setTimeout(() =>{
            text.innerText = 'Hold!'
            
            setTimeout(() => {
                text.innerText = 'Breathe Out!'
                contain.className = 'container-shrink'
            }, holdTime);
    },breatheTime)
}

setInterval(animation,totalTime)