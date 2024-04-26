"use strict";

window.onload = init;

function init() {
    const helloBtn = document.getElementById("helloBtn");
    helloBtn.onclick = onHelloBtnClicked;
}

function onHelloBtnClicked() {
    alert("Hello!");
}