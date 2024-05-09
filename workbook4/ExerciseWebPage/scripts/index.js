"use strict";

let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

const footBallTeam = document.getElementById("footBallTeam");
let paragraph = document.getElementById("paragraphText");
const submitTeam = document.getElementById("submitTeam");

window.onload = function () {
    
    footBallDropDown();
    
    submitTeam.onclick = selectTeam;

}

function footBallDropDown(){
    for (let team of teams){
        let option = new Option(team.name, team.code);
        // console.log("\n" + team.name + "\n" + team.code + "\n==========");
        footBallTeam.appendChild(option);
    }
}

function selectTeam(){
    console.log("SelectTeam function has been called");
    let selectedTeam = footBallTeam.value;
    
    if (footBallTeam.selectedIndex >= 0){
        let text = footBallTeam.options[footBallTeam.selectedIndex].text;
        let value = selectedTeam;

        paragraph.innerText = "Team: " + text +  "\nCode: " + value;
    }
    
}

function showOrHide(){

    

}


