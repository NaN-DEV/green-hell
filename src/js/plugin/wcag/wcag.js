const wcag = document.getElementById('wcag');
const wcagOpen = document.getElementById('wcag-open');
const fontPlus = document.getElementById('font-plus');
const fontMinus = document.getElementById('font-minus');
const bodyColor = document.getElementById('body-color');
let fontSizeClick = 0;
let bodyColorContrastClick = 0;
let wcagOnOff = 1;

const wcagStart = () => {
    wcag.style.transform = "translateX(150px)";
}

const mauseHover = () => {
    if (!!wcagOnOff) {
        wcagOnOff = 0;
        wcag.style.transform = "translateX(0)";
        wcag.classList.add('active');
    } else {
        wcagOnOff = 1;
        wcag.style.transform = "translateX(150px)";
        wcag.classList.remove('active');
    }
}

const fontSizeClickPlus = () => {
    if (fontSizeClick === 0) {
        document.body.classList.add('font-size_1');
        fontPlus.classList.remove('inactive');
        fontSizeClick++;
    } else if (fontSizeClick === 1) {
        document.body.classList.add('font-size_2');
        document.body.classList.remove('font-size_1');
        fontPlus.classList.remove('inactive');
        fontSizeClick++;
    } else {
        document.body.classList.add('font-size_3');
        document.body.classList.remove('font-size_2');
        fontPlus.classList.add('inactive');
    }
}

const fontSizeClickMinus = () => {
    if (fontSizeClick === 0) {
        document.body.classList.remove('font-size_1');
        fontMinus.classList.add('inactive');
    } else if (fontSizeClick === 1) {
        document.body.classList.add('font-size_1');
        document.body.classList.remove('font-size_2');
        fontPlus.classList.remove('inactive');
        fontSizeClick--;
    } else {
        document.body.classList.add('font-size_2');
        document.body.classList.remove('font-size_3');
        fontPlus.classList.remove('inactive');
        fontSizeClick--;
    }
}

const bodyColorContrast = () => {
    if (fontSizeClick) {
        document.body.classList.remove('contrast');
        fontSizeClick--;
    } else {

        document.body.classList.add('contrast');
        fontSizeClick++;
    }
}

if (!!wcag) {
    wcagOpen.addEventListener('click', mauseHover);

    fontPlus.addEventListener('click', fontSizeClickPlus);
    fontMinus.addEventListener('click', fontSizeClickMinus);
    bodyColor.addEventListener('click', bodyColorContrast);
}

wcagStart();