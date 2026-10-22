"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printToday() {
    const today = new Date();

    printOut(today.toLocaleDateString("nb-NO", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }));
}

printToday();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function getToday() {
    const today = new Date();

    printOut(today.toLocaleDateString("nb-NO", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }));

    return today;
}

function calculateDaysLeft(today) {
    const releaseDate = new Date(2025, 4, 14);

    const difference = releaseDate - today;
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return days;
}

const todayDate = getToday();
const daysLeft = calculateDaysLeft(todayDate);

printOut("Days until 2XKO release: " + daysLeft);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateCircle(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;

    printOut("Diameter: " + diameter);
    printOut("Circumference: " + circumference.toFixed(2));
    printOut("Area: " + area.toFixed(2));
}

calculateCircle(5);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateRectangle(rectangle) {
    const circumference = 2 * (rectangle.width + rectangle.height);
    const area = rectangle.width * rectangle.height;

    printOut("Rectangle width: " + rectangle.width);
    printOut("Rectangle height: " + rectangle.height);
    printOut("Circumference: " + circumference.toFixed(2));
    printOut("Area: " + area.toFixed(2));
}

calculateRectangle({ width: 4, height: 3 });

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function convertTemperature(temperature, type) {
    let celsius;
    let fahrenheit;
    let kelvin;

    if (type === "Celsius") {
        celsius = temperature;
        fahrenheit = celsius * 9 / 5 + 32;
        kelvin = celsius + 273.15;
    }
    else if (type === "Fahrenheit") {
        fahrenheit = temperature;
        celsius = (fahrenheit - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    }
    else if (type === "Kelvin") {
        kelvin = temperature;
        celsius = kelvin - 273.15;
        fahrenheit = celsius * 9 / 5 + 32;
    }
    else {
        printOut("Unknown temperature type!");
        return;
    }

    printOut("Convert " + temperature + " " + type);
    printOut("Celsius = " + Math.round(celsius));
    printOut("Fahrenheit = " + Math.round(fahrenheit));
    printOut("Kelvin = " + Math.round(kelvin));
    printOut(newLine);
}

convertTemperature(47, "Celsius");
convertTemperature(100, "Fahrenheit");
convertTemperature(300, "Kelvin");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateWithoutVAT(grossPrice, taxGroup) {
    let vat;

    switch (taxGroup.toLowerCase()) {
        case "normal":
            vat = 25;
            break;

        case "food":
            vat = 15;
            break;

        case "hotel":
        case "transport":
        case "cinema":
            vat = 10;
            break;

        default:
            printOut("Unknown VAT group!");
            return NaN;
    }

    const netPrice = (100 * grossPrice) / (vat + 100);

    return netPrice;
}

let price1 = calculateWithoutVAT(100, "NORMAL");
printOut("Normal: " + price1.toFixed(2) + " NOK");

let price2 = calculateWithoutVAT(150, "food");
printOut("Food: " + price2.toFixed(2) + " NOK");

let price3 = calculateWithoutVAT(50, "hotel");
printOut("Hotel: " + price3.toFixed(2) + " NOK");

let price4 = calculateWithoutVAT(200, "goblins");

if (Number.isNaN(price4)) {
    printOut("The last VAT group was invalid.");
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateMovement(speed, distance, time) {

    let missing = 0;

    if (speed === undefined) missing++;
    if (distance === undefined) missing++;
    if (time === undefined) missing++;

    if (missing !== 1) {
        return NaN;
    }

    if (speed === undefined) {
        return distance / time;
    }

    if (distance === undefined) {
        return speed * time;
    }

    if (time === undefined) {
        return distance / speed;
    }
}

printOut("Speed: " + calculateMovement(undefined, 50, 2) + " km/h");

printOut("Distance: " + calculateMovement(60, undefined, 2) + " km");

printOut("Time: " + calculateMovement(70, 105, undefined) + " hours");

printOut("Missing values: " + calculateMovement(undefined, 50, undefined));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
  function extendText(text, maximumSize, character, insertBefore) {

    if (text.length >= maximumSize) {
        return text;
    }

    const missingCharacters = maximumSize - text.length;
    const extraCharacters = character.repeat(missingCharacters);

    if (insertBefore === true) {
        return extraCharacters + text;
    } else {
        return text + extraCharacters;
    }
}

const text1 = extendText("This is a text", 25, ".", true);
printOut(text1);

const text2 = extendText("This is a text", 25, ".", false);
printOut(text2);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function testMathExpression(numberOfLines) {
    let nextNumber = 1;

    for (let line = 1; line <= numberOfLines; line++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let i = 0; i < line + 1; i++) {
            leftSum += nextNumber;
            nextNumber++;
        }

        for (let i = 0; i < line; i++) {
            rightSum += nextNumber;
            nextNumber++;
        }

        if (leftSum !== rightSum) {
            printOut("Error at line " + line);
            printOut("Left side: " + leftSum);
            printOut("Right side: " + rightSum);
            return;
        }
    }

    printOut("Maths fun!");
}

testMathExpression(200);


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    return number * factorial(number - 1);
}

const result = factorial(9);

printOut("Factorial of 9 = " + result);

printOut(newLine);
