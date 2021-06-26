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

function getDate () { 
    var currentDate = moment().format("dddd, MMMM Do");

    dateEl.innerHTML = currentDate;
}





function init () {
    getDate();
}



init();