var wins = 0;
var losses = 0; 
var randomCrystalAssignment = 0;
var randomTargetNumber = 0;
var yourNumber = 0;
var newTargetNumber = 0;


var blueCrystal = {color:"blue", value: "0", assignNumberBlue: function () {
	randomCrystalAssignment = Math.floor(Math.random() * (12 - 1) + 1);
	blueCrystal.value = randomCrystalAssignment;
	console.log(randomCrystalAssignment);
}}


var greenCrystal = {color:"blue", value: "0", assignNumberGreen: function () {
	randomCrystalAssignment = Math.floor(Math.random() * (12 - 1) + 1);
	greenCrystal.value = randomCrystalAssignment;
	console.log(randomCrystalAssignment);
}}

var yellowCrystal = {color:"blue", value: "0", assignNumberYellow: function () {
	randomCrystalAssignment = Math.floor(Math.random() * (12 - 1) + 1);
	yellowCrystal.value = randomCrystalAssignment;
	console.log(randomCrystalAssignment);
}}

var redCrystal = {color:"blue", value: "0", assignNumberRed: function () {
	randomCrystalAssignment = Math.floor(Math.random() * (12 - 1) + 1);
	redCrystal.value = randomCrystalAssignment;
	console.log(randomCrystalAssignment);
}}


function showScore() {
	$("#scoreShown").html(yourNumber);
}



function generateRandomNumber() {
	randomTargetNumber = Math.floor(Math.random() * (120 - 19) + 19); 
	console.log(randomTargetNumber);
}



function printTargetNumber() {
	generateRandomNumber();
	$("#targetNumber").html(randomTargetNumber)
}


// function addBlueValue() {
	
// }

function addValues() {

	yourNumber = 0
	showScore();

	$("#blueCrystal").on("click", function() {
		yourNumber += blueCrystal.value;
		showScore();
		console.log(yourNumber);
		checkWin();
	})

	$("#greenCrystal").on("click", function() {
		yourNumber += greenCrystal.value;
		showScore();
		console.log(yourNumber);
		checkWin();
		// alert("New Score: " + yourNumber);
	})

	$("#yellowCrystal").on("click", function() {
		yourNumber += yellowCrystal.value;
		showScore();
		console.log(yourNumber);
		checkWin();
		// alert("New Score: " + yourNumber);
	})

	$("#redCrystal").on("click", function() {
		yourNumber += redCrystal.value;
		showScore();
		console.log(yourNumber);
		checkWin();
		// alert("New Score: " + yourNumber);
	})	

}


function checkWin() {
	if (yourNumber === randomTargetNumber) {
		wins++; 
		$(".wins").html("Wins: " + wins);
		alert("You Win Yay!");
		reset();
	}

	else if (yourNumber > randomTargetNumber) {
		losses++;
		$(".losses").html("Losses: " + losses);
		alert("Sorry! Play again.");
		reset();
	}
}

function reset () {
	randomCrystalAssignment = 0;
	randomTargetNumber = 0;
	yourNumber = 0;
	generateRandomNumber();
	printTargetNumber();
	// newTargetNumber = Math.floor(Math.random() * (120 - 19) + 19);
	// $("#targetNumber").html(newTargetNumber);
	assignCrystals();
	addValues();
}

function assignCrystals() {
	blueCrystal.assignNumberBlue();
	greenCrystal.assignNumberGreen();
	yellowCrystal.assignNumberYellow();
	redCrystal.assignNumberRed();
}


printTargetNumber();
assignCrystals();
addValues();

// addCrystalNumbers();
// addBlueValue();
// addGreenValue();