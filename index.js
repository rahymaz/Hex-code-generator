const hexaNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

let button = document.getElementById('button')
let firstColorBox = document.getElementById('first-color-box')
let firstColorBoxText = document.getElementById('first-hexCode')


let secondColorBox = document.getElementById('second-color-box')
let secondColorBoxText = document.getElementById('second-hexCode')



let thirdColorBox = document.getElementById('third-color-box')
let thirdColorBoxText = document.getElementById('third-hexCode')


function generateRandomNumber () {
   let randomNumber = Math.floor(Math.random()*16)
   return randomNumber 
}



button.addEventListener('click', function(){
    let hexCodeFirstBox = '#'
    for(let myFirstloop = 0; myFirstloop < 6; myFirstloop++) {
      let randomHex = hexaNumbers[generateRandomNumber()] 
      hexCodeFirstBox += randomHex
    }
    firstColorBox.style.backgroundColor = hexCodeFirstBox

    firstColorBoxText.innerText = hexCodeFirstBox
})



button.addEventListener('click', function(){
    let hexCodeSecondBox = '#'
    for(let mySecondloop = 0; mySecondloop < 6; mySecondloop++) {
      let randomHex = hexaNumbers[generateRandomNumber()] 
      hexCodeSecondBox += randomHex
    }
    secondColorBox.style.backgroundColor = hexCodeSecondBox

    secondColorBoxText.innerText = hexCodeSecondBox
})


button.addEventListener('click', function(){
    let hexCodeThirdBox = '#'
    for(let myThirdloop = 0; myThirdloop < 6; myThirdloop++) {
      let randomHex = hexaNumbers[generateRandomNumber()] 
      hexCodeThirdBox += randomHex
    }
    thirdColorBox.style.backgroundColor = hexCodeThirdBox

    thirdColorBoxText.innerText = hexCodeThirdBox
})