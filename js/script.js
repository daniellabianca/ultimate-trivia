/*
 * Script for index.html
 * Requires:
 *  - easy.js
 *  - tough.js
 *  - impossible.js
 */

//TODO: create functionality for multiple levels

//TODO: split function into smaller functions

function createAnswerList(val, i) {
  let answers = [];
  easy.forEach((val, i) => {
    for (letter in val.answers) {
      //TODO: can label and input be hard-coded?
      answers.push(`<label for="radio${i}" class=" d-block">
       <input type="radio" class="option-input radio" id="radio${i}" name="question" value="${
        val.answers[letter]
      }">
       ${val.answers[letter]}       
        </label>`);
      i++;
    }
  });
  console.log("answer list works");
}

function createQuestionList() {
  let htmlOutput = [];
  easy.forEach((val, i, answers) => {
    for (letter in val.answers) {
      //TODO: can div and form be hard-coded?
      htmlOutput.push(`<div class="slide ">
               <div class="question align-middle d-block"> ${
                 val.question
               } </div>
               <form class="answers align-middle d-block form-${i}"> ${answers.join(
        ""
      )} </form>
             </div>`);
      console.log("push quesions");
    }
  });
  $("#trivia").html(htmlOutput.join(""));
  console.log("question list works");
}

$("#easyMode").click(startTrivia => {
  createAnswerList();
  createQuestionList();

  // var form = document.querySelectorAll(`form`);
  // for (i = 0; i < form.length; i++) {
  //   let currentForm = form[i];
  //   currentForm.addEventListener("change", function(e) {
  //     let data = new FormData(currentForm);
  //     Array.from(data.values()).forEach(value => (currentAnswer = value));
  //   });
  // }
  easyQ();
});

//FIXME: remove global variable

let rightAnswers = 0;

$(".submit").submit(e => {
  // const triviaResults = triviaContainer.querySelectorAll(".answers");
  if (rightAnswers > 7) {
    $("#results").text(
      `You have ${rightAnswers} correct answers out of ${
        impossible.length
      }. \n \n Outstanding!`
    );
  }
  if (rightAnswers < 7) {
    $("#results").text(
      `You have ${rightAnswers} correct answers out of ${
        impossible.length
      }. \n \n Keep trying!`
    );
  }
  $("#triviaModal").modal("hide");
  $("#resultsModal").modal("show");

  playAgain.addEventListener("click", () => {
    location.reload();
  });
});

function createSlides($n, $activeSlide) {
  $(".slide");
  console.log("slide");
  $([$activeSlide]).removeClass("activeSlide");
  console.log("remove");
  $([$n]).addClass("activeSlide");
  console.log("add");
  $activeSlide = $n;
  console.log("slides created");
}

function easyQ() {
  let $activeSlide = 0;
  let currentAnswer = "";
  for (i = 0; i < easy.length; i++) {
    const easyQ = easy[i].correctAnswer;
    let currentQuestion = easy[$activeSlide];
    let answer = currentQuestion[easyQ];

    if (currentAnswer === answer) {
      rightAnswers++;
    }
    if ($activeSlide > 0) {
      $("#previous").css("display", "inline-block");
    }
    if ($activeSlide === $(".slide").length - 1) {
      $("#next").hide();
      $("#submit").css("display", "inline-block");
    }
  }
  console.log(easyQ, easy);

  showQuestions();
}
function showQuestions() {
  let $activeSlide = 0;
  console.log("test2");
  //TODO: create separate function for slides -- classlist error when global variable removed
  createSlides();
  console.log(createSlides);
  //TODO: create separate function for buttons
}

$("#next").click(activeSlide => {
  showQuestions(activeSlide + 1);
});

$("#previous").click(activeSlide => {
  showQuestions(activeSlide - 1);
});

//FIXME: remove global variables
const triviaContainer = document.getElementById("trivia");

