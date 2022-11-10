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


function showQuestion(){
    let question = document.getElementById('question');
    let button1 = document.getElementById('labelchoise1');
    let button2 = document.getElementById('labelchoise2');
    let button3 = document.getElementById('labelchoise3');

    question.textContent = theQuestions[index].question

    button1.textContent = theQuestions[index].answers.a
    button2.textContent = theQuestions[index].answers.b
    button3.textContent = theQuestions[index].answers.c
}

function submit(){

}

let buttonSubmit = document.getElementById('submit')
buttonSubmit.addEventListener('click', submit);