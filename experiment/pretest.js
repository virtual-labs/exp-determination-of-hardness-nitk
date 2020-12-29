
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
      question: "Hardness that cannot be removed by boiling is called ",
      answers: {
        a: "Temporary hardness",
        b: "Permanent hardness",
        c: "Both A and B",
        d: "None of these"
      },
      correctAnswer: "b"
    },

    {
      question: "Hardness of water is due to the presence of salts of ",
      answers: {
        a: "Potassium",
        b: "Chlorine",
        c: "Magnesium",
        d: "Boron"
      },
      correctAnswer: "c"
    },
    {
        question: "Select the incorrect statement from the following options. ",
        answers: {
          a: "Water which does not form lather with soap and forms white scum is called hard water",
          b: "Hard water contains dissolved calcium and magnesium salts in it",
          c: "In hard water, cleansing quality of soap is depressed",
          d: "Due to the presence of dissolved hardness-producing salts, the boiling point of water is depressed"
        },
        correctAnswer: "d"
      },
      {
            question: "Select the incorrect statement from the following options. ",
            answers: {
              a: " Permanent hardness is due to dissolved chlorides and sulphates of calcium and magnesium",
              b: "Permanent Hardness can be removed by mere boiling of water",
              c: "It is also known as non-alkaline hardness",
              d: "The difference between the total hardness and the alkaline hardness gives the non-alkaline hardness"
            },
            correctAnswer: "b"
          },
    {
        question: "Select the incorrect statement from the following options. ",
    answers: {
          a: "The taste of hard water is better than soft water",
          b: "The dissolved calcium in hard water can help to produce strong teeth",
          c: "Hard water coats the lead piping with a layer of insoluble calcium carbonate which prevents poisonous lead dissolving in water",
          d: "Boiler feed water should also be hard in nature"
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
