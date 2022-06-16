const gameBoard = document.querySelector("#gameBoard");
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
}