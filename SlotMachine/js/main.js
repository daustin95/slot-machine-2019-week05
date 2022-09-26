/* When lever button is clicked, run function gamble */
document.querySelector('#lever').addEventListener('click', getSlotsInts)
/* When betAmount list items are clicked, run function addBets */
document.querySelector('li').addEventListener('click', addBets)
/* When #five is clicked, run function subFive */

/* When #ten is clicked, run function subTen */

/* When #fifty is clicked, run function subFifty */

/* When #oneHundred is clicked, run function subOneHundred */

/* When #fiveHundred is clicked, run function subFiveHundred */





function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNum = Math.floor(Math.random() * (max - min) + min);
    if(randomNum === 1){
/* The value of the slot is a bell */
    return '🔔'
}else if(randomNum === 2){
    /* The value of the slot is a star */
    return'⭐️'
}else if(randomNum === 3){
    /* The value of the slot is a circle */
    return '💩'
}else if(randomNum === 4){
    /* The value of the slot is a smiley face */
    return '🔥'
}else if(randomNum === 5){
    /* The vale of the slot is 7 */
    return '😀'
}
}


function getSlotsInts(){
    
    
    const randomInt = getRandomInt(1,5)
    const randomInt2 = getRandomInt(1,5)
    const randomInt3 = getRandomInt(1,5)
    document.querySelector('#slot1').innerHTML = randomInt 
    document.querySelector('#slot2').innerHTML = randomInt2 
    document.querySelector('#slot3').innerText = randomInt3 
    winOrLose(randomInt,randomInt2,randomInt3)
}
function winOrLose(randomInt,randomInt2,randomInt3){
    
    if(randomInt === randomInt2 && randomInt === randomInt3){
        document.querySelector('#results').innerHTML = 'YOU WIN'
    }else{
        document.querySelector('#results').innerText = 'YOU LOSE'
    }
}


function subFive(){
    /* Subtracts */
}
function subTen(){
    /* Places random numbers in slot sections */
}
function subFifty(){
    /* Places random numbers in slot sections */
}
function subOneHundred(){
    /* Places random numbers in slot sections */
}
function subFiveHundred(){
    /* Places random numbers in slot sections */
}
function addBets(){
    /* add the value of bets selected and place in h2 */
}
