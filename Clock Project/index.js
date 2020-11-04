const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

// we are dealing with a circle so we use the degree 360
let hrPosition = (hr * 360/12) + ( min * (360/60)/12);
let minPosition = ( min * 360/60) + ( sec * (360/60)/60);
let secPosition = sec*360/60; 


// this is moving each hand with CSS USING JS
HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

