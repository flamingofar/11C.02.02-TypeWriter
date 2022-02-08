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
	if (count < text.length) {
		setTimeout(loopFunc, 500);
	}
}

function loopFunc() {
	typeWriter.innerHTML += `${text.charAt(count)}`;
	count++;
	init();
}
