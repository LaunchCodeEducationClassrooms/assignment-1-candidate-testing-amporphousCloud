//using tabs for organization is B^) cool kid mode
const input = require('readline-sync');
            // TODO 2: modify your quiz app to ask 5 questions //

            // TODO 1.1a: Define candidateName // 
let candidateName = "";
            // TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ["Who was the first American woman in space? "];
let correctAnswer = ("Sally Ride");
let candidateAnswer = "";
let questions = ['1. Who was the first American woman in space?\n', 
  '2. True or false: 5000 meters = 5 kilometers.\n', 
  '3. (5 + 3)/2 * 10 = ?\n', 
  '4. Given the array \[8, \'Orbit\', \'Trajectory\', 45], what entry is at index 2?\n', 
  '5. What is the minimum crew size for the ISS?\n'];
let correctAnswers = ['Sally Ride', 
  'True', 
  '40', 
  'Trajectory', 
  '3'];
let candidateAnswers = [];


function askForName() {
            // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name, candidate? \n");
}

function askQuestion(candidateAnswer) {
            // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer 
  let i = 0;
  while (i < questions.length) {
    candidateAnswers.push(input.question(questions[i]));
    console.log(`\The correct answer is: ${correctAnswers[i]}.\n`);
    i++;
  }
}

function gradeQuiz(candidateAnswers) {
            // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly

  let correct = 0;
  let totalQuestions = questions.length;

  if (candidateAnswers[0].toLowerCase() === correctAnswers[0].toLowerCase()) {
  correct += 1;
    } if (candidateAnswers[1].toLowerCase() === correctAnswers[1].toLowerCase()) {
    correct += 1;
    } if (candidateAnswers[2].toLowerCase() === correctAnswers[2].toLowerCase()) {
    correct += 1;   
    } if (candidateAnswers[3].toLowerCase() === correctAnswers[3].toLowerCase()) {
    correct += 1;
    } if (candidateAnswers[4].toLowerCase() === correctAnswers[4].toLowerCase()) {
    correct += 1;
} 

  let grade = (correct / totalQuestions) * 100;   
    if (grade < 80)  {
      console.log(`Sorry, ${candidateName}, but you didn't pass this time. \nYour overall grade is ${grade}% and 80% is required, but don't give up!`);
    } else {
      console.log(`Congratulations, ${candidateName}, you've passed! Your overall grade is ${grade}%. \nTime to celebrate!`);
    }
    return grade;
  }

function runProgram() {
  askForName();
            // TODO 1.1c: Ask for candidate's name //
  console.log("Hello, " + candidateName + ".\n");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

