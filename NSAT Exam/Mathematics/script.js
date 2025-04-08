const triggerBtn = document.querySelector('.trigger-btn');
const snackbar = document.querySelector('.snackbar');
const closeBtn = document.querySelector('.close-btn');

let timeoutId;

triggerBtn.addEventListener('click', () => {
  snackbar.classList.add('active');
  startAutoClose();
});

closeBtn.addEventListener('click', () => {
  snackbar.classList.remove('active');
  clearTimeout(timeoutId);
});

function startAutoClose() {
  timeoutId = setTimeout(() => {
    snackbar.classList.remove('active');
  }, 15000);
}

snackbar.addEventListener('mouseenter', () => {
  clearTimeout(timeoutId);
});

snackbar.addEventListener('mouseleave', startAutoClose);


document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.add('active');
  document.querySelector('.overlay').style.display = 'block';
});

document.querySelector('.sidebar-close').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.remove('active');
  document.querySelector('.overlay').style.display = 'none';
});

document.querySelector('.overlay').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.remove('active');
  this.style.display = 'none';
});


// Function to activate a specific tab
function activateTab(tabId) {
  const tab = document.getElementById(tabId);
  if (tab) {
      tab.click(); // Simulate a click on the tab
  }
}

// Function to check URL parameters
function checkUrlForTab() {
  const urlParams = new URLSearchParams(window.location.search);
  const tabParam = urlParams.get('tab');

  if (tabParam === 'interview') {
      activateTab('interview-tab');
  }
}

// Add event listeners to tabs
document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', function() {
      document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const category = this.dataset.category;
      document.querySelectorAll('.quiz-item').forEach(quiz => {
          const categories = quiz.dataset.category.split(' ');
          if (category === 'all' || categories.includes(category)) {
              quiz.style.display = 'flex';
          } else {
              quiz.style.display = 'none';
          }
      });
  });
});

// Check URL on page load
document.addEventListener('DOMContentLoaded', checkUrlForTab);