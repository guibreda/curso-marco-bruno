const buttonRight = document.querySelector('.arrow.right');
const buttonLeft = document.querySelector('.arrow.left');
const carroussel = document.querySelector('.items-timeline');
let pixels = 50;

buttonRight.addEventListener('click', function() {
    pixels = pixels + 50;
    carroussel.style = `transform: translateX(${pixels}px)`;
});

buttonLeft.addEventListener('click', function() {
    pixels = pixels - 50;
    carroussel.style = `transform: translateX(${pixels}px)`;
});