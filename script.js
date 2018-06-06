$("#exampleModal").on("show.bs.modal", function(event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var recipient = button.data("whatever"); // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  // var modal = $(this)
  // modal.find('.modal-title').text('New message to ' + recipient)
  // modal.find('.modal-body input').val(recipient)
});

//easy questions array

// const easy = [
//     {
//         question: "<p>What country owns every panda in the world? <p/>",
//         answers: {
//             a: "China",
//             b: "Japan \r",
//             c: "Korea \n",
//             d: "Australia"
//         },
//         correctAnswer: "a"
//     },

//     {
//         question: "Lucy in the sky with ___:",
//         answers: {
//             a: "Sunshine",
//             b: "Diamonds",
//             c: "Stars",
//             d: "Rockets"
//         },
//         correctAnswer: "b"
//     },
//     {
//         question: "What was tested at \"Bikini Atoll\" in the 1940\'s and the 1950\'s?",
//         answers: {
//             a: "Nuclear bomb",
//             b: "Atomic bomb ",
//             c: "Stealth aircraft",
//             d: "Mustard gas"
//         },
//         correctAnswer: "b"
//     },
//     {
//         question: "Which atmospheric gas is the most common?",
//         answers: {
//             a: "Hydrogen",
//             b: "Oxygen",
//             c: "Argon",
//             d: "Nitrogen"
//         },
//         correctAnswer: "d"
//     },
//     {
//         question: "Excuse me while I ___:",
//         answers: {
//             a: "Eat this pie",
//             b: "Kiss this guy",
//             c: "Kiss the sky",
//             d: "Go mile high"
//         },
//         correctAnswer: "c"
//     },

//     {
//         question: "Which star of the film \"Rebel Without a Cause\" died at the age of 24?        ",
//         answers: {
//             a: "James Dean",
//             b: "Natalie Wood",
//             c: "Gregory Peck",
//             d: "Clark Gable"
//         },
//         correctAnswer: "a"
//     },
//     {
//         question: "The Olympic flag\'s colors are always red, black, blue, green, and yellow rings on a field of white because __:",
//         answers: {
//             a: "At least one of those colors appears on the flag of every nation on the planet.",
//             b: "They are primary colors.",
//             c: "They have important symbolism.",
//             d: "Each color is owned by the United States."
//         },
//         correctAnswer: "a"
//     },
//     {
//         question: "Wooly Mammoths were still alive when:",
//         answers: {
//             a: "The Mayan calendar began.",
//             b: "Barley and wheat were first cultivated.",
//             c: "The Great Pyramid of Giza was built.",
//             d: "The Bronze Age began."
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "Who wrote \"Where the Sidewalk Ends?\"",
//         answers: {
//             a: "Allen Ginsberg",
//             b: "Charles Bukowski",
//             c: "Dr Seuss",
//             d: "Shel Silverstein"
//         },
//         correctAnswer: "d"
//     },

