const cells = document.querySelectorAll(".cell");
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
}