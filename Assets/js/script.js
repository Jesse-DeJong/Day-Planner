// Target selection of DOM manipulation and injection
var dateEl = document.getElementById("currentDay");

var nineAM = document.getElementById("0900");
var tenAM = document.getElementById("1000");
var elevenAM = document.getElementById("1100");
var twelvePM = document.getElementById("1200");
var onePM = document.getElementById("1300");
var twoPM = document.getElementById("1400");
var threePM = document.getElementById("1500");
var fourPM = document.getElementById("1600");
var fivePM = document.getElementById("1700");

var timeslots = [
    nineAM,
    tenAM,
    elevenAM,
    twelvePM,
    onePM,
    twoPM,
    threePM,
    fourPM,
    fivePM
];

var ts = [
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17"
];


function getDate () { 
    var currentDate = moment().format("dddd, MMMM Do");

    dateEl.innerHTML = currentDate;
}



function colorSegments () {
    var currentTime = moment().format("HH");

    for ( i = 0; i < ts.length; i++ ) {
        if (currentTime === ts[i]) {                                    // For the current hour
            timeslots[i].setAttribute("style", "background: purple");   // Alter styling
        } else if (currentTime < ts[i]) {                               // For future hours
            timeslots[i].setAttribute("style", "background: green");    // Alter styling
        } else if (currentTime > ts[i]) {                               // For past hours
            timeslots[i].setAttribute("style", "background: red");      // Alter styling
    }
}
}



function init () {
    getDate();
    colorSegments();
}



init();