//     {
//         question: "\"Psycho\" was the first American film to show __",
//         answers: {
//             a: "Gory murder scenes",
//             b: "A couple in bed",
//             c: "A flushing toilet",
//             d: "Matricide"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "What country owns every panda in the world?",
//         answers: {
//             a: "China",
//             b: "Japan",
//             c: "Korea",
//             d: "Australia"
//         },
//         correctAnswer: "a"
//     }
// ];
// const tough = [
//     {
//         question: "Who coined the word \'New England\'?",
//         answers: {
//             a: "King James I",
//             b: "John Smith",
//             c: "Thomas Hooker",
//             d: "Paul Revere"
//         },
//         correctAnswer: "b"
//     },
//     {
//         question: "Coulrophobia means fear of what?",
//         answers: {
//             a: "Clowns",
//             b: "old people",
//             c: "Sacred things",
//             d: "Antarctica"
//         },
//         correctAnswer: "a"
//     },
//     {
//         question: "Which author wrote the novel \"Catch-22\"?",
//         answers: {
//             a: "JD Salinger",
//             b: "Kurt Vonnegut",
//             c: "James Joyce",
//             d: "Joseph Heller"
//         },
//         correctAnswer: "d"
//     },
//     {
//         question: "Pythagoras\' Theorem is a theorem concerning which shape?",
//         answers: {
//             a: "Polyhedron",
//             b: "Right triangle",
//             c: "Octagon",
//             d: "Equilateral triangle"
//         },
//         correctAnswer: "b"
//     },
//     {
//         question: "The Alaskans have at least how many words for snow?",
//         answers: {
//             a: "12",
//             b: "25",
//             c: "8",
//             d: "50"
//         },
//         correctAnswer: "d"
//     },
//     {
//         question: "Which singer wrote the State Farm \'Like a Good Neighbor\' jingle?",
//         answers: {
//             a: "An unknown writer",
//             b: "Barry Manilow",
//             c: "Rod Stewart",
//             d: "Luther Vandross"
//         },
//         correctAnswer: "b"
//     },
//     {
//         question: "Sleeping through winter is hibernation, while sleeping through summer is ___:",
//         answers: {
//             a: "A good idea",
//             b: "Defenestration",
//             c: "A waste of a perfectly good summer",
//             d: "Estivation"
//         },
//         correctAnswer: "d"
//     },
//     {
//         question: "Eight of the ten largest statues in the world depict __:",
//         answers: {
//             a: "US Presidents",
//             b: "Ghandi",
//             c: "Abe Lincoln",
//             d: "Buddha"
//         },
//         correctAnswer: "d"
//     },
//     {
//         question: "All swans in England:",
//         answers: {
//             a: "Are endangered",
//             b: "Are white",
//             c: "Are owned by the Queen",
//             d: "Are tagged"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "Male students enrolled at Brigham Young University:",
//         answers: {
//             a: "Need a doctor\'s note to grow a beard.",
//             b: "Are required to keep their nails short.",
//             c: "Are separated from female students.",
//             d: "Must become priests."
//         },
//         correctAnswer: "a"
//     }

// ];

//     const impossible = [
//         {
//             question: "Nephophobia is a fear of __:",
//             answers: {
//                 a: "Heights",
//                 b: "Clouds",
//                 c: "Glass",
//                 d: "Textbooks"
//             },
//             correctAnswer: "b"
//         },
//         {
//             question: "Shiro Cosmetics sells an eyeshadow called \"____ Raking Leaves on a Brisk October Afternoon\"",
//             answers: {
//                 a: "Shrine Maiden",
//                 b: "Angry Mother",
//                 c: "Arctic Monkeys",
//                 d: "Nic Cage"
//             },
//             correctAnswer: "d"
//         },
//         {
//             question: "\"Hatoful Boyfriend\" is a visual novel where you can date ___:",
//             answers: {
//                 a: "Demons",
//                 b: "Centaurs",
//                 c: "Pigeons",
//                 d: "Teachers"
//             },
//             correctAnswer: "c"
//         },
//         {
//             question: "Ouagadougou is the capital city of which African country?",
//             answers: {
//                 a: "Chad",
//                 b: "Burkina Faso",
//                 c: "Eritrea",
//                 d: "Djibouti"
//             },
//             correctAnswer: "b"
//         },
//         {
//             question: "The Code of Hammurabi decreed that bartenders who watered down beer would __:",
//             answers: {
//                 a: "Be executed.",
//                 b: "Lose all tips.",
//                 c: "Do well in life.",
//                 d: "Make enemies."
//             },
//             correctAnswer: "a"
//         },
//         {
//             question: "Who invented scissors?",
//             answers: {
//                 a: "Thomas Edison",
//                 b: "Marvin Haywood",
//                 c: "Leonardo Da Vinci",
//                 d: "George Foreman"
//             },
//             correctAnswer: "c"
//         },
//         {
//             question: "Oxford University is older than __:",
//             answers: {
//                 a: "Babylonia",
//                 b: "The Tower of London",
//                 c: "The Aztec Empire",
//                 d: "The Great Wall of China"
//             },
//             correctAnswer: "c"
//         },
//         {
//             question: "The name for the shape of Pringle\'s can is __",
//             answers: {
//                 a: "Cylinder",
//                 b: "Hyperbolic Paraboloid",
//                 c: "Dodecahedron",
//                 d: "Nonagon"
//             },
//             correctAnswer: "b"
//         },
//         {
//             question: "George Clooney played the voice of __:",
//             answers: {
//                 a: "Simba from \"Lion King\"",
//                 b: "Peter Griffin from \"Family Guy\"",
//                 c: "Stuffy from \"Doc McStuffins\"",
//                 d: "Sparky from \"South Park\""
//             },
//             correctAnswer: "c"
//         },
//         {
//             question: "It is illegal to hunt camels in __:",
//             answers: {
//                 a: "Pakistan",
//                 b: "New Mexico",
//                 c: "Kenya",
//                 d: "Arizona"
//             },
//             correctAnswer: "d"
//         }
// ];

