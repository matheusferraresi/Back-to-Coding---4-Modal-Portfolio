const navButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const containerAll = document.querySelector('.container-all');

navButton.addEventListener('click', () => {
    document.body.classList.toggle('nav-is-open');
    containerAll.style.transition = 'transform ease-in-out 250ms';
});

nav.addEventListener('click', _ => {
    document.body.classList.remove('nav-is-open');
    containerAll.style.transition = '0ms';
});