//variables
var srcM = document.getElementById("srcM");
var srcD = document.getElementById("srcD");
var srcE = document.getElementById("srcE");
var srcG = document.getElementById("srcG");
var srcS = document.getElementById("srcS");
        
var montyImage = [
  srcM,
  srcD,
  srcE,
  srcG,
  srcS
];
//functions
function montyCreate() {
  var montyCreation = document.createElement("img");
  montyCreation.src = montyImage[Math.floor(Math.random() * 4)];
  montyCreation.width = "50";
  montyCreation.length = "50";
  document.getElementById("montyCreationBody").appendChild(montyCreation);
}
