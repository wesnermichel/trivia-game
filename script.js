// const greeting = document.getElementById('greeting');
// greeting.textContent = 'Welcome to this Trivia game';
const startButton = document.getElementById('start-btn')// pulling in startButton
const nextButton = document.getElementById('next-btn')// pulling in nextButton
const questionContainerElement = document.getElementById('question-container')//pulling in the container for question
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')//pulling in the element for answer button

let currentAnswers = 0;
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startTrivia)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startTrivia() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  //Count wrongs and rights
 
 setTriviaScore(correct)

  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')

  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
function  setTriviaScore(score){
const totalQuestions = 10
 
  if(score){
    currentAnswers++;
  }else{
    
  alert("Sorry, wrong answer. Here is the correct answer. Hit OK to see the right answer on the next page")// I know people hate ths but I created an alert when the answer is wrong

  }

  
let percentage = (currentAnswers / totalQuestions*100)
console.log(`${percentage}%`);
return percentage
//I am pulling in the percentage from the users value inputß+
}

 


const questions = [
  {
    question: 'What is the rarest M&M color?',
    answers: [
      { text: 'Blue', correct: false },
      { text: 'Black', correct: false },
      { text: 'Brown', correct: true  },
      { text: 'Purple', correct: false  },
     
    ]
  },
  {
    question: 'Which country consumes the most chocolate per capita?',
    answers: [
      { text: 'Unites States', correct: false },
      { text: 'Switzerland', correct: true },
      { text: 'Mexico', correct: false },
      { text: 'Brazil', correct: false },
    ]
  },
  {
    question: 'What was the first soft drink in space?',
    answers: [
      { text: 'Sprite', correct: false },
      { text: 'Coca-Cola', correct: true },
      { text: 'Pepsi', correct: false },
      { text: 'Fanta', correct: false }
    ]
  },
  {
    question: 'What is the most consumed manufactured drink in the world?',
    answers: [
      { text: 'Tea', correct: true },
      { text: 'Soda', correct: false },
      { text: 'Beer', correct: false },
      { text: 'Coffee ', correct: false },
    ]
  },
{
    question: 'Which is the only edible food that never goes bad?',
    answers: [
      { text: 'Eggs', correct: false },
      { text: 'Jerk meat', correct: false },
      { text: 'Honey', correct: true },
      { text: 'Fruits', correct: false }
    ]
  },
  {
    question: 'Which country invented ice cream?',
    answers: [
      { text: 'Mexico', correct: false },
      { text: 'Canada', correct: false },
      { text: 'Fiji', correct: false },
      { text: 'China', correct: true },
    ]
  },
  {
    question: 'The Chinese New Year Isn’t A Fixed Date But Governed By?',
    answers: [
      { text: 'Groundhogs', correct: false },
      { text: 'Lunar Cycles', correct: true },
      { text: 'Solar Flares', correct: false },
      { text: 'Harvest Cycles', correct: false }
    ]
  },
  {
    question: '"Hendrick’s," "Larios," and "Seagram’s" are some of the best-selling brands of which spirit?',
    answers: [
    { text: 'Gin', correct: true },
      { text: 'Vodka', correct: false },
      { text: 'Beer', correct: false },
      { text: 'Wine', correct: false }
    ]
  },
  {
    question: 'What was the first toy to be advertised on television?',
    answers: [
      { text: 'Spider-Man', correct: false },
      { text: 'Mr Potato Head from Toy Story', correct: true },
      { text: 'Batman', correct: false },
      { text: 'A-Team', correct: false }
    ]
  },
  {
    question: 'What was the first feature-length animated movie ever released? (Hint: It was a Disney Movie)',
    answers: [
      { text: 'Snow White and the Seven Dwarfs', correct: true },
      { text: 'Spirited Away', correct: false },
      { text: 'The Simpsons Movie', correct: false },
      { text: 'Bambi', correct: false }
    ]
  }
]