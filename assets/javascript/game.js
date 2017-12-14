// Declaring Key Variables
//============================================================
var gemNumber = [];
var randomNumber = undefined;
var currentScore = 0;

// Defining Functions
// ===========================================================
//generate 4 random numbers between 1-12, push to gemArray
function generateNumber() {
	for (i=0;i<4;i++) {
	newNumber = Math.floor(Math.random()*12) + 1;
	gemNumber.push(newNumber);
	}
	console.log(gemNumber);
}

// generate a random number between 19-120
// ===========================================================
function generateNumber2() {
	randomNumber = Math.floor(Math.random()*100) + 21;
	$(".random-number").text(randomNumber);
	console.log(randomNumber);
}

function reset() {
	gemNumber = [];
	randomNumber = undefined;
	currentScore = 0;
	generateNumber();
	generateNumber2();
	$(".current-score").text(currentScore);
}
reset();

function game() {
	$(".current-score").text(currentScore);
	console.log(currentScore);
	if (currentScore === randomNumber) {
		alert("You Win!");
		reset();
	} 
	else if (currentScore > randomNumber) {
		alert("You Lose!");
		reset();
	}
}

// On Click Events
// ===========================================================
$(".one").click(function() {
	currentScore = currentScore + gemNumber[0];
	game();
	});

$(".two").click(function() {
	currentScore = currentScore + gemNumber[1];
	game();
	});

$(".three").click(function() {
	currentScore = currentScore + gemNumber[2];
	game();
	});

$(".four").click(function() {
	currentScore = currentScore + gemNumber[3];
	game();
	});