const easy = [
  {
    question: "<p>What country owns every panda in the world? <p/>",
    answers: {
      a: "China",
      b: "Japan",
      c: "Korea",
      d: "Australia"
    },
    correctAnswer: "a"
  },

  {
    question: "Lucy in the sky with ___:",
    answers: {
      a: "Sunshine",
      b: "Diamonds",
      c: "Stars",
      d: "Rockets"
    },
    correctAnswer: "b"
  },
  {
    question:
      "What was tested at \"Bikini Atoll\" in the 1940's and the 1950's?",
    answers: {
      a: "Nuclear bomb",
      b: "Atomic bomb ",
      c: "Stealth aircraft",
      d: "Mustard gas"
    },
    correctAnswer: "b"
  },
  {
    question: "Which atmospheric gas is the most common?",
    answers: {
      a: "Hydrogen",
      b: "Oxygen",
      c: "Argon",
      d: "Nitrogen"
    },
    correctAnswer: "d"
  },
  {
    question: "Excuse me while I ___:",
    answers: {
      a: "Eat this pie",
      b: "Kiss this guy",
      c: "Kiss the sky",
      d: "Go mile high"
    },
    correctAnswer: "c"
  },

  {
    question:
      'Which star of the film "Rebel Without a Cause" died at the age of 24?        ',
    answers: {
      a: "James Dean",
      b: "Natalie Wood",
      c: "Gregory Peck",
      d: "Clark Gable"
    },
    correctAnswer: "a"
  },
  {
    question:
      "The Olympic flag's colors are always red, black, blue, green, and yellow rings on a field of white because __:",
    answers: {
      a:
        "At least one of those colors appears on the flag of every nation on the planet.",
      b: "They are primary colors.",
      c: "They have important symbolism.",
      d: "Each color is owned by the United States."
    },
    correctAnswer: "a"
  },
  {
    question: "Wooly Mammoths were still alive when:",
    answers: {
      a: "The Mayan calendar began.",
      b: "Barley and wheat were first cultivated.",
      c: "The Great Pyramid of Giza was built.",
      d: "The Bronze Age began."
    },
    correctAnswer: "c"
  },
  {
    question: 'Who wrote "Where the Sidewalk Ends?"',
    answers: {
      a: "Allen Ginsberg",
      b: "Charles Bukowski",
      c: "Dr Seuss",
      d: "Shel Silverstein"
    },
    correctAnswer: "d"
  },

  {
    question: '"Psycho" was the first American film to show __',
    answers: {
      a: "Gory murder scenes",
      b: "A couple in bed",
      c: "A flushing toilet",
      d: "Matricide"
    },
    correctAnswer: "c"
  },
  {
    question: "What country owns every panda in the world?",
    answers: {
      a: "China",
      b: "Japan",
      c: "Korea",
      d: "Australia"
    },
    correctAnswer: "a"
  }
];

