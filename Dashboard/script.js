const triggerBtn = document.querySelector('.trigger-btn');
const snackbar = document.querySelector('.snackbar');
const closeBtn = document.querySelector('.close-btn');

let timeoutId;

window.onload = function () {
  setTimeout(() => {
    snackbar.classList.add('active');
    startAutoClose();
  }, 8100);
};

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

const urlParams = new URLSearchParams(window.location.search);
const hideLoader = urlParams.has('loader'); 

if(!hideLoader) {
    const greetings = [
        "नमस्ते 🙏", "வணக்கம்", "নমস্কার", "నమస్కారం", "ನಮಸ್ಕಾರ", "HELLO", "Hello"
    ];
    
    let index = 0;
    const loaderText = document.getElementById("loaderText");
    
    document.querySelector('.min-h-screen').style.display = 'none';

    function updateText() {
        if(index < greetings.length) {
            loaderText.innerText = greetings[index];
            loaderText.style.opacity = "1";
            index++;
            setTimeout(() => { loaderText.style.opacity = "0"; }, 600);
        }
    }

    let interval = setInterval(updateText, 900);
    
    setTimeout(() => {
        clearInterval(interval);
        document.body.classList.add('loaded');
        document.querySelector('.min-h-screen').style.display = 'block';
        setTimeout(() => {
            document.querySelector('.min-h-screen').style.opacity = '1';
        }, 100);
    }, 6000);
} else {
    document.querySelector('.loader-container').style.display = 'none';
    document.querySelector('.min-h-screen').style.display = 'block';
    document.querySelector('.min-h-screen').style.opacity = '1';
}

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
