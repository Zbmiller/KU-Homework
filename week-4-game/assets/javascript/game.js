(function() {
var targetNumber;
var score; 
var crystal1; 
var crystal2;
var crystal3; 
var crystal4; 
var win = 0;
var loss = 0;

function _setup() {
	targetNumber  = Math.floor((Math.random() * (100 - 36)) + 36);
	score = 0;
	crystal1 = Math.floor((Math.random() * (12 - 1)) + 1);
	crystal2 = Math.floor((Math.random() * (12 - 1)) + 1);
	crystal3 = Math.floor((Math.random() * (12 - 1)) + 1);
	crystal4 = Math.floor((Math.random() * (12 - 1)) + 1);

	_updateDisplay()
	
};
	
_setup()

$("#crystal1").on("click", function(){
	score = score + crystal1
	$("#scoreBox").text(score);	
		console.log("crystal1 =" + crystal1);
		console.log("score = " + score);
	endGame();
});

$("#crystal2").on("click", function(){
	score = score + crystal2
	$("#scoreBox").text(score);	
		console.log("crystal2 =" + crystal2);
		console.log("score = " + score);
	endGame();
});

$("#crystal3").on("click", function(){
	score = score + crystal3
	$("#scoreBox").text(score);	
		console.log("crystal3 =" + crystal3);
		console.log("score = " + score);
	endGame();
});

$("#crystal4").on("click", function(){
	score = score + crystal4
	$("#scoreBox").text(score);	
		console.log("crystal4 =" + crystal4);
		console.log("score = " + score);
	endGame();
});


function endGame(){
	if (score === targetNumber) {
		alert("You Win!")
		win++;
		_setup()
		_updateDisplay()
		console.log("wins =" + win);
	}
	
	else if (score > targetNumber) {
		alert("You've Lost!")
		loss++;
		_setup()
		_updateDisplay()
		console.log("losses =" + loss)
	}
};

function _updateDisplay() {
	$("#randomNumber").text(targetNumber);
	$("#scoreBox").text(score);
	$("#win").text(win);
	$("#loss").text(loss);
}

console.log("target number is:" + targetNumber);

// console.log("total score is:" + score);

console.log("# of wins:" + win)

console.log("# of losses:" + loss)
}())