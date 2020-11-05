var half = document.getElementById("half-input");
var halfbutton = document.getElementById("half-button");
var fortune = document.getElementById("fortune-input");
var fortunebutton = document.getElementById("fortune-button");
var output = document.getElementById("fortune-output");


halfbutton.addEventListener("click", halfnum);

function halfnum(){
  var halfnumber= half.value;
  console.log("Half of "+ halfnumber + " is "+ (halfnumber/2));
  alert(halfnumber/2)
}

fortunebutton.addEventListener("click",fortunethingy);

function fortunethingy(){
  var fortunez= ["Open a random book and read it", "Go out for some ice cream", "Make a dog painting", "Go adopt a rabbit", "Go get some coffee"];
  var chosenfortune = fortunez[Math.floor(Math.random()*fortunez.length)];
  var fortuneinput= fortune.value;
  output.innerHTML = fortuneinput + ", " + chosenfortune;
}

function restyle(){
  var randomRed = Math.random() * 250;
  var randomBlue = Math.random() * 250;
  var randomGreen = Math.random() * 250;
  output.style.color = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";
}

restyle();
