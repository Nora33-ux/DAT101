"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/

let wakeUpTime = 8;

printOut("Wake up time = " + wakeUpTime);

if (wakeUpTime === 7) {
    printOut("I can take the bus to school");
}

if (wakeUpTime === 7) {
    printOut("I can take the bus to school");
} else {
    printOut("I have to take the car to school");
}

if (wakeUpTime === 7) {
    printOut("I can take the bus to school");
} else if (wakeUpTime === 8) {
    printOut("I can take the train to school");
} else {
    printOut("I have to take the car to school");
}


printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let number = -1;

printOut("Value = " + number);

// Part 4
if (number >= 0) {
    printOut("Positive");
} else {
    printOut("Negative");
}

// Part 5
if (number > 0) {
    printOut("Positive");
} else if (number < 0) {
    printOut("Negative");
} else {
    printOut("Zero");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let imageSize = Math.floor(Math.random() * 8) + 1;

printOut("Photo size = " + imageSize + "MP");

if (imageSize >= 4) {
    printOut("Thank you");
} else {
    printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

imageSize = Math.floor(Math.random() * 8) + 1;

printOut("Photo size = " + imageSize + "MP");

if (imageSize >= 6) {
    printOut("Image is too large");
} else if (imageSize >= 4) {
    printOut("Thank you");
} else {
    printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList = [
    "January", "February", "Mars", "April", "Mai",
    "Jun", "Juli", "August", "September", "October",
    "November", "December"
];

const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut("Month is = " + monthName);

if (monthName.includes("r")) {
    printOut("You must take vitamin D");
} else {
    printOut("You do not need to take vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let days;

if (
    monthName === "January" ||
    monthName === "Mars" ||
    monthName === "Mai" ||
    monthName === "Juli" ||
    monthName === "August" ||
    monthName === "October" ||
    monthName === "December"
) {
    days = 31;
} else if (
    monthName === "April" ||
    monthName === "Jun" ||
    monthName === "September" ||
    monthName === "November"
) {
    days = 30;
} else {
    days = 28;
}

printOut("It is " + days + " days in " + monthName);

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if (monthName === "April") {
    printOut("The Art gallery is open in temporary premises in April");
} else if (monthName === "Mars" || monthName === "Mai") {
    printOut("The Art gallery is closed in " + monthName);
} else {
    printOut("The Art gallery is open in " + monthName + ", Welcome!");
}

printOut(newLine);
