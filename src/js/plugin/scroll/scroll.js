const toggleScrollAll = document.querySelectorAll('[data-toggle="scroll"]');

if (toggleScrollAll.length) {

    toggleScrollAll.forEach(function (elem) {
        elem.addEventListener("click", function (event) {
            const scrollTarget = this.dataset.target;
            const scrollClass = this.classList;
            const scrollElement = document.getElementById(scrollTarget);
            console.log(scrollElement);
            scrollElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });
        });
    });
}