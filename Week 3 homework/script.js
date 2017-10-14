
var chosenWords = ["lukaku", "kane", "aguero", "morata", "sterling", "vardy", "sigurdsson"];
var wrongChoices = [];
var correctChoices = [];
var attempts = 15;
var displayElement = document.getElementById('displayWord');
var displayWrongGuess = document.getElementById('wrongGuess');
var word = chooseWord();
var displayString = buildDisplayString();


/*
	1. User guesses a letter
	2. event listener for keyup
	
	3* for loop through entire word
		does 
	3. compare letter to word 
	4. if letter is in word:
			change string to be underscores and correct letter
			updateDisplay()
		if letter is not in word:
			add letter to incorrect guesses array

		increment attempts variable
		
	5. check for end game conditions*/

updateDisplay()

/*
	user presses a letter key
	- compare letter to choice word
		- if correct -> add to correctChoices[] -> update displayString -> check for win
		- if incorrect -> add to wrongChoices[] -> update wrongChoiceString
		- increment attempts variable
			- if out of attempts -> endGame()
		

*/

function handleUserSelection(chosenLetter) {
	if (!wrongChoices.includes(chosenLetter) || !correctChoices.includes(chosenLetter)) {
		console.log(chosenLetter + ' is a new letter!')
		if (word.includes(chosenLetter)) {
			console.log('Correct Guess');
			// add to choices
			correctChoices.push(chosenLetter);

			//update display string
			updateDisplayString(chosenLetter)

			// check for win
			// checkForWin()
		} else {
			console.log('Incorrect Guess');
			// add to wrong choices
			wrongChoices.push(chosenLetter);

			// updatewrong choise string
			// updateWrongChoiceString()
		}
		attempts--;

		// Check attempts remaining.
		if (attempts <= 0) {
			// endGame()
		}
	}
}

function updateDisplayString(correctGuess) {
	if (!correctGuess) { console.log('No guess provided'); return}
	// take the displayString
	// take the correctChoices[]
	// take the word
	// 'KANE'
	// '_AN_' -> 'E'
	var displayArray = displayString.split(' ')
	var newDisplayArray = []
	console.log('dsiplay array', displayArray)
	for ( var i = 0; i < displayArray.length; i++ ) {
		// look at word [i] -> if matches correctGuess -> push correctGuess to newDisplayArray
		// if no match  -> push displayArray[i]
		if ( word[i] === correctGuess) {
			newDisplayArray.push(correctGuess)
			console.log('match: ', newDisplayArray)
		} else {
			newDisplayArray.push(displayArray[i])
			console.log('not matched: ', newDisplayArray)
		}
	}

	console.log('New display array', newDisplayArray.join(''))

}


function chooseWord() {

	var rand = chosenWords[Math.floor(Math.random() * chosenWords.length)]
	console.log(rand);

	return rand
	
	
	// console.log(rand.split());

}

function buildDisplayString() {

	var displayWord = ''
	for (var counter = 0; counter < word.length; counter++ ) {
		displayWord = displayWord + '_ '
	}
	return displayWord
}

function updateDisplay() {
	displayElement.innerHTML = displayString
}

// function rebuildString(index, letter){

// }



document.onkeyup = function (event) {
	var userguess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userguess);
	handleUserSelection(userguess)


	// for (var i = 0; i < word.length; i++) {
	// 	if(userguess === word[i]) {
	// 		console.log("match")
	// 		// replace the blank with the matched letter 			
	// 		// push.userguess(correctChoice)



	// 	}
	// 	else {
	// 		wrongChoice.push(userguess);
	// 		return wrongChoice
	// 		console.log(wrongChoice);
	// 		displayWrongGuess.innerHTML = wrongChoice
	// 		// userguess.append(document.createElement("p");

	// 	}
	// }

}