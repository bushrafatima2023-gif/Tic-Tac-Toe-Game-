console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.wav");
let gameover = new Audio("gameover.mp3");

let turn = "X";
let game = false;
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};

// function to check for win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 0, 50, 0],     // top row
        [3, 4, 5, 0, 150, 0],    // middle row
        [6, 7, 8, 0, 250, 0],    // bottom row
        [0, 3, 6, -100, 150, 90],// left col
        [1, 4, 7, 0, 150, 90],   // mid col
        [2, 5, 8, 100, 150, 90], // right col
        [0, 4, 8, 0, 150, 45],   // diag TL → BR
        [2, 4, 6, 0, 150, 135]   // diag TR → BL
    ];



    wins.forEach((e) => {
        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            document.querySelector(".info").innerText =
                boxtext[e[0]].innerText + " Won";
            game = true;
            document.querySelector(".imgbox img").style.width = "200px";

            // Position the winning line
            let line = document.querySelector(".line");
            line.style.width = "300px"; // enough to cover row/col
            line.style.transform = `translate(${e[3]}px, ${e[4]}px) rotate(${e[5]}deg)`;

        }
    });
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "" && !game) {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!game) {
                document.querySelector(".info").innerText = "Turn for " + turn;
                document.querySelector(".line").style.width = "360px"; // length to cover row/col
                document.querySelector(".line").style.transform =
                    `translate(${e[3]}px, ${e[4]}px) rotate(${e[5]}deg)`;
            }
        }
    });
});

// Reset Logic
Reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach((element) => {
        element.innerText = "";
    });
    turn = "X";
    game = false;

    document.querySelector(".info").innerText = "Turn for " + turn;
    document.querySelector(".imgbox img").style.width = "0px";


});
