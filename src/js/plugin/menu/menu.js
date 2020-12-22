let scrollPos = 0;
let scrollLine = -175;
const mainManu = document.getElementById('mainManu');



const menuScroll = () => {
    // detects new state and compares it with the new one
    if ((document.body.getBoundingClientRect()).top > scrollPos) {
        if (scrollPos > scrollLine) {
            mainManu.classList.remove('active');
        }
    } else {
        if (scrollPos < scrollLine) {
            mainManu.classList.add('active');
        }
    }
    // saves the new position for iteration.
    scrollPos = (document.body.getBoundingClientRect()).top;
}



window.addEventListener('scroll', menuScroll);