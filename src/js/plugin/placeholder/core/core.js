const bootScriptPlaceholderInput = [...document.querySelectorAll('[data-placeholder]')];


// placeholder start
const bootScriptPlaceholder = () => {

    if (!!bootScriptPlaceholderInput) {
        bootScriptPlaceholderInput.forEach((placeholderInput, index) => {
            placeholderInput.addEventListener('focus', (event) => {
                placeholderOffDisplay(event);
            });
            placeholderInput.addEventListener('focusout', (event) => {
                placeholderOnDisplay(event);
            });
        });
    }
}

// placeholder ON

const placeholderOffDisplay = (e) => {
    let placeholderInputTarget = e.target.dataset.placeholder;
    const placeholderText = document.getElementById(placeholderInputTarget);
    placeholderText.classList.add('active');
}


// placeholder OFF

const placeholderOnDisplay = (e) => {
    if (e.target.value.length) return
    let placeholderInputTarget = e.target.dataset.placeholder;
    const placeholderText = document.getElementById(placeholderInputTarget);
    placeholderText.classList.remove('active');
}


bootScriptPlaceholder();