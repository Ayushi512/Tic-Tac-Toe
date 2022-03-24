export default class Game {
    constructor() {
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }

    nextTurn(){
        if(this.turn == "X") {
            this.turn = "O";
        } else {
            this.turn = "X";
        }
    }

    makeMove(i){
        if(this.endOfGame()){
            return;
        }
        if(this.board[i]) return;
        this.board[i] = this.turn;
        let winingCombination = this.findWiningCombinations();
        if(winingCombination){
        let won = document.querySelector(".wining-message");
        document.querySelector('[data-winingmessage]').innerText= this.board[winingCombination[0]] + " won !";
        won.classList.add("show");
        }else if(this.checkBoardFilled()>16){
            let won = document.querySelector(".wining-message");
            document.querySelector('[data-winingmessage]').innerText= "Draw !";
            won.classList.add("show");
        } else {
            this.nextTurn();
        }
    }

    checkBoardFilled(){
        return this.board.toString().length;
    }

    findWiningCombinations() {
        const winingCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ]

        for(const combination of winingCombinations) {
            const [a,b,c] = combination;

            if(this.board[a] &&
             (this.board[a] === this.board[b] ) &&
              (this.board[a] === this.board[c])) {
                return combination;
            }
           
        }
        return null;
    }

    endOfGame() {
        let winingCombination = this.findWiningCombinations();
        if(winingCombination) {
            return true;
        } else {
            return false;
        }
    }
}