const tough = [
  {
    question: "Who coined the word 'New England'?",
    answers: {
      a: "King James I",
      b: "John Smith",
      c: "Thomas Hooker",
      d: "Paul Revere"
    },
    correctAnswer: "b"
  },
  {
    question: "Coulrophobia means fear of what?",
    answers: {
      a: "Clowns",
      b: "old people",
      c: "Sacred things",
      d: "Antarctica"
    },
    correctAnswer: "a"
  },
  {
    question: 'Which author wrote the novel "Catch-22"?',
    answers: {
      a: "JD Salinger",
      b: "Kurt Vonnegut",
      c: "James Joyce",
      d: "Joseph Heller"
    },
    correctAnswer: "d"
  },
  {
    question: "Pythagoras' Theorem is a theorem concerning which shape?",
    answers: {
      a: "Polyhedron",
      b: "Right triangle",
      c: "Octagon",
      d: "Equilateral triangle"
    },
    correctAnswer: "b"
  },
  {
    question: "The Alaskans have at least how many words for snow?",
    answers: {
      a: "12",
      b: "25",
      c: "8",
      d: "50"
    },
    correctAnswer: "d"
  },
  {
    question:
      "Which singer wrote the State Farm 'Like a Good Neighbor' jingle?",
    answers: {
      a: "An unknown writer",
      b: "Barry Manilow",
      c: "Rod Stewart",
      d: "Luther Vandross"
    },
    correctAnswer: "b"
  },
  {
    question:
      "Sleeping through winter is hibernation, while sleeping through summer is ___:",
    answers: {
      a: "A good idea",
      b: "Defenestration",
      c: "A waste of a perfectly good summer",
      d: "Estivation"
    },
    correctAnswer: "d"
  },
  {
    question: "Eight of the ten largest statues in the world depict __:",
    answers: {
      a: "US Presidents",
      b: "Ghandi",
      c: "Abe Lincoln",
      d: "Buddha"
    },
    correctAnswer: "d"
  },
  {
    question: "All swans in England:",
    answers: {
      a: "Are endangered",
      b: "Are white",
      c: "Are owned by the Queen",
      d: "Are tagged"
    },
    correctAnswer: "c"
  },
  {
    question: "Male students enrolled at Brigham Young University:",
    answers: {
      a: "Need a doctor's note to grow a beard.",
      b: "Are required to keep their nails short.",
      c: "Are separated from female students.",
      d: "Must become priests."
    },
    correctAnswer: "a"
  }
];

const impossible = [
  {
    question: "Nephophobia is a fear of __:",
    answers: {
      a: "Heights",
      b: "Clouds",
      c: "Glass",
      d: "Textbooks"
    },
    correctAnswer: "b"
  },
  {
    question:
      'Shiro Cosmetics sells an eyeshadow called "____ Raking Leaves on a Brisk October Afternoon"',
    answers: {
      a: "Shrine Maiden",
      b: "Angry Mother",
      c: "Arctic Monkeys",
      d: "Nic Cage"
    },
    correctAnswer: "d"
  },
  {
    question: '"Hatoful Boyfriend" is a visual novel where you can date ___:',
    answers: {
      a: "Demons",
      b: "Centaurs",
      c: "Pigeons",
      d: "Teachers"
    },
    correctAnswer: "c"
  },
  {
    question: "Ouagadougou is the capital city of which African country?",
    answers: {
      a: "Chad",
      b: "Burkina Faso",
      c: "Eritrea",
      d: "Djibouti"
    },
    correctAnswer: "b"
  },
  {
    question:
      "The Code of Hammurabi decreed that bartenders who watered down beer would __:",
    answers: {
      a: "Be executed.",
      b: "Lose all tips.",
      c: "Do well in life.",
      d: "Make enemies."
    },
    correctAnswer: "a"
  },
  {
    question: "Who invented scissors?",
    answers: {
      a: "Thomas Edison",
      b: "Marvin Haywood",
      c: "Leonardo Da Vinci",
      d: "George Foreman"
    },
    correctAnswer: "c"
  },
  {
    question: "Oxford University is older than __:",
    answers: {
      a: "Babylonia",
      b: "The Tower of London",
      c: "The Aztec Empire",
      d: "The Great Wall of China"
    },
    correctAnswer: "c"
  },
  {
    question: "The name for the shape of Pringle's can is __",
    answers: {
      a: "Cylinder",
      b: "Hyperbolic Paraboloid",
      c: "Dodecahedron",
      d: "Nonagon"
    },
    correctAnswer: "b"
  },
  {
    question: "George Clooney played the voice of __:",
    answers: {
      a: 'Simba from "Lion King"',
      b: 'Peter Griffin from "Family Guy"',
      c: 'Stuffy from "Doc McStuffins"',
      d: 'Sparky from "South Park"'
    },
    correctAnswer: "c"
  },
  {
    question: "It is illegal to hunt camels in __:",
    answers: {
      a: "Pakistan",
      b: "New Mexico",
      c: "Kenya",
      d: "Arizona"
    },
    correctAnswer: "d"
  }
];

