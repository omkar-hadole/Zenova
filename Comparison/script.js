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
