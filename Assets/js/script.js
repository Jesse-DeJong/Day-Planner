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



function saveData (event) {
    event.preventDefault();

    var hour = event.target.dataset.index;  // Gets the data-index value from which save was pressed
    console.log(hour);

    var tsIndex = ts.findIndex(             // Get the index of [ts] of the hour to be saved 
        (time, index) => time == hour       // Roughly equal as hour is a number not a string
    );
    console.log(tsIndex);
    content = timeslots[tsIndex];           // Using the [ts] index access the DOM through [timeSlots]
    console.log(content);

    string = content.value;                 // Get the text value of user input in the targeted hour
    console.log(string);

    stringJSON = JSON.stringify(string);    // JSON-ify the string to preserve how it was entered into the field
    console.log(stringJSON);
    
    localStorage.setItem(hour, stringJSON); // Store the users inputs in local storage
}

function getLocalStorage () {
    for (i = 0; i < ts.length; i++) {                       // Loop over all hours for if they have stored data
        if (localStorage.getItem(ts[i]) !== null) {         // Skip if there isnt a stored value
            var j = localStorage.getItem(ts[i]);                // Download stored value
            timeslots[i].textContent = j;                       // Set the parsed results as the text content of their respective hour
    }
  }
}

function getDate () { 
    var currentDate = moment().format("dddd, MMMM Do");     // Generate the current date through moment.js API
                                                            // Format date as eg Monday, June 10th
    dateEl.innerHTML = currentDate;                         // Inject formatted date to DOM
}



function colorSegments () {
    var currentTime = moment().format("HH");

    for ( i = 0; i < ts.length; i++ ) {
        if (currentTime === ts[i]) {                                    // For the current hour
            timeslots[i].setAttribute("style", "background: var(--purple)");   // Alter styling
        } else if (currentTime < ts[i]) {                               // For future hours
            timeslots[i].setAttribute("style", "background: var(--green)");    // Alter styling
        } else if (currentTime > ts[i]) {                               // For past hours
            timeslots[i].setAttribute("style", "background: var(--red)");      // Alter styling
    }
  }
}



function init () {
    getDate();
    getLocalStorage();
    colorSegments();
}



init();