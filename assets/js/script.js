const theQuestions = [
    {
        question: "Between which years was Kalmar the Capital city of Scandinavia?",
        answers: {
            a: "1435 - 1546",
            b: "1397 - 1523",
            c: "1362 - 1489"
        },
        correctAnswer: "b"
    },
    {
        question: "Kalmar is famous for its' castle, when did the construction of it started?",
        answers: {
            a: "The end of the 12th century",
            b: "The middle of the 12th century",
            c: "The beginning of the 13th century"
        },
        correctAnswer: "a"
    },
    {
        question: "In Kalmar, a very large sporting event is held every year, which one?",
        answers: {
            a: "Ironman",
            b: "Diamond League",
            c: "Vasaloppet"
        },
        correctAnswer: "a"
    }
];

let index = 2;
let score = 0;

function showQuestion(){
    let question = document.getElementById('question');
    let button1 = document.getElementById('labelchoise1');
    let button2 = document.getElementById('labelchoise2');
    let button3 = document.getElementById('labelchoise3');

    if(index < theQuestions.length){
    question.textContent = theQuestions[index].question

    button1.textContent = theQuestions[index].answers.a
    button2.textContent = theQuestions[index].answers.b
    button3.textContent = theQuestions[index].answers.c
    } else {
        showScore()
    }
}

showQuestion(0);

function submit(){
    let button1 = document.getElementById('choise1');
    let button2 = document.getElementById('choise2');
    let button3 = document.getElementById('choise3');

    let correctAnswer = theQuestions[index].correctAnswer
    let userAnswer;

    if(button1.checked){
        userAnswer = "a"
        button1.checked = false
    } else if(button2.checked){
        userAnswer = "b"
        button2.checked = false
    } else if(button3.checked){
        userAnswer = "c"
        button3.checked = false 
    }

    if(userAnswer){
        if(userAnswer === correctAnswer){
            alert('That was right!')
            score++;
        } else if(userAnswer !== correctAnswer) {
            alert('That was wrong...')
        } 
        index++;
        showQuestion();
    } else {
        alert('No choise picked')
    }
}

function showScore(){
    let questions = document.getElementById('questions')
    let scoreBoard = document.getElementById('score')
    let points = document.getElementById('points')

    questions.style.display = 'none'
    scoreBoard.style.display = 'block' 

    points.textContent = `Score: ${score} / ${theQuestions.length}`
}

function playAgain(){
    index = 0;
    score = 0;

    let questions = document.getElementById('questions')
    let scoreBoard = document.getElementById('score')

    questions.style.display = 'block'
    scoreBoard.style.display = 'none'

    showQuestion();
}

let buttonSubmit = document.getElementById('submit')
buttonSubmit.addEventListener('click', submit);

let buttonPlayAgain = document.getElementById('playAgain')
buttonPlayAgain.addEventListener('click', playAgain)