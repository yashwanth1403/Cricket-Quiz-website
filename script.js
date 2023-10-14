const quizData = [
  {
    question: "Which year Kohli made his ODI debut?",
    options: ["2008", "2009", "2010", "2011"],
    url: "images/kohli.jpg",
    correct: 0,
  },
  {
    question: "At what age Rohit sharma started his International career?",
    options: ["18", "20", "19", "21"],
    url: "images/rohit.png",
    correct: 1,
  },
  {
    question:
      "What was Dhoni's score in his 5th one Day international against pakistan?",
    options: ["183*", "126", "148", "134"],
    url: "images/dhoni.png",
    correct: 2,
  },
  {
    question:
      "After failing in which class pandya left studies to completely focus on cricket?",
    options: ["10th", "12th", "9th", "8th"],
    url: "images/hardik.png",
    correct: 2,
  },
  {
    question: "Against which team gill hit double century in odi?",
    options: ["pakistan", "Sri lanka", "New zealand", "Australia"],
    url: "images/gill.jpg",
    correct: 2,
  },
];

const answer = document.querySelectorAll(".answer");
const quiz = document.querySelector(".quiz");

// const [question, option_1, option_2, option_3, option_4] =
//   document.querySelectorAll(
//     ".question",
//     ".option_1",
//     ".option_2",
//     ".option_3",
//     ".option_4"
//   );

const questionElm = document.querySelector(".question");
const image = document.querySelector(".load-img");
const option_1 = document.querySelector(".option_1");
const option_2 = document.querySelector(".option_2");
const option_3 = document.querySelector(".option_3");
// const option_4 = document.querySelector(".option _4");
const option_4 = document.querySelector(".option_4");

const submit = document.querySelector(".submit-btn");

let score = 0;
let currquiz = 0;

const loadquiz = () => {
  const { question, options, url } = quizData[currquiz];
  questionElm.innerHTML = question;
  image.style.backgroundImage = "url(" + url + ")";
  option_1.innerHTML = options[0];
  option_2.innerHTML = options[1];
  option_3.innerHTML = options[2];
  option_4.innerHTML = options[3];
};

loadquiz();

const deselect_answer = () => {
  answer.forEach((curelem) => {
    curelem.checked = false;
  });
};
const selected_option = () => {
  const answerelem = Array.from(answer);
  return answerelem.findIndex((curelem) => {
    return curelem.checked;
  });
};

submit.addEventListener("click", () => {
  const selected_index = selected_option();
  if (selected_index == quizData[currquiz].correct) {
    score += 1;
  }

  currquiz++;
  if (currquiz < quizData.length) {
    deselect_answer();
    loadquiz();
  } else {
    quiz.innerHTML = `
    <div class="result"
    >
<h2>your Score: ${score}/${quizData.length} Correct Answers</h2>
<p>Congratulations on completing the quiz! </p>
<button class="reload-button" onclick="location.reload()">play Again</button>
  </div>`;
    image.style.backgroundImage = "url( 'images/kohil-naveen.jpg')";
  }
});
