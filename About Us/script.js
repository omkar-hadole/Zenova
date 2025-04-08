const triggerBtn = document.querySelector('.trigger-btn');
const snackbar = document.querySelector('.snackbar');
const closeBtn = document.querySelector('.close-btn');

let timeoutId;

if (triggerBtn && snackbar) {
    triggerBtn.addEventListener('click', () => {
        snackbar.classList.add('active');
        startAutoClose();
    });
}

if (closeBtn && snackbar) {
    closeBtn.addEventListener('click', () => {
        snackbar.classList.remove('active');
        clearTimeout(timeoutId);
    });
}

function startAutoClose() {
    timeoutId = setTimeout(() => {
        if (snackbar) snackbar.classList.remove('active');
    }, 15000);
}

if (snackbar) {
    snackbar.addEventListener('mouseenter', () => {
        clearTimeout(timeoutId);
    });

    snackbar.addEventListener('mouseleave', startAutoClose);
}

document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 4);

    const preferredDate = document.getElementById('preferredDate');
    if (preferredDate) {
        preferredDate.min = formatDate(today);
        preferredDate.max = formatDate(maxDate);
    }
});



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
