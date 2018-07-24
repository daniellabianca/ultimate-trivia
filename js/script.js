/*
 * Script for index.html
 * Requires:
 *  - easy.js
 *  - tough.js
 *  - impossible.js
 */

let $level;

let rightAnswers = 0;
let activeSlide = 0;
let n = 0;
let currentAnswer = "";

$("#easyMode").on("click", () => {
  $level = $easy;
  startGame();
  console.log('easymod');
});

$("#toughMode").on("click", () => {
  $level = tough;
  startGame();
});

$("#impossibleMode").on("click", () => {
  $level = impossible;
  startGame();
});

 

function createQuestionList() {

  for (i = 0; i < $level.length; i++) {
    $(".modal-body").append(`<div class="question">${$level[i].question} </div>`);
  
 
    $(".modal-body").append(`<input type="radio" class="option-input radio" id="radio">${$level[i].answers.a}</div>`);
    $(".modal-body").append(`<input type="radio" class="option-input radio">${$level[i].answers.b}</div>`);
    $(".modal-body").append(`<input type="radio" class="option-input radio">${$level[0].answers.c}</div>`);
    $(".modal-body").append(`<input type="radio" class="option-input radio">${$level[0].answers.d}</div>`);

    console.log($level[0].answers.a)
  }
  

    console.log("question list works");
  }

$("#next").click(e => {
  createQuestionList();
});

function startGame() {
  console.log('start game');
      // createAnswerList();
      createQuestionList();
      // showQuestions();
  console.log("start game2");
    };

//FIXME: remove global variable


$(".submit").submit(e => {
  const triviaResults = triviaContainer.querySelectorAll(".answers");
  if (rightAnswers > 7) {
    $("#results").text(
      `You have ${rightAnswers} correct answers out of ${
        $level.length
      }. \n \n Outstanding!`
    );
  }
  if (rightAnswers < 7) {
    $("#results").text(
      `You have ${rightAnswers} correct answers out of ${
        $level.length
      }. \n \n Keep trying!`
    );
  }
  $("#triviaModal").modal("hide");
  $("#resultsModal").modal("show");

  $('#playAgain').on("click", () => {
    location.reload();
  });
});




const triviaContainer = document.getElementById("trivia");

