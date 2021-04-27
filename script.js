const window1 = document.querySelector('.window');
const popupWindows = document.querySelectorAll('.js-popup');
const controlBtns = document.querySelectorAll('.js-btn');
const mobileHamburger = document.querySelector('.js-burger-menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeHamburger = document.querySelector('.js-burger-menu-close');


mobileHamburger.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('test-hide');
    mobileHamburger.classList.toggle('test-hide');
    closeHamburger.classList.toggle('test-hide');
})

closeHamburger.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('test-hide');
    mobileHamburger.classList.toggle('test-hide');
    closeHamburger.classList.toggle('test-hide');
})


controlBtns.forEach(elementBtn => {
    elementBtn.addEventListener('click', () => {
        popupWindows.forEach(popupWindow => {
              if (elementBtn.dataset.name === popupWindow.dataset.name) {
                  toggleVisibility(popupWindow);
              }
        })
    })
})

function toggleVisibility(element) {
    window1.classList.toggle('window-hide');
    element.classList.toggle('window-hide');
}


// const window1 = document.querySelector('.window');
// const piano = document.querySelector('.window-piano');
// const flashcards = document.querySelector('.window-flashcards');
// const btnsCards = document.querySelectorAll('.js-flashcards');
// const btnsPiano = document.querySelectorAll('.js-piano');

// btnsCards.forEach((element) => {
//     element.addEventListener("click", function (){
//         toggleVisibility(flashcards);
//     })
// })
//
// btnsPiano.forEach((element) => {
//     element.addEventListener("click", function () {
//         toggleVisibility(piano);
//     })
// })
//
// function toggleVisibility(element) {
//     window1.classList.toggle('window-hide');
//     element.classList.toggle('window-hide');
// }