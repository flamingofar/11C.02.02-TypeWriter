/** @format */

"use strict";
const typeWriter = document.querySelector(".typewritten");
let count = 0;
let text = typeWriter.innerHTML.trim();
window.addEventListener("DOMContentLoaded", setup);

function setup() {
	typeWriter.innerHTML = "";
	init();
}

function init() {
	let ranTime = Math.floor(Math.random() * 500) + 1;
	console.log(ranTime);
	if (count < text.length) {
		setTimeout(loopFunc, ranTime);
	}
}

function loopFunc() {
	typeWriter.innerHTML += `${text.charAt(count)}`;
	count++;
	init();
}
