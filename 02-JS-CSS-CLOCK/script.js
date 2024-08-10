
const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')





function setDate() {
    const now = new Date();
   
    const second = now.getSeconds();
    const secondDegrees = ((second / 60)*360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const min = now.getMinutes()
    const minDegrees = ((min / 60) * 360) + 90
    minHand.style.transform = `rotate(${minDegrees}deg)`

    const hour = now.getHours()
    const hourDegrees = (hour / 12) * 360 + 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

function labelDate() {
    const now = new Date();
    
    const hour = now.getHours()
    const hourLabel = document.getElementById('hourLabel')
    hourLabel.textContent = `${hour}`

    const min = now.getMinutes()
    const minLabel = document.getElementById('minLabel')
    minLabel.textContent = `${min}`

    const second = now.getSeconds()
    const secondLabel = document.getElementById('secondLabel')
    secondLabel.textContent = `${second}`
    
}

setInterval(setDate, 1000)
setInterval(labelDate, 1000)