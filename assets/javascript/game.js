var wins = 0;
var losses = 0; 
var randomCrystalAssignment = 0;
var randomNumber = 0;

function generateRandomNumber() {
	randomNumber = Math.floor(Math.random() * (120 - 19) + 19); 
	console.log(randomNumber);
}

var blueCrystal = {color:"blue", value: "0", assignNumberBlue: function () {
	randomCrystalAssignment = Math.floor(Math.random() * (12 - 1) + 1);
	console.log(randomCrystalAssignment);
}}
var greenCrystal = {color:"blue", value: "0", assignNumberGreen: function () {
	randomCrystalAssignment = Math.floor(Math.random() * (12 - 1) + 1);
	console.log(randomCrystalAssignment);
}}
var yellowCrystal = {color:"blue", value: "0", assignNumberYellow: function () {
	randomCrystalAssignment = Math.floor(Math.random() * (12 - 1) + 1);
	console.log(randomCrystalAssignment);
}}
var redCrystal = {color:"blue", value: "0", assignNumberRed: function () {
	randomCrystalAssignment = Math.floor(Math.random() * (12 - 1) + 1);
	console.log(randomCrystalAssignment);
}}

// blueCrystal.assignNumberBlue();
generateRandomNumber();

function assignCrystals() {
	blueCrystal.assignNumberBlue();
	greenCrystal.assignNumberGreen();
	yellowCrystal.assignNumberYellow();
	redCrystal.assignNumberRed();
}

assignCrystals();