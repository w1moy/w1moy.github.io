var date = new Date();
var day = date.getDay();
if (day == 5){
    var ban = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion."
    document.getElementById("prestonPancakes").innerHTML = ban;}
    else {document.getElementById("prestonPancakes").style.display = "none";
}