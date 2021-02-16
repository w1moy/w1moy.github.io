//pancake banner//
var date = new Date();
var day = date.getDay();
if (day == 5){
    var ban = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion."
    document.getElementById("prestonPancakes").innerHTML = ban;}
    else {document.getElementById("prestonPancakes").style.display = "none";
}

//navigation//
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

//date//
let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + d.getFullYear();

document.getElementById("currentdate").textContent = fulldate;