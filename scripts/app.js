function init() {

    const gridElem = document.querySelector(".grid");
    const scoreElem = document.querySelector("#score-display");
    const gameOverElem = document.querySelector("#game-over");
    const restartBtnElem = document.querySelector("#restart");


    const gridWidth = 4;
    const numberOfCells = gridWidth * gridWidth;

    let score = 0;
    let cells = [];
    let grid = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

    let gameOver = false;
    let wonGame = false;

    function render() {
        score.textContent = score
        createGrid();

    }

    function createGrid() {

        gridElem.innerHTML = '';

        for (let r = 0; r < gridWidth; r++) {
            for (let c = 0; c < gridWidth; c++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.textContent = grid[r][c] !== 0 ? grid[r][c] : '';
                if (grid[r][c] > 0) {
                    cell.classList.add(`t${grid[r][c]}`);
                }
                gridElem.appendChild(cell);
            }
        }
    }


    function addRandomTile() {
        // emptyCells stores the position of each empty cell as an object
        let emptyCells = [];
        for (let r = 0; r < gridWidth; r++) {
            for (let c = 0; c < gridWidth; c++) {
                // {r , c} is an object shorthand
                if (grid[r][c] === 0) {
                    emptyCells.push({ r, c });
                }
            }
        }

        if (emptyCells.length > 0) {

            let randomIndex = Math.floor(Math.random() * emptyCells.length);
            let randomCell = emptyCells[randomIndex];
            let r = randomCell.r;
            let c = randomCell.c;

            grid[r][c] = Math.random() > 0.1 ? 2 : 4;
        }

    }

    function handleKeyPress(event) {

        if (gameOver) return;

        /* This switch statement was taken from stackoverflow, here is the link of the question (answerd by Gibolt):
        https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
        The movement functions in each case were added by Ayah
        */
        switch (event.key) {
            case "ArrowLeft":
                moveLeft()
                break;
            case "ArrowRight":
                moveRight()
                break;
            case "ArrowUp":
                moveUp()
                break;
            case "ArrowDown":
                moveDown()
                break;
        }

        addRandomTile();
        render()

    }


    function moveLeft(){
        for (let r = 0; r < gridWidth ; r++){
            let row = grid[r].filter((value) => value)
            for (let i = 0; i < row.length - 1; i++){

                if(row[i] === row[i + 1]){
                    row[i] *= 2
                    row[i + 1] = 0
                    score += row[i]
                }
            }

            row = row.filter((value) => value)

            while(row.length < gridWidth){
                row.push(0)
            }

            grid[r] = row;
        }
    }

    function moveRight(){
       for (let r = 0; r < gridWidth; r++) {
            let row = grid[r].filter((value) => value)

            for (let i = row.length - 1; i > 0; i--) {
                if (row[i] === row[i - 1]) {
                    row[i] *= 2
                    row[i - 1] = 0
                    score += row[i]
                }
            }
             row = row.filter((value) => value)

            while (row.length < gridWidth) {
                row.unshift(0);
            }

            grid[r] = row;
        }
    }


    function moveUp(){
        
    }

    function moveDown(){

    }


    document.addEventListener('keydown', handleKeyPress);
    restartBtnElem.addEventListener('click',init);

    addRandomTile();
    addRandomTile();
    render();
}

document.addEventListener('DOMContentLoaded', init)