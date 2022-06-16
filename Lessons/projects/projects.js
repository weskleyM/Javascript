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

// ** SNAKE GAME **

/*const gameBoard = document.querySelector("#gameBoard");
const context = gameBoard.getContext("2d");
const scoreTxt = document.querySelector("#gameScore");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "white";
const snakeColor = "skyblue";
const snakeBorder = "black";
const foodColor = "red";
const unitySize = 25;
let running = false;
let xVel = unitySize;
let yVel = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
    { x: unitySize * 4, y: 0 },
    { x: unitySize * 3, y: 0 },
    { x: unitySize * 2, y: 0 },
    { x: unitySize, y: 0 },
    { x: 0, y: 0 },
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart() {
    running = true;
    scoreTxt.textContent = score;
    createFood();
    drawFood();
    nextTick();
}
function nextTick() {
    if (running) {
        setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 75);
    } else {
        displayGameOver();
    }
}
function clearBoard() {
    context.fillStyle = boardBackground;
    context.fillRect(0, 0, gameWidth, gameHeight);
}
function createFood() {
    function randomFood(max, min) {
        const randNum =
            Math.round((Math.random() * (max - min) + min) / unitySize) *
            unitySize;
        return randNum;
    }
    foodX = randomFood(0, gameWidth - unitySize);
    foodY = randomFood(0, gameWidth - unitySize);
}
function drawFood() {
    context.fillStyle = foodColor;
    context.fillRect(foodX, foodY, unitySize, unitySize);
}
function moveSnake() {
    const head = { x: snake[0].x + xVel, y: snake[0].y + yVel };
    snake.unshift(head);
    if (snake[0].x == foodX && snake[0].y == foodY) {
        score++;
        scoreTxt.textContent = score;
        createFood();
    } else {
        snake.pop();
    }
}
function drawSnake() {
    context.fillStyle = snakeColor;
    context.strokeStyle = snakeBorder;
    snake.forEach((snakePart) => {
        context.fillRect(snakePart.x, snakePart.y, unitySize, unitySize);
        context.strokeRect(snakePart.x, snakePart.y, unitySize, unitySize);
    });
}
function changeDirection() {
    const keyPressed = event.keyCode;
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingLeft = xVel == -unitySize;
    const goingUp = yVel == -unitySize;
    const goingRight = xVel == unitySize;
    const goingDown = yVel == unitySize;

    switch (true) {
        case keyPressed == LEFT && !goingRight:
            xVel = -unitySize;
            yVel = 0;
            break;
        case keyPressed == UP && !goingDown:
            xVel = 0;
            yVel = -unitySize;
            break;
        case keyPressed == RIGHT && !goingLeft:
            xVel = unitySize;
            yVel = 0;
            break;
        case keyPressed == DOWN && !goingUp:
            xVel = 0;
            yVel = unitySize;
            break;
    }
}
function checkGameOver() {
    switch (true) {
        case snake[0].x < 0:
            running = false;
            break;
        case snake[0].y < 0:
            running = false;
            break;
        case snake[0].x >= gameWidth:
            running = false;
            break;
        case snake[0].y >= gameHeight:
            running = false;
            break;
    }
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
            running = false;
        }
    }
}
function displayGameOver() {
    context.font = "50px MV Boli";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.fillText("Game Over!", gameWidth / 2, gameHeight / 2);
    running = false;
}
function resetGame() {
    score = 0;
    xVel = unitySize;
    yVel = 0;
    snake = [
        { x: unitySize * 4, y: 0 },
        { x: unitySize * 3, y: 0 },
        { x: unitySize * 2, y: 0 },
        { x: unitySize, y: 0 },
        { x: 0, y: 0 },
    ];
    gameStart();
}*/

// 7h34m30s