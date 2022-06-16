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

// ** TIC TAC TOE GAME **

/*const cells = document.querySelectorAll(".cell");
const statusTxt = document.querySelector("#statusTxt");
const resetBtn = document.querySelector("#resetBtn");

const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initGame();

function initGame() {
    cells.forEach((cell) => cell.addEventListener("click", cellClicked));
    resetBtn.addEventListener("click", resetGame);
    statusTxt.textContent = `${currentPlayer}'s Turn!`;
    running = true;
}
function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");
    if (options[cellIndex] != "" || !running) {
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer() {
    currentPlayer = currentPlayer == "X" ? "O" : "X";
    statusTxt.textContent = `${currentPlayer}'s Turn!`;
}
function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winCondition.length; i++) {
        const condition = winCondition[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        statusTxt.textContent = `${currentPlayer}'s Won!`;
        running = false;
    } else if (!options.includes("")) {
        statusTxt.textContent = `Draw!`;
        running = false;
    } else {
        changePlayer();
    }
}
function resetGame() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusTxt.textContent = `${currentPlayer}'s Turn!`;
    cells.forEach((cell) => (cell.textContent = ""));
    running = true;
}*/
