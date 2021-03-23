function doInputOutput () {
var tempF=parseFloat(document.getElementById ("temp").value);
console.log(tempF)
var wSpeed=parseFloat(document.getElementById ('speed').value);
var calculateNums=windChill(temp, speed);
document.getElementById('chill').textContent=calculateNums;}

function windChill(tempF, wSpeed){
    var s = Math.pow(wSpeed, .16);
    console.log(s)
   var factor = 35.74 + (0.6215*tempF) - (35.75*s) + (.4275*tempF*s);
   return factor;
}