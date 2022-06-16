const playerTxt = document.querySelector("#playerTxt");
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
}