function buildQuiz() {
  // we'll need a place to store the HTML output
  const output = [];

  // for each question...
  easy.forEach((currentQuestion, questionNumber) => {
    // we'll want to store the list of answer choices
    const answers = [];

    // and for each available answer...
    for (letter in currentQuestion.answers) {
      // ...add an HTML radio button
      answers.push(
        `<label class="radio">
        <p><input type="radio" id="radio-1" name="question${questionNumber}" value="${letter}">
        <span class>  ${letter}: 
               ${currentQuestion.answers[letter]} </span>
             </label>`
      );
    }

    // add this question and its answers to the output
    output.push(
      `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
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
  easy.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = "lightgreen";
    } else {
      // if answer is wrong or blank
      // color the answers red
      answerContainers[questionNumber].style.color = "red";
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${easy.length}`;
  });
}
function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;

  if (currentSlide === 0) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }

  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const easyModeButton = document.getElementById("easyMode");
easyModeButton.addEventListener("click", buildQuiz);

// display quiz right away
buildQuiz();


const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("submit");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(0);

// on submit, show results
submitButton.addEventListener("click", showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);



//     function buildQuiz() {
//         // we'll need a place to store the HTML output
//         const output = [];

//         // for each question...
//         easy.forEach((currentQuestion, questionNumber) => {
//             // we'll want to store the list of answer choices
//             const answers = [];

//             // and for each available answer...
//             for (letter in currentQuestion.answers) {
//                 // ...add an HTML radio button
//                 answers.push(
//                     `<label>
//          <input type="radio" name="question${questionNumber}" value="${letter}">
//           ${letter} :
//           ${currentQuestion.answers[letter]}
//        </label>`
//                 );
//             }

//             // add this question and its answers to the output
//             output.push(
//                 `<div class="slide">
//        <div class="question"> ${currentQuestion.question} </div>
//        <div class="answers"> ${answers.join("")} </div>
//      </div>`
//             );
//         });

//         // finally combine our output list into one string of HTML and put it on the page
//         quizContainer.innerHTML = output.join("");
//     }

//     function showResults() {
//         // gather answer containers from our quiz
//         const answerContainers = quizContainer.querySelectorAll(".answers");

//         // keep track of user's answers
//         let numCorrect = 0;

//         // for each question...
//         easy.forEach((currentQuestion, questionNumber) => {
//             // find selected answer
//             const answerContainer = answerContainers[questionNumber];
//             const selector = `input[name=question${questionNumber}]:checked`;
//             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//             // if answer is correct
//             if (userAnswer === currentQuestion.correctAnswer) {
//                 // add to the number of correct answers
//                 numCorrect++;

//                 // color the answers green
//                 answerContainers[questionNumber].style.color = "lightgreen";
//             } else {
//                 // if answer is wrong or blank
//                 // color the answers red
//                 answerContainers[questionNumber].style.color = "red";
//             }
//         });

//         // show number of correct answers out of total
//         resultsContainer.innerHTML = `${numCorrect} out of ${easy.length}`;
//     }

//     function showSlide(n) {
//         slides[currentSlide].classList.remove("active-slide");
//         slides[n].classList.add("active-slide");
//         currentSlide = n;

//         if (currentSlide === 0) {
//             previousButton.style.display = "none";
//         } else {
//             previousButton.style.display = "inline-block";
//         }

//         if (currentSlide === slides.length - 1) {
//             nextButton.style.display = "none";
//             submitButton.style.display = "inline-block";
//         } else {
//             nextButton.style.display = "inline-block";
//             submitButton.style.display = "none";
//         }
//     }

//     function showNextSlide() {
//         showSlide(currentSlide + 1);
//     }

//     function showPreviousSlide() {
//         showSlide(currentSlide - 1);
//     }

//     const quizContainer = document.getElementById("quiz");
//     const resultsContainer = document.getElementById("results");
//     const submitButton = document.getElementById("submit");

//     // display quiz right away
//     buildQuiz();

//     const previousButton = document.getElementById("previous");
//     const nextButton = document.getElementById("next");
//     const slides = document.querySelectorAll(".slide");
//     let currentSlide = 0;

//     showSlide(0);

//     // on submit, show results
//     submitButton.addEventListener("click", showResults);
//     previousButton.addEventListener("click", showPreviousSlide);
//     nextButton.addEventListener("click", showNextSlide);
// })();
