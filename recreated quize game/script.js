
const start = document.getElementById('start');
const quize = document.getElementById('quiz');
const qimg = document.getElementById('question-img');
const questionElement = document.getElementById('question');
const timeQauge = document.getElementById('timequage');
console.log(timeQauge);

const choiceA = document.getElementById('choice-1');
const choiceB = document.getElementById('choice-2');
const choiceC = document.getElementById('choice-3');

const progress = document.getElementById('progress');
const score = document.getElementById('score-container');

let  = [
    {
        question : 'what does html stands for',
        imgSrc : 'images/images.png',
        choiceA : 'hypertext markup language',
        choiceB : 'hyperlinks and text markup language',
        choiceC : 'home tool and markup language',
        correct : 'A'
    },
    {
        question : 'what is the questio #2',
        imgSrc : 'images/images.png',
        choiceA : 'A',
        choiceB : 'B',
        choiceC : 'c',
        correct : 'a'
    }
];

let lastQuestionIndex = questions.length -1;
let runningQuestionIndex = 0;
function renderedQuestion () {
    let q = questions[runningQuestionIndex];
    qimg.innerHTML = `< img scr = ${q.imgSrc}>`;0
}