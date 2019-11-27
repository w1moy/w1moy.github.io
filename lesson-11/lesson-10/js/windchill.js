var tempF=parseFloat(document.getElementById ('current-temp').textContent);
var Speed=parseFloat(document.getElementById ('wind-speed').textContent);
var calculateNums=windChill(temp, speed);
document.getElementById('chill').textContent=calculateNums;

function windChill(tempF, speed){
    var s = Math.pow(speed, .16);
   var factor = 35.74 + (0.6215*tempF) - (35.75*s) + (.4275*tempF*s);
   return factor;
}