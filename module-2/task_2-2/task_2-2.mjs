"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const orgExpMath= "2 + 3 * 2 - 4 * 6";
const newMathExp = "2 + (3 (* 2 - 4 ))* 6";
const Answerpar1 = 2 + (3 * (2 - 4)) * 6;
printOut(orgExpMath);
printOut(newMathExp);
printOut(Answerpar1);




printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const millimeters =(25 * 1000) + (34 *10);
const millprInch =25.4;
const inch = millimeters / millprInch;

printOut( "25 meters and 34 centimeters =" + millimeters/millprInch + " inches");


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const DAYS = 3
const HOURS = 12
const MINUTES = 14
const SECONDS = 45
const ANSWER = (DAYS * 24 * 60) + (HOURS * 60) + MINUTES + (SECONDS / 60);
printOut("3 days, 12 hours, 14 minutes and 45 seconds = " + ANSWER + " minutes");


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const Minutes = 6322.52
const totalDays = Minutes / (24 * 60);
const totalHours = (totalDays - Math.floor(totalDays)) * 24;
const totalMinutes = (totalHours - Math.floor(totalHours)) * 60;
const totalSeconds = (totalMinutes - Math.floor(totalMinutes)) * 60;

printOut("6322.52 minutes = " + Math.floor(totalDays) + " days, " + Math.floor(totalHours) + " hours, " + Math.floor(totalMinutes) + " minutes, and " + Math.floor(totalSeconds) + " seconds.");




printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const nok = 76;
const usd = 8.6;
const amount =54
const nokrate = nok / usd;
const usdrate = usd / nok;

const usdtonok = Math.round(amount * nokrate);
const noktousd = Math.round(amount * usdrate);

printOut("54 USD = " + usdtonok + " NOK");
printOut("54 NOK = " + noktousd + " USD");


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text = "There is much between heaven and earth that we do not understand."

printOut(text);
printOut("The text has " + text.length + " characters.");
printOut("The character at position 19 is: " + text.charAt(19));
printOut("The substring from position 35 and 8 characters forward is: " + text.substring(35, 43));
printOut("The word 'earth' starts at position: " + text.indexOf("earth")); 

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("5 > 3 is " + (5 > 3));
printOut("7 >= 7 is " + (7 >= 7));
printOut('"a" > "b" is ' + ("a" > "b"));
printOut('"1" < "a" is ' + ("1" < "a"));
printOut('"2500" < "abcd" is ' + ("2500" < "abcd"));
printOut('"arne" !== "thomas" is ' + ("arne" !== "thomas"));
printOut("2 === 5 is " + (2 === 5));
printOut('"abcd" > "bcd" is ' + ("abcd" > "bcd"));




printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part8Number1 = Number("254");
const part8Number2 = parseFloat("57.23");
const part8Number3 = parseInt("25 kroner");

printOut('"254" = ' + part8Number1);
printOut('"57.23" = ' + part8Number2);
printOut('"25 kroner" = ' + part8Number3);



printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const r = Math.floor(Math.random() * 360) + 1;

printOut("Random number from 1 to 360 = " + r);



/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part10Days = 131;
const weeks = Math.floor(part10Days / 7);
const remainingDays = part10Days % 7;

printOut(
    "131 days is "
    + weeks
    + " weeks and "
    + remainingDays
    + " days");


