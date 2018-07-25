/*
 * Script for index.html
 * Requires:
 *  - easy.js
 *  - tough.js
 *  - impossible.js
 */

let $level;
let questCounter = 0;
let score = 0;
($question = $(".question")),
  ($next = $("#next")),
  ($results = $(".results")),
  ($score = $(".score")),
  ($buttonTrueFalse = $(".choice"));

//when easyMode clicked, assign to $level variable, set questCounter and score to 0, start game function.
$(".easyMode").on("click", () => {
  $level = $easy;
  questCounter = 0;
  score = 0;
  startGame();
});

//when toughMode clicked, assign to $level variable, set questCounter and score to 0, start game function.
$(".toughMode").on("click", () => {
  $level = tough;
  questCounter = 0;
  score = 0;
  startGame();
});

//when impossibleMode clicked, assign to $level variable, set questCounter and score to 0, start game function.
$(".impossibleMode").on("click", () => {
  $level = impossible;
  questCounter = 0;
  score = 0;
  startGame();
});

//when next button is clicked, show next question
$($next).on("click", () => {
  seeQuestion();
});

// start game
function startGame() {
  //hide jumbotron
  $(".jumbotron").hide();
  //show trivia questions
  $(".triviaContainer").show();
  //hide play again section
  $(".playAgain").hide();
  //currentQuest is level and number question player is on
  let currentQuest = $level[questCounter];
  //type is the player's answer
  type = currentQuest["answer"];
  //load question into trivia section
  $question.html(currentQuest["question"]);
  //hide next button
  $next.hide();
  //hide results
  $results.hide();
  //hide score
  $score.hide();
  seeQuestion();
}

//load up questions
const seeQuestion = () => {
  //if the questionCounter is less than the number of questions
  if (questCounter < $level.length) {
    //currentQuest is level and number question player is on
    var currentQuest = $level[questCounter];
    //load next question into trivia section
    $question.html(currentQuest["question"]);
    //type is the player's answer
    type = currentQuest["answer"];
    //hide results
    $results.hide();
    //hide score
    $score.hide();
    //show question
    $question.show();
    //show true or false button
    $buttonTrueFalse.show();
  }
  //if not,
  else {
    //hide next button
    $next.hide();
    //show play again section
    $(".playAgain").show();
  }
  //hide next button until the first question is answered
  $next.hide();
};

// event handler for scoring
$(".choice").on("click", e => {
  //chosen answer is the button that player has clicked
  var playerChoice = e.target.id;
  //show if player was right or wrong
  $results.show();
  //show score
  $score.show();
  //hide question
  $question.hide();
  //hide true or false buttons
  $buttonTrueFalse.hide();
  // if player's choice is equal to the answer
  if (playerChoice === type) {
    //let them know they were right
    $results.html("Outstanding! You're smart as a whip!");
    //increase score
    score++;
  }
  //if not
  else {
    //let them know they were wrong
    $results.html("You might want to ask Google for the answer.");
  }
  //add the question to the question counter
  questCounter++;
  //display the player's current score
  $score.html("You have " + score + " right out of " + $level.length + ".");
  //show next button
  $next.show();
});
