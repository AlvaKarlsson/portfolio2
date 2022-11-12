const QUESTIONS = [
    {
        question: 'Between which years was Kalmar the Capital city of Scandinavia?',
        answers: {
            a: '1435 - 1546',
            b: '1397 - 1523',
            c: '1362 - 1489'
        },
        correctAnswer: 'b'
    },
    {
        question: 'Kalmar is famous for its castle, when did the construction of it started?',
        answers: {
            a: 'The end of the 12th century',
            b: 'The middle of the 12th century',
            c: 'The beginning of the 13th century'
        },
        correctAnswer: 'a'
    },
    {
        question: 'In Kalmar, a very large sporting event is held every year, which one?',
        answers: {
            a: 'Ironman',
            b: 'Diamond League',
            c: 'Vasaloppet'
        },
        correctAnswer: 'a'
    }
]

let currentQuestionIndex = 0
let score = 0
let questions = [...QUESTIONS]

let submitButtonNode = document.getElementById('submit')
let playAgainButtonNode = document.getElementById('playAgain')
let checkAnswerButtonNode = document.getElementById('nextQuestion')

function displayCorrectAnswer(message, color) {
    let correctUserAnswer = document.getElementById('correctUserAnswer')

    correctUserAnswer.textContent = message
    correctUserAnswer.style.color = color
    if(currentQuestionIndex + 1 >= questions.length) {
        checkAnswerButtonNode.textContent = 'Show result'
    }
}

function showQuestion() {
    let questionNode = document.getElementById('question')
    let optionANode = document.getElementById('labelOptionA')
    let optionBNode = document.getElementById('labelOptionB')
    let optionCNode = document.getElementById('labelOptionC')

    if(currentQuestionIndex < questions.length){
        questionNode.textContent = questions[currentQuestionIndex].question
        optionANode.textContent = questions[currentQuestionIndex].answers.a
        optionBNode.textContent = questions[currentQuestionIndex].answers.b
        optionCNode.textContent = questions[currentQuestionIndex].answers.c
    } else {
        showScore()
    }
}

function onSubmitClick() {
    let optionA = document.getElementById('optionA')
    let optionB = document.getElementById('optionB')
    let optionC = document.getElementById('optionC')

    function resetButtonState() {
        optionA.checked = false
        optionB.checked = false
        optionC.checked = false
    }

    let correctAnswer = questions[currentQuestionIndex].correctAnswer
    let userAnswer

    if(optionA.checked){
        userAnswer = 'a'
    } else if(optionB.checked){
        userAnswer = 'b'
    } else if(optionC.checked){
        userAnswer = 'c'
    }

    resetButtonState()

    if(userAnswer){
        if(userAnswer === correctAnswer){
            displayCorrectAnswer('That was right!', 'green')
            score++;
        } else {
            displayCorrectAnswer('That was wrong...', 'red')
        }
        currentQuestionIndex++
        submitButtonNode.style.display = 'none'
        checkAnswerButtonNode.style.display = 'block'
    } else {
        displayCorrectAnswer('No choise picked', 'black')
    }
}

function nextQuestionClick() {
    let correctUserAnswer = document.getElementById('correctUserAnswer')

    nextQuestion.style.display = 'none'
    submitButtonNode.style.display = 'block'
    correctUserAnswer.textContent = ''
    
    showQuestion()
}

function showScore() {
    let questionBoard = document.getElementById('questions')
    let scoreBoard = document.getElementById('score')
    let points = document.getElementById('points')

    questionBoard.style.display = 'none'
    scoreBoard.style.display = 'block'
    submitButtonNode.style.display = 'none'
    playAgainButtonNode.style.display = 'block'
    
    
    points.textContent = `Score: ${score} / ${questions.length}`

    checkAnswerButtonNode.textContent = 'Next Question'
}

function onPlayAgainClick() {
    currentQuestionIndex = 0
    score = 0

    let questions = document.getElementById('questions')
    let scoreBoard = document.getElementById('score')
    let correctUserAnswer = document.getElementById('correctUserAnswer')

    questions.style.display = 'block'
    scoreBoard.style.display = 'none'
    submitButtonNode.style.display = 'block'

    playAgainButtonNode.style.display = 'none'
    correctUserAnswer.textContent = ''

    showQuestion()
}

function initEventListeners() {
    submitButtonNode.addEventListener('click', onSubmitClick)
    playAgainButtonNode.addEventListener('click', onPlayAgainClick)
    checkAnswerButtonNode.addEventListener('click', nextQuestionClick)
}

function startGame() {
    initEventListeners()
    showQuestion()
}


startGame()