const card1 = document.getElementById('index1')
const card2 = document.getElementById('index2')
const card3 = document.getElementById('index3')
const card4 = document.getElementById('index4')
const card5 = document.getElementById('index5')
const card6 = document.getElementById('index6')
const card7 = document.getElementById('index7')
const card8 = document.getElementById('index8')
const cards = document.getElementById('cards')

let cardP1 = 0
let cardP2 = 0
let cardP3 = 0
let cardP4 = 0

function coverBg() {

}
function shuffle() {
const order1 = Math.floor(Math.random() * 100) + 1;
const order2 = Math.floor(Math.random() * 100) + 1;
const order3 = Math.floor(Math.random() * 100) + 1;
const order4 = Math.floor(Math.random() * 100) + 1;
const order5 = Math.floor(Math.random() * 100) + 1;
const order6 = Math.floor(Math.random() * 100) + 1;
const order7 = Math.floor(Math.random() * 100) + 1;
const order8 = Math.floor(Math.random() * 100) + 1;
card1.style.order = order1
card2.style.order = order2
card3.style.order = order3
card4.style.order = order4
card5.style.order = order5
card6.style.order = order6
card7.style.order = order7
card8.style.order = order8
}

function startGame() {

    setTimeout(shuffle,  3000)
    setTimeout(coverBg,  3000)

}
function counterS() {
if (cardP1 >= 2 && cardP2 >= 2 && cardP3 >= 2 && cardP4 >= 2) {
    alert('You won!')
}

}
startGame()

cards.addEventListener('click', counter, false) 
    function counter(event) {
     
        if (event.target == card1 || event.target == card2) {
            cardP1++
            counterS()
        } else if (event.target == card3 || event.target == card4) {
            cardP2++
            counterS()
        } else if (event.target == card5 || event.target == card6) {
            cardP3++
            counterS()
        } else if (event.target == card7 || event.target == card8) {
            cardP4++
            counterS()
        } 
    
    }
