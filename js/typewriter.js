/** @format */

"use strict";
const typeWriter = document.querySelector(".typewritten");
const keySoundOne = document.querySelector("#typekey1");
const keySoundTwo = document.querySelector("#typekey2");
const spaceSound = document.querySelector("#typespace");
const returnSound = document.querySelector("#typereturn");

//Modal
const modal = document.querySelector(".modal-container");

// Buttons
const enableBtn = document.querySelector(".btn-container button:first-child");
const disableBtn = document.querySelector(".btn-container button:last-child");

let count = 0;
let text = typeWriter.innerHTML.trim();
window.addEventListener("DOMContentLoaded", setup);

function setup() {
	typeWriter.innerHTML = "";
	disableBtn.addEventListener("click", () => {
		document.querySelectorAll("audio").forEach((el) => {
			el.pause();
			el.muted = true;
		});
		modal.classList.toggle("hidden");
		init();
	});
	enableBtn.addEventListener("click", () => {
		document.querySelectorAll("audio").forEach((el) => {
			el.play();
			el.muted = false;
		});
		modal.classList.toggle("hidden");
		init();
	});
}

function init() {
	let ranTime = Math.floor(Math.random() * 3 + 3) * 100;
	// console.log(ranTime);
	if (count < text.length) {
		setTimeout(loopFunc, ranTime);
	}
}

function loopFunc() {
	let rand = Math.floor(Math.random() * 2) + 1;
	if (text.charAt(count) === " ") {
		console.log("This is a space");
		spaceSound.play();
	} else {
		if (rand === 1) {
			keySoundOne.play();
		} else {
			keySoundTwo.play();
		}
	}
	typeWriter.innerHTML += `${text.charAt(count)}`;
	count++;
	init();
}
