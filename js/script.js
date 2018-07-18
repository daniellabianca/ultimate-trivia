//TODO: removed global variable. make game work without it.   

//FIXME: put game variables in separate JS files. 
  const easy = [
    {
      question: "What country owns every panda in the world?",
      answers: {
        a: "China",
        b: "Japan",
        c: "Korea",
        d: "Australia"
      },
      correctAnswer: "a"
    },

    {
      question: "Lucy in the sky with __:",
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
        "What was tested at \"Bikini Atoll\" in the 1940's and the 1950\'s?",
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
      question: "Excuse me while I __:",
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
        'Which star of the film \"Rebel Without a Cause\" died at the age of 24?',
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
      question: "Wooly Mammoths were still alive when __:",
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
      question: '"Psycho" was the first American film to show __:',
      answers: {
        a: "Gory murder scenes",
        b: "A psychopath",
        c: "A flushing toilet",
        d: "Matricide"
      },
      correctAnswer: "c"
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
        "Sleeping through winter is hibernation, while sleeping through summer is __:",
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
      question: "All swans in England __:",
      answers: {
        a: "Are endangered",
        b: "Are white",
        c: "Are owned by the Queen",
        d: "Are tagged"
      },
      correctAnswer: "c"
    },
    {
      question: "Male students enrolled at Brigham Young University __:",
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
        'Shiro Cosmetics sells an eyeshadow called "__ Raking Leaves on a Brisk October Afternoon"',
      answers: {
        a: "Shrine Maiden",
        b: "Angry Mother",
        c: "Arctic Monkeys",
        d: "Nic Cage"
      },
      correctAnswer: "d"
    },
    {
      question: '"Hatoful Boyfriend" is a visual novel where you can date __:',
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


//TODO: split function into smaller functions
  function startTrivia() {
    let htmlOutput = [];
    impossible.forEach((val, i) => {
      let answers = [];
      for (letter in val.answers) {
//TODO: can label and input be hard-coded?
        answers.push(
          `<label for="radio${i}" class=" d-block">
       <input type="radio" class="option-input radio" id="radio${i}" name="question" value="${val.answers[letter]}">
       ${val.answers[letter]}       
        </label>`
        );
        i++;
      }

//TODO: can div and form be hard-coded?
      htmlOutput.push(
        `<div class="slide ">
               <div class="question align-middle d-block"> ${val.question} </div>
               <form class="answers align-middle d-block form-${i}"> ${answers.join("")} </form>
             </div>`
      );
      triviaContainer.innerHTML = htmlOutput.join("");
    });
    var form = document.querySelectorAll(`form`);
    for (i = 0; i < form.length; i++) {
      let currentForm = form[i];
      currentForm.addEventListener("change", function (e) {
        let data = new FormData(currentForm);
        Array.from(data.values()).forEach(value => currentAnswer = value)
      })
    }
  }
//FIXME: remove global variable
  let currentAnswer = '';
  let rightAnswers = 0;

  function showScore() {
    const triviaResults = triviaContainer.querySelectorAll(".answers");
    if (rightAnswers > 7) {
      resultsContainer.innerHTML = `You have ${rightAnswers} correct answers out of ${impossible.length}. \n \n Outstanding!`;
    } if (rightAnswers < 7) {
      resultsContainer.innerHTML = `You have ${rightAnswers} correct answers out of ${impossible.length}. \n \n Keep trying!`;
    }
    $("#triviaModal").modal("hide");
    $("#resultsModal").modal("show");

    playAgain.addEventListener("click", () => {
      location.reload();
    });
  }

  function showQuestions(n) {
    let currentQuestion = impossible[activeSlide];
    let answer = currentQuestion.answers[currentQuestion.correctAnswer];
    if (currentAnswer === answer) {
      rightAnswers++;
    }
//TODO: create separate function for slides
    slides[activeSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    activeSlide = n;
//TODO: create separate function for buttons
    if (activeSlide > 0) {
      previousButton.style.display = "inline-block";
    }
    if (activeSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    }
  }

  function showNextQuestion() {
    showQuestions(activeSlide + 1);
  }

  function showPreviousQuestion() {
    showQuestions(activeSlide - 1);
  }

//FIXME: remove global variables
  const triviaContainer = document.getElementById("trivia");
  const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
  
//FIXME: move as a callback function inside another function?
  startTrivia();
//FIXME: remove global variables
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let activeSlide = 0;
//FIXME: move as a callback function inside another function?
  showQuestions(0);

//FIXME: tie event listeners to appropriate functions
  submitButton.addEventListener("click", showScore);
  previousButton.addEventListener("click", showPreviousQuestion);
  nextButton.addEventListener("click", showNextQuestion);



