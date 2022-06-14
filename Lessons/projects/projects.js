// ** STOPWATCH SCRIPTS **

/*const timerDisplay = document.querySelector("#timerDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTimer, 1000);
    }
});
pauseBtn.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timerDisplay.textContent = "00:00:00";
});

function updateTimer() {
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    hrs = pad(hrs);
    mins = pad(mins);
    secs = pad(secs);

    timerDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit) {
        return ("0" + unit).length > 2 ? unit : "0" + unit;
    }
}*/

// ** JO-KEN-PO GAME **

/*const playerTxt = document.querySelector("#playerTxt");
const pcTxt = document.querySelector("#pcTxt");
const resultTxt = document.querySelector("#resultTxt");
const choiceBtn = document.querySelectorAll(".gameBtn");
let player;
let pc;
let result;

choiceBtn.forEach((btn) =>
    btn.addEventListener("click", () => {
        player = btn.textContent;
        pcTurn();
        playerTxt.textContent = `Jogador: ${player}`;
        pcTxt.textContent = `Computador: ${pc}`;
        resultTxt.textContent = `Resultado: ${checkWinner()}`;
    })
);

function pcTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            pc = "Pedra";
            break;
        case 2:
            pc = "Papel";
            break;
        case 3:
            pc = "Tesoura";
            break;
    }
}

function checkWinner() {
    if (player == pc) {
        return "Empate!";
    } else if (pc == "Pedra") {
        return player == "Papel" ? "Você Ganhou!" : "Você Perdeu!";
    } else if (pc == "Papel") {
        return player == "Tesoura" ? "Você Ganhou!" : "Você Perdeu!";
    } else if (pc == "Tesoura") {
        return player == "Pedra" ? "Você Ganhou!" : "Você Perdeu!";
    }
}*/
