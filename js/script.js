"use strict";

console.log(helloMessage);

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// will let the degrees we want to turn the arms

let hrPosition = 20;
let minPosition = 130;
let secPosition = 267;

// apply above numbers as degrees as inline styles for transform on each object. apply the styles on above variables.

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";