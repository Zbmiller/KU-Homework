
    page loads:
        assign dom vars
        add event listener for user clicking answers
        set current question to 0
        render question1 data to dom

        wait for use to click an answer

    user clicks answers:
        check if answer is correct
        store correct or incorrect in answerArray
        set current questions var to next value
        render question and answers
        
        wait for user to click an answer
    
    when at end of questions:
        - iterate through user answer collection
            - increment correctAnswers var for each correct answer
            - decrement incorrectAnswers var for each incorrect answer

        - inform user of correct answers and incorrect answers
    
*/

var questions = [
    {
        text: 'Question 1', 
        answers: [
            {text: "answer 1", correct: false},
            {text: "answer 2", correct: true},
            {text: "answer 3", correct: false},
            {text: "answer 4", correct: false},
        ]
    },
    {
        text: 'Question 2', 
        answers: [
            {text: "answer 1", correct: false},
            {text: "answer 2", correct: true},
            {text: "answer 3", correct: false},
            {text: "answer 4", correct: false},
        ]
    },
    {
        text: 'Question 3', 
        answers: [
            {text: "answer 1", correct: false},
            {text: "answer 2", correct: false},
            {text: "answer 3", correct: false},
            {text: "answer 4", correct: true},
        ]
    },
]

var userAnswers = [];
var currentQuestion = 0;

var domQuestion = $(".question-span")
var domAnswerBox = $(".answer-box")

domAnswerBox.on('click', function(event) {

    console.log(event.target.dataset.index)

    var indexOfQuestion = event.target.dataset.index
    //check answer correctness => questions[ currentQuestion ].answers[ indexOfQuestion ].correct
    // set currentQuestion to +1
    // renderQuestion( questions[ currentQuestion ] )
})


function renderQuestion(question) {

    domQuestion.html(question.text)

    for (var i=0; i < question.answers.length; i++) {
        
        domAnswerBox[0].children[i].innerHTML = question.answers[i].text;
        domAnswerBox[0].children[i].dataset.index = i
    }   

}

renderQuestion(questions[currentQuestion])


 /*
 {
     text: 'How many miles to the moon?',
     answers: [
         {
        text: '342t5465675',
        correct: false
        },  
        {
        text: '352',
        correct: false
        },  
        {
        text: '500020203',
        correct: true
        },
        {
        text: '2',
        correct: false
       }
    ]
 }
