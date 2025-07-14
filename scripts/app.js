function init() {

    const gridElem = document.querySelector(".grid");
    const scoreElem = document.querySelector("#score-display");
    const popupElem = document.querySelector("#popup");
    const popupMessageElem = document.querySelector("#popup-message");
    const popupScoreElem = document.querySelector("#popup-score");
    const overlayElem = document.querySelector("#overlay");
    const restartBtnElem = document.querySelector("#restart");
    const playAgainBtnElem = document.querySelector("#play-again")
    const instructionBtnElem = document.querySelector("#instructions")

    const gridWidth = 4;

    let score = 0;
    let gameOver = false;
    let wonGame = false;
    let grid = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
    let mergedTiles = [];


    function render() {
        scoreElem.textContent = score
        createGrid();
    }

    function createGrid() {

        gridElem.innerHTML = '';

        for (let r = 0; r < gridWidth; r++) {
            for (let c = 0; c < gridWidth; c++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                const val = grid[r][c];
                if (val > 0) {
                    cell.textContent = val;
                    cell.classList.add(`t${val}`);

                    // Check if this tile is in the mergedTiles list
                    if (mergedTiles.some(tile => tile.r === r && tile.c === c)) {
                        cell.classList.add('merged');
                    }
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

        if (gameOver || wonGame) return;

        const prevGrid = grid.map(row => [...row]);

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

        // Only add if grid changed (when tiles merge)
        if (!gridsEqual(prevGrid, grid)) {
            addRandomTile(); 
        }

        render();
        checkWin();
        checkGameOver();
    }


    function moveLeft() {
        mergedTiles = [];
        for (let r = 0; r < gridWidth; r++) {

            let row = grid[r].filter((notEmptyCell) => notEmptyCell)
            for (let i = 0; i < row.length - 1; i++) {

                if (row[i] === row[i + 1]) {
                    row[i] *= 2
                    row[i + 1] = 0
                    score += row[i]
                    mergedTiles.push({ r: r, c: i });
                }
            }

            row = row.filter((notEmptyCell) => notEmptyCell)

            while (row.length < gridWidth) {
                row.push(0)
            }

            grid[r] = row;
        }
    }

    function moveRight() {
        mergedTiles = [];
        for (let r = 0; r < gridWidth; r++) {

            let row = grid[r].filter((notEmptyCell) => notEmptyCell)

            for (let i = row.length - 1; i > 0; i--) {
                if (row[i] === row[i - 1]) {
                    row[i] *= 2
                    row[i - 1] = 0
                    score += row[i]

                    // Calculate final column position after merging
                    let finalCol = gridWidth - row.length + i;
                    mergedTiles.push({ r: r, c: finalCol });
                }
            }
            row = row.filter((notEmptyCell) => notEmptyCell)

            while (row.length < gridWidth) {
                row.unshift(0);
            }

            grid[r] = row;
        }
    }

    function moveUp() {
        mergedTiles = [];
        for (let c = 0; c < gridWidth; c++) {
            let col = []

            for (let r = 0; r < gridWidth; r++) {
                if (grid[r][c] !== 0) {
                    col.push(grid[r][c])
                }
            }

            for (let i = 0; i < col.length - 1; i++) {
                if (col[i] === col[i + 1]) {

                    col[i] *= 2
                    col[i + 1] = 0
                    score += col[i]
                    mergedTiles.push({ r: i, c: c });
                }
            }

            col = col.filter((notEmptyCell) => notEmptyCell)

            while (col.length < gridWidth) {
                col.push(0)
            }

            for (let r = 0; r < gridWidth; r++) {
                grid[r][c] = col[r];
            }
        }
    }

    function moveDown() {
        mergedTiles = [];
        for (let c = 0; c < gridWidth; c++) {
            let col = []

            for (let r = 0; r < gridWidth; r++) {
                if (grid[r][c] !== 0) {
                    col.push(grid[r][c])
                }
            }

            for (let i = col.length - 1; i > 0; i--) {
                if (col[i] === col[i - 1]) {

                    col[i] *= 2
                    col[i - 1] = 0
                    score += col[i]

                    let finalRow = gridWidth - col.length + i;
                    mergedTiles.push({ r: finalRow, c: c });
                }
            }

            col = col.filter((notEmptyCell) => notEmptyCell)

            while (col.length < gridWidth) {
                col.unshift(0)
            }

            for (let r = 0; r < gridWidth; r++) {
                grid[r][c] = col[r];
            }
        }
    }

    function checkWin() {
        for (let r = 0; r < gridWidth; r++) {
            for (let c = 0; c < gridWidth; c++) {
                if (grid[r][c] === 2048 && !wonGame) {
                    wonGame = true;

                    setTimeout(() => {
                        showPopup("You Won 🎉")
                        confetti()
                    }, 800);

                    return true;
                }
            }
        }
        return false;
    }

    function checkGameOver() {
        // check if theres 0 cells which means game is not over
        for (let row of grid) {
            if (row.includes(0)) return false;
        }

        // check for possible merges
        for (let r = 0; r < gridWidth; r++) {
            for (let c = 0; c < gridWidth; c++) {
                let current = grid[r][c];
                if (
                    (c < gridWidth - 1 && current === grid[r][c + 1]) ||
                    (r < gridWidth - 1 && current === grid[r + 1][c])
                ) {
                    return false;
                }
            }
        }

        gameOver = true;
        setTimeout(() => {
            showPopup("You Lost 💔");
        }, 1000);

        return true;
    }

    function showPopup(message) {

        popupMessageElem.textContent = message;
        popupScoreElem.textContent = "Score: " + score;

        popupElem.classList.remove("hidden");
        popupElem.classList.add("show");

        overlayElem.classList.remove("hidden");
        overlayElem.classList.add("show");
    }

    function gridsEqual(a, b) {
        for (let r = 0; r < gridWidth; r++) {
            for (let c = 0; c < gridWidth; c++) {
                if (a[r][c] !== b[r][c]) return false;
            }
        }
        return true;
    }


    document.addEventListener('keydown', handleKeyPress);
    restartBtnElem.addEventListener('click', init);

    addRandomTile();
    addRandomTile();
    render();
}

document.addEventListener('DOMContentLoaded', init)