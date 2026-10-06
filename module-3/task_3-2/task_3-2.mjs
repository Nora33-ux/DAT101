"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let countingUp = "";

for (let number = 1; number <= 10; number++) {
    countingUp += number + " ";
}

printOut(countingUp);

let countingDown = "";

for (let number = 10; number >= 1; number--) {
    countingDown += number + " ";
}

printOut(countingDown);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let targetNumber = 45;
let guessedNumber = 0;

while (guessedNumber !== targetNumber) {
    guessedNumber = Math.floor(Math.random() * 60) + 1;
}

printOut("The number is " + guessedNumber);



printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let targetNumber3 = 456738;
let guessedNumber3 = 0;
let numberOfGuesses = 0;

let startTime = Date.now();

while (guessedNumber3 !== targetNumber3) {
    guessedNumber3 = Math.floor(Math.random() * 1000000) + 1;
    numberOfGuesses++;
}

let endTime = Date.now();
let timeUsed = endTime - startTime;

printOut("The number is " + guessedNumber3);
printOut("Number of guesses: " + numberOfGuesses);
printOut("Time used: " + timeUsed + " milliseconds");




printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for (let number = 2; number < 200; number++) {

    let divisor = 2;
    let isPrime = true;

    while (divisor < number) {

        if (number % divisor === 0) {
            isPrime = false;
            break;
        }

        divisor++;
    }

    if (isPrime) {
        printOut(number);
    }
}




printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for (let row = 1; row <= 7; row++) {

    let line = "";

    for (let column = 1; column <= 9; column++) {
        line += "K" + column + "R" + row + " ";
    }

    printOut(line);
}



printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for (let student = 1; student <= 5; student++) {

    let points = Math.floor(Math.random() * 236) + 1;
    let percentage = (points / 236) * 100;
    let grade;

    if (percentage >= 89) {
        grade = "A";
    } else if (percentage >= 77) {
        grade = "B";
    } else if (percentage >= 65) {
        grade = "C";
    } else if (percentage >= 53) {
        grade = "D";
    } else if (percentage >= 41) {
        grade = "E";
    } else {
        grade = "F";
    }

    printOut("Student " + student + ": " + points + " points, grade: " + grade);
}




printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Lager 6 tilfeldige terninger
function rollDice() {
    let dice = [];

    for (let i = 0; i < 6; i++) {
        dice.push(Math.floor(Math.random() * 6) + 1);
    }

    return dice;
}


// ---------- 3 PAR ----------

let throwsPairs = 0;
let pairsFound = false;
let pairDice;

while (!pairsFound) {

    pairDice = rollDice();
    throwsPairs++;

    let sortedDice = [...pairDice].sort();

    if (
        sortedDice[0] === sortedDice[1] &&
        sortedDice[2] === sortedDice[3] &&
        sortedDice[4] === sortedDice[5] &&
        sortedDice[1] !== sortedDice[2] &&
        sortedDice[3] !== sortedDice[4]
    ) {
        pairsFound = true;
    }
}

printOut(pairDice.join(","));
printOut("3 Par");
printOut("På " + throwsPairs + " kast!");


// ---------- FULL STRAIGHT ----------

let throwsStraight = 0;
let straightFound = false;
let straightDice;

while (!straightFound) {

    straightDice = rollDice();
    throwsStraight++;

    let sortedDice = [...straightDice].sort();

    if (
        sortedDice[0] === 1 &&
        sortedDice[1] === 2 &&
        sortedDice[2] === 3 &&
        sortedDice[3] === 4 &&
        sortedDice[4] === 5 &&
        sortedDice[5] === 6
    ) {
        straightFound = true;
    }
}

printOut(newLine);
printOut(straightDice.join(","));
printOut("Full straight");
printOut("På " + throwsStraight + " Kast!");


// ---------- TÅRN ----------

let throwsTower = 0;
let towerFound = false;
let towerDice;

while (!towerFound) {

    towerDice = rollDice();
    throwsTower++;

    let sortedDice = [...towerDice].sort();

    let firstTower =
        sortedDice[0] === sortedDice[1] &&
        sortedDice[2] === sortedDice[3] &&
        sortedDice[3] === sortedDice[4] &&
        sortedDice[4] === sortedDice[5] &&
        sortedDice[1] !== sortedDice[2];

    let secondTower =
        sortedDice[0] === sortedDice[1] &&
        sortedDice[1] === sortedDice[2] &&
        sortedDice[2] === sortedDice[3] &&
        sortedDice[4] === sortedDice[5] &&
        sortedDice[3] !== sortedDice[4];

    if (firstTower || secondTower) {
        towerFound = true;
    }
}

printOut(newLine);
printOut(towerDice.join(","));
printOut("Tårn");
printOut("På " + throwsTower + " kast!");


// ---------- YATZI ----------

let throwsYatzi = 0;
let yatziFound = false;
let yatziDice;

while (!yatziFound) {

    yatziDice = rollDice();
    throwsYatzi++;

    if (
        yatziDice[0] === yatziDice[1] &&
        yatziDice[1] === yatziDice[2] &&
        yatziDice[2] === yatziDice[3] &&
        yatziDice[3] === yatziDice[4] &&
        yatziDice[4] === yatziDice[5]
    ) {
        yatziFound = true;
    }
}

printOut(newLine);
printOut(yatziDice.join(","));
printOut("Yatzi!");
printOut("På " + throwsYatzi + " kast!");

