function toggleMenu() {
	document.getElementById("primarynav").classList.toggle("hide");
}

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
let fulldate = dayName + "," + monthName + " " + d.getDate() + " , " + d.getFullYear();

document.getElementById("currentdate").textContent = fulldate;


/*var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth()+1).padStart(2, '0'); //January is 0
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);*/