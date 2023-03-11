//Reset
// let newGame = document.getElementById("reset")


//Home
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")


let homeStoreEl = document.getElementById("home-score")
let homeScore = 0

//Guest
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")

let guestStoreEl =document.getElementById("guest-score")
let guestScore = 0



//Home 
function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.innerHTML = homeScore
}

function increaseHomeScoreTwo() { 
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}


//Guest
function increaseGuestScoreOne() {
    guestScore += 1
    guestStoreEl.innerHTML = guestScore
}

function increaseGuestScoreTwo() {
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

function increaseGuestScoreThree() {
    guestScore += 3
    guestStoreEl.textContent = guestScore
}


//Reset
function resetGame() {
     homeScore = 0
     guestScore = 0
     homeStoreEl.innerHTML = homeScore
     guestStoreEl.innerHTML = guestScore
    
}
