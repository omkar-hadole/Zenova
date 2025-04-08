let quizData = { questions: [] }; // Initialize empty quiz data

// Load questions from JSON file dynamically
async function loadQuizData() {
  try {
    // Get subject from URL
    const urlParams = new URLSearchParams(window.location.search);
    let subject = urlParams.get("subject");

    if (!subject) {
      alert("No subject selected!");
      return;
    }

    // Construct JSON file path based on subject
    let jsonPath = subject.includes("math") ? `${subject}.json` : `${subject}.json`;

    const response = await fetch(jsonPath);
    const data = await response.json();
    quizData = data;
    initializeQuiz(); // Initialize quiz after loading data
  } catch (error) {
    console.error("Error loading quiz data:", error);
    alert("Failed to load quiz questions. Please try again later.");
  }
}

// Initialize Quiz
function initializeQuiz() {
  if (quizData.questions.length === 0) {
    console.error("No questions found in quiz data.");
    return;
  }

  elements.totalQElement.textContent = quizData.questions.length;

  quizData.questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = `question ${index === 0 ? "active" : ""}`;

    // Create question content with optional image
    let questionContent = `
      <h3>${q.id}. ${q.question}</h3>
    `;

    // Add image if exists
    if (q.image) {
      questionContent += `<div class="image-container">
  <img src="${q.image}" alt="Question Image" class="question-image" />
  <button class="expand-btn" onclick="expandImage(this)">Expand Image</button>
</div>`;
    }

    // Add options for MCQs
    questionContent += `
      ${q.options
        .map(
          (option, i) => `
        <button class="option" 
                data-correct="${i === q.correct}"
                onclick="selectOption(this)">${option}</button>
      `
        )
        .join("")}
    `;

    questionDiv.innerHTML = questionContent;
    elements.questionsContainer.appendChild(questionDiv);
  });

  updateNavigation();
}

// Replace the initializeQuiz() call at the bottom with:
loadQuizData();

// DOM Elements
const elements = {
  startPopup: document.getElementById("start-popup"),
  quizContainer: document.querySelector(".quiz-container"),
  questionsContainer: document.getElementById("questions-container"),
  timerElement: document.getElementById("time"),
  currentQElement: document.getElementById("current-q"),
  totalQElement: document.getElementById("total-q"),
  prevBtn: document.getElementById("prev-btn"),
  nextBtn: document.getElementById("next-btn"),
  submitBtn: document.getElementById("submit-btn"),
};

// Quiz State
let currentQuestionIndex = 0;
let startTime;
let timerInterval;
let score = 0;
let reviewMode = false;

// Option Selection
function selectOption(selectedOption) {
  if (!reviewMode) {
    const options = selectedOption.parentElement.querySelectorAll(".option");
    options.forEach((opt) => opt.classList.remove("selected"));
    selectedOption.classList.add("selected");
  }
}

// Navigation
function updateNavigation() {
  elements.prevBtn.disabled = currentQuestionIndex === 0;
  elements.nextBtn.disabled = currentQuestionIndex === quizData.questions.length - 1;
}

function showQuestion(index) {
  currentQuestionIndex = index;
  document.querySelectorAll(".question").forEach((q) => q.classList.remove("active"));
  document.querySelectorAll(".question")[index].classList.add("active");
  elements.currentQElement.textContent = index + 1;
  updateNavigation();
}

// Event Listeners
document.getElementById("start-btn").addEventListener("click", () => {
  elements.startPopup.classList.remove("active");
  elements.quizContainer.style.display = "block";
  startTime = Date.now();
  startTimer();
  showQuestion(0);
});

elements.prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    showQuestion(currentQuestionIndex - 1);
  }
});

elements.nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < quizData.questions.length - 1) {
    showQuestion(currentQuestionIndex + 1);
  }
});

elements.submitBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  calculateScore();
  showResults();
});

// Timer
function startTimer() {
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    elements.timerElement.textContent = `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }, 1000);
}

// Results
function calculateScore() {
  score = 0;
  let totalScoredQuestions = 0; // Track only questions with options

  quizData.questions.forEach((q, index) => {
    // Skip questions without options (where correct is null)
    if (q.correct !== null) {
      const selected = document
        .querySelectorAll(".question")
      [index].querySelector(".option.selected");
      if (selected && selected.dataset.correct === "true") {
        score++;
      }
      totalScoredQuestions++; // Only count questions with options
    }
  });
  const percentage = ((score / totalScoredQuestions) * 100).toFixed(1);
  document.getElementById("percentage").textContent = `${percentage}%`;
}

function showResults() {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;

  document.getElementById("correct-answers").textContent = score;
  document.getElementById("time-taken").textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

  document.getElementById("results-popup").classList.add("active");
  elements.quizContainer.classList.add("hidden");
}

// Review Answers Functionality
document.getElementById("review-btn").addEventListener("click", () => {
  reviewMode = true;
  document.getElementById("results-popup").classList.remove("active");
  elements.quizContainer.classList.remove("hidden");
  elements.quizContainer.classList.add("review-mode");
  highlightAnswers();
  showQuestion(0);
});

function highlightAnswers() {
  quizData.questions.forEach((question, index) => {
    const questionDiv = document.querySelectorAll(".question")[index];
    const options = questionDiv.querySelectorAll(".option");

    // Skip questions without options (where correct is null)
    if (question.correct !== null) {
      // Mark correct answer
      options[question.correct].classList.add("correct-answer");

      // Mark user's selection
      const selectedOption = questionDiv.querySelector(".selected");
      if (selectedOption) {
        if (selectedOption.dataset.correct === "true") {
          selectedOption.classList.add("correct-selected");
        } else {
          selectedOption.classList.add("incorrect-selected");
        }
      }
    }
  });
}

function expandImage(button) {
  const image = button.previousElementSibling; // Get the image element
  
  if (image.style.maxHeight === '200px' || image.style.maxHeight === '') {
    // Expand the image
    image.style.maxHeight = 'none'; // Allow the image to expand fully
    image.style.height = 'auto'; // Let the height adjust accordingly
    button.textContent = 'Shrink Image';
  } else {
    // Shrink the image back to original
    image.style.maxHeight = '200px'; // Reset the max height
    image.style.height = '200px'; // Reset height to match the max height
    button.textContent = 'Expand Image';
  }
}