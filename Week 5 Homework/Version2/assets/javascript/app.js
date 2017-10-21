// */
//     page loads:
//         assign dom vars
//         add event listener for user clicking answers
//         set current question to 0
//         render question1 data to dom

//         wait for use to click an answer

//     user clicks answers:
//         check if answer is correct
//         store correct or incorrect in answerArray
//         set current questions var to next value
//         render question and answers
        
//         wait for user to click an answer
    
//     when at end of questions:
//         - iterate through user answer collection
//             - increment correctAnswers var for each correct answer
//             - decrement incorrectAnswers var for each incorrect answer

//         - inform user of correct answers and incorrect answers
    
// */

var questions = [
    {
        text: 'In What Year was the NHL founded?', 
        answers: [
            {text: "1912", correct: false},
            {text: "1917", correct: true},
            {text: "1920", correct: false},
            {text: "1927", correct: false},
        ]
    },
    {
        text: 'Who is known as "The Great One?"', 
        answers: [
            {text: "Mario Lemieux", correct: false},
            {text: "Gordie Howe", correct: false},
            {text: "Wayne Gretzky", correct: true},
            {text: "Maurice Richard", correct: false},
        ]
    },
    {
        text: 'Which team was a part of the "Original Six?"', 
        answers: [
            {text: "St. Louis Blues", correct: false},
            {text: "New York Islanders", correct: false},
            {text: "Hartford Whalers", correct: false},
            {text: "Detroit Red Wings", correct: true},
        ]
    },
    {
        text: 'Which team has won the most Stanley Cups?',
        answers: [
            {text: "Toronto Maple Leafs", correct: false},
            {text: "Boston Bruins", correct: false},
            {text: "Pittsburgh Penguins", correct: false},
            {text: "Montreal Canadiens", correct: true},
        ]
    },
    {
        text: 'What is the fastest slap shot on record?',
        answers: [
            {text: "118mph", correct: true},
            {text: "104mph", correct: false},
            {text: "99mph", correct: false},
            {text: "95mph", correct: false},
        ]
    },
    {
        text: 'How thick is regulation ice in the NHL?',
        answers: [
            {text: "1 inch", correct: false},
            {text: "1.5 inches", correct: false},
            {text: "0.75 inches", correct: true},
            {text: "2 inches", correct: false},
        ]
    },
    {
        text: 'Who is the goalie with the most wins in the NHL?',
        answers: [
            {text: "Patrick Roy", correct: false},
            {text: "Martin Brodeur", correct: true},
            {text: "Ken Dryden", correct: false},
            {text: "Chris Osgood", correct: false},
        ]
    },
    {
        text: 'Which NHL player scored the most goals in their first NHL game?',
        answers: [
            {text: "Austin Matthews", correct: true},
            {text: "Teemu Selanne", correct: false},
            {text: "Peter Stastny", correct: false},
            {text: "Howie Meeker", correct: false},
        ]
    },
    {
        text: 'Which team has a tradition of throwing an octopus on the ice?',
        answers: [
            {text: "Montreal Canadiens", correct: false},
            {text: "Vancouver Canucks", correct: false},
            {text: "New York Rangers", correct: false},
            {text: "Detroit Red Wings", correct: true},
        ]
    },
    {
        text: 'How many teams in the NHL are Canadian?',
        answers: [
            {text: "7", correct: true},
            {text: "4", correct: false},
            {text: "8", correct: false},
            {text: "5", correct: false},
        ]
    },
]


var currentQuestion = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var domQuestion = $(".question-span")
var domAnswerBox = $(".answer-box")
var scoreBoard = $(".score")
var rightAnswers = $(".Goals")
var wrongAnswers = $(".shotsBlocked")
var timer = 90
var intervalId;

domAnswerBox.on('click', function(event) {
    console.log(event)
    console.log(event.target.dataset.index)
    
    var indexOfQuestion = event.target.dataset.index
    //check answer correctness => 
    var isAnswerCorrect = questions[currentQuestion].answers[indexOfQuestion].correct
    console.log(questions[currentQuestion].answers[indexOfQuestion].correct)

    if (isAnswerCorrect === true) {
        correctAnswer++;
    }
    else if (isAnswerCorrect === false){
        incorrectAnswer++;
    }
    // set currentQuestion to +1
    currentQuestion++

    console.log(currentQuestion)
       
    // renderQuestion( questions[ currentQuestion ] )

    endGame();

    renderQuestion(questions[currentQuestion])
    

})

function timedQuiz () {

    intervalId = setInterval(function(){
        decrement();
    }, 1000);
    
}

function decrement () {
    timer--;
        
    $('#clock').html("<h2>" + timer + "</h2>");

    if (timer === 0) {
       endGame();
       stop();
       alert("Times Up!");
    }
}

 function stop () {
    clearInterval(intervalId);
    // if time runs out before submit is pressed jump to 
 }



function renderQuestion(question) {

    domQuestion.html(question.text)

    for (var i=0; i < question.answers.length; i++) {
        
        domAnswerBox[0].children[i].innerHTML = question.answers[i].text;
        domAnswerBox[0].children[i].dataset.index = i
    }   

}

function endGame(){
    if (currentQuestion === 10 || timer === 0) {
        scoreBoard.html("Score:")
        rightAnswers.html("Goals: " + correctAnswer)
        wrongAnswers.html("Shots Blocked: " + incorrectAnswer)
        stop()

    }
}

timedQuiz();

endGame();

renderQuestion(questions[currentQuestion]);


 