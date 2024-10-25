"use strict";
let teams = [
  { id: 1, code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { id: 2, code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { id: 3, code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { id: 4, code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

let footballTeams = document.getElementById("footballTeams");
let detailsDiv = document.getElementById("detailsDiv");

for (const team of teams) {
  let option1 = new Option(team.name, team.id);
  footballTeams.appendChild(option1);
}

function showDetails() {
  let id = Number(footballTeams.value);

  let selectedTeam;
  for (const team of teams) {
    if (team.id === id) {
      selectedTeam = team;
      break;
    }
  }

  console.log(footballTeams);
  if (selectedTeam) {
    detailsDiv.innerText = `${selectedTeam.code} (${selectedTeam.name}) was selected. They play ${selectedTeam.plays}.`;
  }
}
