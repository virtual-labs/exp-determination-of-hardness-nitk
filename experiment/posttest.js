
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Hardness of water is conventionally expressed in terms of equivalent amount of ____________",
      answers: {
        a: "H<sub>2</sub>CO<sub>3</sub>",
        b: "MgCO<sub>3</sub>",
        c: "Na<sub>2</sub>CO<sub>3</sub>",
        d: "CaCO<sub>3</sub>"
      },
      correctAnswer: "d"
    },

    {
      question: "According to WHO, the soft water has 0 to _____ milligram per litre as CaCO<sub>3</sub>.",
      answers: {
        a: "30",
        b: "60",
        c: "90",
        d: "120"
      },
      correctAnswer: "b"
    },

    {
      question: "The difference between water that is hard and water that isn't is ",
      answers: {
        a: "Water that is hard has a high concentration of calcium and magnesium ions",
        b: "Water that is hard has a high concentration of iron and magnesium ions",
        c: "Water that is hard has a high concentration of calcium and iron ions",
        d: "Water that is hard is low in manganese and calcium ions"
      },
      correctAnswer: "a"
    },
    {
      question: "Which of the following is not a unit of hardness? ",
      answers: {
        a: "Parts per million",
        b: "Degree Clarke",
        c: "Degree centigrade",
        d: "Degree French"
      },
      correctAnswer: "c"
    },
    {
      question: "1-degree Clarke = 1 part of CaCO<sub>3</sub> per ____ parts of water.",
      answers: {
        a: "10,000",
        b: "30,000",
        c: "50,000",
        d: "70,000"
      },
      correctAnswer: "d"
    }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
