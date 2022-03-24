import Game from "./Game.js";
import GameView from"./GameView.js";

let game = new Game();
let gameView = new GameView();

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click",() => {
        onTileClick(tile.dataset.index);
    })
})

document.querySelector(".restart").addEventListener("click", () => {
    onRestartClick();
})
document.querySelector("#restartButton").addEventListener("click", () => {
    onRestartClick();
})


function onTileClick(i) {
    game.makeMove(i);
    gameView.updateBoard(game)
}

function onRestartClick() {
    let won = document.querySelector(".wining-message");
    document.querySelector('[data-winingmessage]').innerText= '';
    won.classList.remove("show");
    game = new Game();
    gameView.updateBoard(game);
}
gameView.updateBoard(game);