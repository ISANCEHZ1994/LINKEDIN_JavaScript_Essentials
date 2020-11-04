const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = 20;
let minPosition = 130;
let secPosition = 267;

// this is moving each hand with CSS USING JS
HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + hrPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + hrPosition + "deg)";

