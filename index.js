// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronutCount = "7";
let astronutStatus = "ready";
let averageAstronutMasskg = "80.7";
let crewMasskg = "astronautCount * averageAstronautMassKg";
let fuelMasskg = "760,000";
let shuttleMasskg = "74842.31";
let totalMasskg = "crewMassKg + fuelMassKg + shuttleMassKg";
let fuelTempCelsius = "-225";
let fuelLevel = "100%";
let weatherStatus = "clear";


// Write code to generate the LC04 report here:
let theLine = "--------------------------";

console.log(theLine);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(theLine);
let dateline = "Date: " + date;
console.log(dateline);
console.log("Time: " + time);
console.log();
console.log(theLine);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(theLine);

console.log(theLine);
console.log(" > ASTRONUT INFO");
console.log(theLine);
console.log(" * count:" + astronutCount);
console.log(" * status:" + astronutStatus);
console.log();
console.log(theLine);
console.log(" > FUEL DATA");
console.log(theLine);
console.log(theLine);
console.log("* Fuel temp Celsius: " + fuelTempCelsius + "C");
console.log("* fuel Level: " + (fuelLevel + 100) + "%");
console.log();



// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.