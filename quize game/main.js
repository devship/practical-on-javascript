
const startBtn = document.getElementById('start-btn');
const nextBtn =document.querySelector('.next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer-btn');


let shuffledQuestion , currentQuestionindex

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
    currentQuestionindex++;
    setNextQuestion();
});

function startGame () {
  console.log('hello');
  startBtn.classList.add('hide');
  shuffledQuestion = questions.sort(() => Math.random() - .5);
  currentQuestionindex= 0
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion () {
    resetState();
  showQuestion(shuffledQuestion[currentQuestionindex]);
}

function showQuestion (question) {
  questionElement.innerText = question.question;
  question.answer.forEach(answer => {
    const btn = document.createElement('button');
    btn.classList.add('button');
    btn.innerText = answer.text;
    if(answer.correct) {
        btn.dataset.correct = answer.correct;
    }
    btn.addEventListener('click', selectAnswer);
    answerElement.appendChild(btn);
  });
}

function resetState () {
    clearStatus(document.body);
    nextBtn.classList.add('hide');
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}

function selectAnswer (e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setstatus(document.body, correct);
  Array.from(answerElement.children).forEach(btn =>{
    setstatus(btn, btn.dataset.correct);
  });
  if(shuffledQuestion.length > currentQuestionindex + 1) {
    nextBtn.classList.remove('hide');
  }else{ 
    startBtn.innerText = 'restart';
    startBtn.classList.remove('hide');
  }
//   nextBtn.classList.remove('hide');
}

function setstatus (element, correct) {
    clearStatus(element);
    if(correct) {
        element.classList.add('correct');
    }else{
        element.classList.add('wrong');
    }
}

function clearStatus (element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: '1 == "1" ',
        answer: [
            {text: 'true', correct:true},
            {text: 'false', correct: false},
            
        ]
    },

    {
        question: 'which of this is not hoisted',
        answer: [
            {text: 'var', correct:false},
            {text: 'function()', correct: false},
            {text: 'let', correct: true},
            // {text: '45', correct: false}
        ]
    },

    {
        question: 'what will be the output:\
        let x = 5; \
        let y = x ;\
        y = 6 ;\
        console.log(x)',
        answer: [
            {text: '6', correct:false},
            {text: '11', correct: false},
            {text: '5', correct: true},
            {text: '7', correct: false}
        ]
    },

    {
        question: 'what is "2" + 2',
        answer: [
            {text: '4', correct:false},
            {text: '22', correct: true},
            {text: '40', correct: false},
            {text: '45', correct: false}
        ]
    },

    {
        question: 'what is 2 + 2',
        answer: [
            {text: '4', correct:true},
            {text: '22', correct: false},
            {text: '40', correct: false},
            {text: '45', correct: false}
        ]
    },

    {
        question: '[] == 0',
        answer: [
            {text: 'true', correct:true},
            {text: 'false', correct: false},
            
        ]
    },

    {
        question: 'what will be the output: \n \
        let a = "mary" \n a = 35 \n console.log(a)',
        answer: [
            {text: 'mary', correct: false},
            {text: 'mary35', correct: false},
            {text: '35', correct: true},
            {text: 'undefined', correct: false}
        ]
    },

    {
        question: 'isNaN(true)',
        answer: [
            {text: 'true', correct:false},
            {text: 'false', correct: true},
        ]
    },
    {
        question: 'isNaN(undefined)',
        answer: [
            {text: 'true', correct:false},
            {text: 'false', correct: true},
            
        ]
    }
]