let celciusInput = document.querySelector('#celcius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')
let rankineInput = document.querySelector('#rankine > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15
    let rTemp = (cTemp*9/5) + 491.67

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
    rankineInput.value = roundNumber(rTemp)
})

fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * 5/9
    let kTemp = (fTemp - 32) * 5/9 + 273.15
    let rTemp = fTemp + 491.67

    fahrenheitInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
    rankineInput.value = roundNumber(rTemp)
})

kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32
    let rTemp = kTemp*1.8

    celciusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
    rankineInput.value = roundNumber(rTemp)
})

rankineInput.addEventListener('input', function(){
    let rTemp = parseFloat(rankineInput.value)
    let cTemp = (rTemp - 491.67) * 5/9
    let fTemp = rTemp - 459.67
    let kTemp = (rTemp * 5/9)

    celciusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})