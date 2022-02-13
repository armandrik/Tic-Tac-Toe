//html elements
const statusBar = document.querySelector(".turn-play");
const refreshGame = document.querySelector(".reset");
const gameCell = document.querySelectorAll(".board");

// game varibles
let gameIsLive = true;
let xIsNext = true;
let xSymbol = "✖";
let oSymbol = "〇";

//funcion
const letterToSymbol = (letter) => letter === "x" ? xSymbol : oSymbol;

const countResaultX = () => {
    var value = parseInt(document.querySelector('.x-round-won').innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.querySelector('.x-round-won').innerHTML = value;
}

const countResaultO = () => {
    var value = parseInt(document.querySelector('.o-round-won').innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.querySelector('.o-round-won').innerHTML = value;
}

const countResaultTie = () => {
    var value = parseInt(document.querySelector('.ties-rounad').innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.querySelector('.ties-rounad').innerHTML = value;
}

const checkGameLogic = () => {
    const c1 = gameCell[0].classList[1];
    const c2 = gameCell[1].classList[1];
    const c3 = gameCell[2].classList[1];
    const c4 = gameCell[3].classList[1];
    const c5 = gameCell[4].classList[1];
    const c6 = gameCell[5].classList[1];
    const c7 = gameCell[6].classList[1];
    const c8 = gameCell[7].classList[1];
    const c9 = gameCell[8].classList[1];

    //game logic
    if (c1 && c1 === c2 && c1 === c3) {
        statusBar.innerHTML = letterToSymbol(c1) + " Has Won";
        if (c1 === "x") {
            statusBar.style.boxShadow = "0px 5px 1px -2px #45b3a9";
            gameCell[0].style.backgroundColor = "#45b3a9";
            gameCell[1].style.backgroundColor = "#45b3a9";
            gameCell[2].style.backgroundColor = "#45b3a9";
            gameCell[0].innerHTML = "✖";
            gameCell[1].innerHTML = "✖";
            gameCell[2].innerHTML = "✖";
            gameCell[0].classList.add("x-design");
            gameCell[1].classList.add("x-design");
            gameCell[2].classList.add("x-design");
            countResaultX();
        } else {
            statusBar.style.boxShadow = "0px 5px 1px -2px #e6c149";
            gameCell[0].style.backgroundColor = "#e6c149";
            gameCell[1].style.backgroundColor = "#e6c149";
            gameCell[2].style.backgroundColor = "#e6c149";
            gameCell[0].innerHTML = "〇";
            gameCell[1].innerHTML = "〇";
            gameCell[2].innerHTML = "〇";
            gameCell[0].classList.add("o-design");
            gameCell[1].classList.add("o-design");
            gameCell[2].classList.add("o-design");
            gameCell[0].classList.remove('o');
            gameCell[1].classList.remove('o');
            gameCell[2].classList.remove('o');
            countResaultO();
        }
        gameIsLive = false;
    } else if (c4 && c4 === c5 && c4 === c6) {
        statusBar.innerHTML = letterToSymbol(c4) + " Has Won";
        if (c4 === "x") {
            statusBar.style.boxShadow = "0px 5px 1px -2px #45b3a9";
            gameCell[3].style.backgroundColor = "#45b3a9";
            gameCell[4].style.backgroundColor = "#45b3a9";
            gameCell[5].style.backgroundColor = "#45b3a9";
            gameCell[3].innerHTML = "✖";
            gameCell[4].innerHTML = "✖";
            gameCell[5].innerHTML = "✖";
            gameCell[3].classList.add("x-design");
            gameCell[4].classList.add("x-design");
            gameCell[5].classList.add("x-design");
            countResaultX();
        } else {
            statusBar.style.boxShadow = "0px 5px 1px -2px #e6c149";
            gameCell[3].style.backgroundColor = "#e6c149";
            gameCell[4].style.backgroundColor = "#e6c149";
            gameCell[5].style.backgroundColor = "#e6c149";
            gameCell[3].innerHTML = "〇";
            gameCell[4].innerHTML = "〇";
            gameCell[5].innerHTML = "〇";
            gameCell[3].classList.add("o-design");
            gameCell[4].classList.add("o-design");
            gameCell[5].classList.add("o-design");
            gameCell[3].classList.remove('o');
            gameCell[4].classList.remove('o');
            gameCell[5].classList.remove('o');
            countResaultO();
        }
        gameIsLive = false;
    } else if (c7 && c7 === c8 && c7 === c9) {
        statusBar.innerHTML = letterToSymbol(c7) + " Has Won";
        if (c7 === "x") {
            statusBar.style.boxShadow = "0px 5px 1px -2px #45b3a9";
            gameCell[6].style.backgroundColor = "#45b3a9";
            gameCell[7].style.backgroundColor = "#45b3a9";
            gameCell[8].style.backgroundColor = "#45b3a9";
            gameCell[6].innerHTML = "✖";
            gameCell[7].innerHTML = "✖";
            gameCell[8].innerHTML = "✖";
            gameCell[6].classList.add("x-design");
            gameCell[7].classList.add("x-design");
            gameCell[8].classList.add("x-design");
            gameCell[6].classList.remove("x");
            gameCell[7].classList.remove("x");
            gameCell[8].classList.remove("x");
            countResaultX();
        } else {
            statusBar.style.boxShadow = "0px 5px 1px -2px #e6c149";
            gameCell[6].style.backgroundColor = "#e6c149";
            gameCell[7].style.backgroundColor = "#e6c149";
            gameCell[8].style.backgroundColor = "#e6c149";
            gameCell[6].innerHTML = "〇";
            gameCell[7].innerHTML = "〇";
            gameCell[8].innerHTML = "〇";
            gameCell[6].classList.add("o-design");
            gameCell[7].classList.add("o-design");
            gameCell[8].classList.add("o-design");
            gameCell[6].classList.remove('o');
            gameCell[7].classList.remove('o');
            gameCell[8].classList.remove('o');
            countResaultO();
        }
        gameIsLive = false;
    } else if (c1 && c1 === c4 && c1 === c7) {
        statusBar.innerHTML = letterToSymbol(c1) + " Has Won";
        if (c1 === "x") {
            statusBar.style.boxShadow = "0px 5px 1px -2px #45b3a9";
            gameCell[0].style.backgroundColor = "#45b3a9";
            gameCell[3].style.backgroundColor = "#45b3a9";
            gameCell[6].style.backgroundColor = "#45b3a9";
            gameCell[0].innerHTML = "✖";
            gameCell[3].innerHTML = "✖";
            gameCell[6].innerHTML = "✖";
            gameCell[0].classList.add("x-design");
            gameCell[3].classList.add("x-design");
            gameCell[6].classList.add("x-design");
            gameCell[0].classList.remove("x");
            gameCell[3].classList.remove("x");
            gameCell[6].classList.remove("x");
            countResaultX();
        } else {
            statusBar.style.boxShadow = "0px 5px 1px -2px #e6c149";
            gameCell[0].style.backgroundColor = "#e6c149";
            gameCell[3].style.backgroundColor = "#e6c149";
            gameCell[6].style.backgroundColor = "#e6c149";
            gameCell[0].innerHTML = "〇";
            gameCell[3].innerHTML = "〇";
            gameCell[6].innerHTML = "〇";
            gameCell[0].classList.add("o-design");
            gameCell[3].classList.add("o-design");
            gameCell[6].classList.add("o-design");
            gameCell[0].classList.remove('o');
            gameCell[3].classList.remove('o');
            gameCell[6].classList.remove('o');
            countResaultO();
        }
        gameIsLive = false;
    } else if (c2 && c2 === c5 && c2 === c8) {
        statusBar.innerHTML = letterToSymbol(c2) + " Has Won";
        if (c2 === "x") {
            statusBar.style.boxShadow = "0px 5px 1px -2px #45b3a9";
            gameCell[1].style.backgroundColor = "#45b3a9";
            gameCell[4].style.backgroundColor = "#45b3a9";
            gameCell[7].style.backgroundColor = "#45b3a9";
            gameCell[1].innerHTML = "✖";
            gameCell[4].innerHTML = "✖";
            gameCell[7].innerHTML = "✖";
            gameCell[1].classList.add("x-design");
            gameCell[4].classList.add("x-design");
            gameCell[7].classList.add("x-design");
            gameCell[1].classList.remove("x");
            gameCell[4].classList.remove("x");
            gameCell[7].classList.remove("x");
            countResaultX();
        } else {
            statusBar.style.boxShadow = "0px 5px 1px -2px #e6c149";
            gameCell[1].style.backgroundColor = "#e6c149";
            gameCell[4].style.backgroundColor = "#e6c149";
            gameCell[7].style.backgroundColor = "#e6c149";
            gameCell[1].innerHTML = "〇";
            gameCell[4].innerHTML = "〇";
            gameCell[7].innerHTML = "〇";
            gameCell[1].classList.add("o-design");
            gameCell[4].classList.add("o-design");
            gameCell[7].classList.add("o-design");
            gameCell[1].classList.remove('o');
            gameCell[4].classList.remove('o');
            gameCell[7].classList.remove('o');
            countResaultO();
        }
        gameIsLive = false;
    } else if (c3 && c3 === c6 & c3 === c9) {
        statusBar.innerHTML = letterToSymbol(c3) + " Has Won";
        if (c3 === "x") {
            statusBar.style.boxShadow = "0px 5px 1px -2px #45b3a9";
            gameCell[2].style.backgroundColor = "#45b3a9";
            gameCell[5].style.backgroundColor = "#55b3a9";
            gameCell[8].style.backgroundColor = "#45b3a9";
            gameCell[2].innerHTML = "✖";
            gameCell[5].innerHTML = "✖";
            gameCell[8].innerHTML = "✖";
            gameCell[2].classList.add("x-design");
            gameCell[5].classList.add("x-design");
            gameCell[8].classList.add("x-design");
            gameCell[2].classList.remove("x");
            gameCell[5].classList.remove("x");
            gameCell[8].classList.remove("x");
            countResaultX();
        } else {
            statusBar.style.boxShadow = "0px 5px 1px -2px #e6c149";
            gameCell[2].style.backgroundColor = "#e6c149";
            gameCell[5].style.backgroundColor = "#e6c149";
            gameCell[8].style.backgroundColor = "#e6c149";
            gameCell[2].innerHTML = "〇";
            gameCell[5].innerHTML = "〇";
            gameCell[8].innerHTML = "〇";
            gameCell[2].classList.add("o-design");
            gameCell[5].classList.add("o-design");
            gameCell[8].classList.add("o-design");
            gameCell[2].classList.remove('o');
            gameCell[5].classList.remove('o');
            gameCell[8].classList.remove('o');
            countResaultO();
        }
        gameIsLive = false;
    } else if (c1 && c1 === c5 && c1 === c9) {
        statusBar.innerHTML = letterToSymbol(c1) + " Has Won";
        if (c1 === "x") {
            statusBar.style.boxShadow = "0px 5px 1px -2px #45b3a9";
            gameCell[0].style.backgroundColor = "#45b3a9";
            gameCell[4].style.backgroundColor = "#55b3a9";
            gameCell[8].style.backgroundColor = "#45b3a9";
            gameCell[0].innerHTML = "✖";
            gameCell[4].innerHTML = "✖";
            gameCell[8].innerHTML = "✖";
            gameCell[0].classList.add("x-design");
            gameCell[4].classList.add("x-design");
            gameCell[8].classList.add("x-design");
            gameCell[0].classList.remove("x");
            gameCell[4].classList.remove("x");
            gameCell[8].classList.remove("x");
            countResaultX();
        } else {
            statusBar.style.boxShadow = "0px 5px 1px -2px #e6c149";
            gameCell[0].style.backgroundColor = "#e6c149";
            gameCell[4].style.backgroundColor = "#e6c149";
            gameCell[8].style.backgroundColor = "#e6c149";
            gameCell[0].innerHTML = "〇";
            gameCell[4].innerHTML = "〇";
            gameCell[8].innerHTML = "〇";
            gameCell[0].classList.add("o-design");
            gameCell[4].classList.add("o-design");
            gameCell[8].classList.add("o-design");
            gameCell[0].classList.remove('o');
            gameCell[4].classList.remove('o');
            gameCell[8].classList.remove('o');
            countResaultO();
        }
        gameIsLive = false;
    } else if (c3 && c3 === c5 && c3 === c7) {
        statusBar.innerHTML = letterToSymbol(c1) + " Has Won";
        if (c3 === "x") {
            statusBar.style.boxShadow = "0px 5px 1px -2px #45b3a9";
            gameCell[2].style.backgroundColor = "#45b3a9";
            gameCell[4].style.backgroundColor = "#55b3a9";
            gameCell[6].style.backgroundColor = "#45b3a9";
            gameCell[2].innerHTML = "✖";
            gameCell[4].innerHTML = "✖";
            gameCell[6].innerHTML = "✖";
            gameCell[2].classList.add("x-design");
            gameCell[4].classList.add("x-design");
            gameCell[6].classList.add("x-design");
            gameCell[2].classList.remove("x");
            gameCell[4].classList.remove("x");
            gameCell[6].classList.remove("x");
            countResaultX();
        } else {
            statusBar.style.boxShadow = "0px 5px 1px -2px #e6c149";
            gameCell[2].style.backgroundColor = "#e6c149";
            gameCell[4].style.backgroundColor = "#e6c149";
            gameCell[6].style.backgroundColor = "#e6c149";
            gameCell[2].innerHTML = "〇";
            gameCell[4].innerHTML = "〇";
            gameCell[6].innerHTML = "〇";
            gameCell[2].classList.add("o-design");
            gameCell[4].classList.add("o-design");
            gameCell[6].classList.add("o-design");
            gameCell[2].classList.remove('o');
            gameCell[4].classList.remove('o');
            gameCell[6].classList.remove('o');
            countResaultO();
        }
        gameIsLive = false;
    } else if (c1 && c2 && c3 && c4 && c5 && c6 && c7 && c8 && c9) {
        statusBar.innerHTML = "DRAW";
        statusBar.style.boxShadow = "0px 5px 1px -2px #b0bfbf";
        gameCell[0].style.backgroundColor = "#b0bfbf";
        gameCell[1].style.backgroundColor = "#b0bfbf";
        gameCell[2].style.backgroundColor = "#b0bfbf";
        gameCell[3].style.backgroundColor = "#b0bfbf";
        gameCell[4].style.backgroundColor = "#b0bfbf";
        gameCell[5].style.backgroundColor = "#b0bfbf";
        gameCell[6].style.backgroundColor = "#b0bfbf";
        gameCell[7].style.backgroundColor = "#b0bfbf";
        gameCell[8].style.backgroundColor = "#b0bfbf";
        countResaultTie();
    }
}


// event handler

const handleReset = (e) => {
    for (const cell of gameCell) {
        statusBar.innerHTML = "✖ TURN"
        statusBar.style.boxShadow = "0px 5px 1px -2px #45b3a9";
        cell.classList.remove("x");
        cell.classList.remove("o");
        cell.classList.remove("x-design");
        cell.classList.remove("o-design");
        cell.innerHTML = "";
        cell.style.boxShadow = "0px 5px 1px -2px #41adfd9e";
        cell.style.backgroundColor = "#193845";
    }
    xIsNext = true;
    gameIsLive = true;
}

const handleCellClick = (e) => {
    const classList = e.target.classList;
    const location = e.target;

    if (!gameIsLive || classList[1] == "x" || classList[1] == "o") {
        return;
    }

    if (xIsNext) {
        e.target.classList.add('x');
        statusBar.innerHTML = "〇 TURN";
        statusBar.style.boxShadow = "0px 5px 1px -2px #e6c149";
        location.style.boxShadow = "0px 5px 1px -2px #45b3a9";
        checkGameLogic();
        xIsNext = !xIsNext
    } else {
        e.target.classList.add('o');
        statusBar.innerHTML = "✖ TURN";
        statusBar.style.boxShadow = "0px 5px 1px -2px #45b3a9";
        location.style.boxShadow = "0px 5px 1px -2px #e6c149";
        checkGameLogic();
        xIsNext = !xIsNext
    }
}



// event listeners
refreshGame.addEventListener("click", handleReset);

for (const cell of gameCell) {
    cell.addEventListener("click", handleCellClick);
}