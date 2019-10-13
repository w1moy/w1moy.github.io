function toggleMenu() {
	document.getElementById("primarynav").classList.toggle("hide");
}

/*var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth()+1).padStart(2, '0'); //January is 0
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);*/

let options = {
	weekday: "long",
	day: "numeric",
	month: "long",
	year: "numeric"
};

document.getElementById("currentdate").textContent=new Date().toLocaleDateString("en-US", options); 