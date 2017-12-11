// Declaring Key Variables
//============================================================
var gemNumber = undefined;
var randomNumber = undefined;








// Defining Functions
// ===========================================================
//generate a random number between 1-12
function generateNumber () {
	gemNumber = Math.floor(Math.random()*12) + 1;
	console.log(gemNumber);
}
generateNumber();

// generate a randomg number between 19-120
// ===========================================================
function generateNumber2 () {
	randomNumber = Math.floor(Math.random()*100) + 21;
	console.log(randomNumber);
}
generateNumber2();





