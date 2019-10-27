var tempF=parseFloat(document.getElementById ('temp').textContent);
var wSpeed=parseFloat(document.getElementById ('speed').textContent);
var calculateNums=windChill(temp, speed);
document.getElementById('chill').textContent=calculateNums;
