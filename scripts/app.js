function init(){

    const gridElem = document.querySelector(".grid");
    const scoreElem = document.querySelector("#score-display");
    const gameOverElem = document.querySelector("#game-over");

    let score = 0;
    let cells = [];
    const gridWidth = 4;
    const numberOfCells = gridWidth * gridWidth;
    let gameOver = false;
    let wonGame = false;

    function render(){
        createGrid();
    }

    function createGrid(){
        for (let i=0; i < numberOfCells; i++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = i;
            cells.push(cell);
            gridElem.appendChild(cell);
            
        }

    }

    render()
}

document.addEventListener('DOMContentLoaded',init)