const dice1 = document.getElementById("img-dice-1")
const dice2 = document.getElementById("img-dice-2")
const winner = document.querySelector("h1");

function Refresh(number, dice) {
    switch (number) {
        case 1:
            dice.src = "images/dice1.png"
            break;
        case 2:
            dice.src = "images/dice2.png"
            break;
        case 3:
            dice.src = "images/dice3.png"
            break;
        case 4:
            dice.src = "images/dice4.png"
            break;
        case 5:
            dice.src = "images/dice5.png"
            break;
        case 6:
            dice.src = "images/dice6.png"
            break;
    }
}


function WhoIsTheWinner(diceNumber1, diceNumber2) {
    if (diceNumber1 > diceNumber2) {
        winner.innerText = "player1 win"
    }
    else if (diceNumber1 < diceNumber2) {
        winner.innerText = "player2 win"
    }
    else {
        winner.innerText = "Match Draw"
    }
}


function StartGame(params) {
    var diceNumber1 = Math.floor(Math.random() * 6) + 1;
    var diceNumber2 = Math.floor(Math.random() * 6) + 1;
    Refresh(diceNumber1, dice1);
    Refresh(diceNumber2, dice2);
    WhoIsTheWinner(diceNumber1, diceNumber2)
}

