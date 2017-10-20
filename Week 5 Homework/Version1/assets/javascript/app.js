var correctAnswer = 0
var incorrectAnswer = 0
var unanswered = 0
var timer = 90
var intervalId;
var answers = [];
// timer counts down

function timedQuiz () {

	intervalId = setInterval(function(){
		decrement();
	}, 1000);
	
}

function decrement () {
	timer--;
		
	$('#clock').html("<h2>" + timer + "</h2>");
	$('#clock2').html("<h2>" + timer + "</h2>");

	// console.log(timedQuiz());

	if (timer === 0) {
		stop();
		alert("Times Up!");
	}
}

 function stop () {
	clearInterval(intervalId);
 	// if time runs out before submit is pressed jump to 
 }

function handleSubmit(event) {
	event.preventDefault();
	clearInterval(intervalId);
	console.log(event);
	var checkedValue = $(event.currentTarget[1].checked);

	console.log(checkedValue);
	// if ()
}

// submit button => saves question data

	 	// counts right, wrong, and unanswered questions
	 		// right === cor, wrong === inc, (else) unanswered

	// screen switches to game over display

		// right, wrong, and unanswered enumerated

timedQuiz();

$("#quizBody").on("submit", handleSubmit)

