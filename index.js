let homeScore = 0
let awayScore = 0

let homeEl = document.getElementById("home-el")
let awayEl = document.getElementById("away-el")
let winningTeamEl = document.getElementById("winning-team")

// console.log(winningTeamEl)
// console.log(awayEl)

// Home increment

function add1() {
    homeScore = homeScore + 1
    homeEl.textContent = homeScore
}
function add2() {
    homeScore = homeScore + 2
    homeEl.textContent = homeScore
}
function add3() {
    homeScore = homeScore + 3
    homeEl.textContent = homeScore
}

// Away increment

function add1Away() {
    awayScore = awayScore + 1
    awayEl.textContent = awayScore
}
function add2Away() {
    awayScore = awayScore + 2
    awayEl.textContent = awayScore
}
function add3Away() {
    awayScore = awayScore + 3
    awayEl.textContent = awayScore
}