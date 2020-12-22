const modalSwitch = [...document.querySelectorAll('[data-type="modal"]')]; // Znajdź wszystkie przyciski modala 
const modalFiltr = document.querySelector('.filter');
const bodyStyle = document.body;



const modalOpenStartBody = () => {
    bodyStyle.style.left = "0";
    bodyStyle.style.right = "0";
    bodyStyle.style.top = "0";
    bodyStyle.style.position = 'fixed';
    bodyStyle.style.overflow = 'hidden';
}

const modalOpenStopBody = () => {
    bodyStyle.removeAttribute('style');
}


const modalOpenStart = (event, modalWindow, modalHeight, modalTypeAnimation, modalAnimationTime) => {
    modalWindow.style.display = 'block'; // WYŚWIETL MODAL
    modalHeight = modalWindow.offsetHeight; // USTAL WYSOKOŚĆ MODALA
    modalWindow.style.transform = "translateY(-" + modalHeight + "px)"; // USTAL NOWĄ POZYCJĘ MODALA
    modalWindow.style.transition = "all" + " " + modalAnimationTime + "s";
    modalWindow.style.transform = "translateY(-" + 0 + "px)"; // USTAL NOWĄ POZYCJĘ MODALA
}



const modalOpenAnimationStart = (event, modalWindow, modalHeight, modalTypeAnimation, modalAnimationTime) => {
    modalWindow.style.display = 'block'; // WYŚWIETL MODAL
    modalHeight = modalWindow.offsetHeight; // USTAL WYSOKOŚĆ MODALA
    modalOpenStartBody();

    if (modalTypeAnimation == 'top-body') {
        if (!!modalFiltr) {
            modalFiltr.style.transform = "translateY(+" + modalHeight + "px)"; // USTAL NOWĄ POZYCJĘ MODALA
            modalFiltr.style.transition = "all" + " " + modalAnimationTime + "s";
        }
        modalWindow.style.transform = "translateY(-" + modalHeight + "px)"; // USTAL NOWĄ POZYCJĘ MODALA
        modalWindow.style.transition = "all" + " " + modalAnimationTime + "s";
        modalWindow.style.transform = "translateY(-" + 0 + "px)"; // USTAL NOWĄ POZYCJĘ MODALA
    }
}

const modalAnimationStop = (modalCloseButtonClick, modalWindow, modalHeight, modalTypeAnimation, modalAnimationTime) => {
    modalOpenStopBody();
    if (modalTypeAnimation == 'top-body') {
        if (!!modalFiltr) {
            modalFiltr.style.transform = "translateY(+" + 0 + "px)"; // USTAL NOWĄ POZYCJĘ MODALA
            modalFiltr.style.transition = "all" + " " + modalAnimationTime + "s";

            setTimeout(function () {
                modalFiltr.removeAttribute('style');
            }, 500);
        }
        modalWindow.style.transform = "translateY(-" + modalHeight + "px)"; // USTAL NOWĄ POZYCJĘ MODALA
    } else {
        modalWindow.style.transform = "translateY(-" + modalHeight + "px)"; // USTAL NOWĄ POZYCJĘ MODALA
    }
}






// APLIKACJA MODALA
const modalStart = () => {

    if (!!modalSwitch) {

        modalSwitch.forEach((modalButton) => {

            // URUCHOMIENIE MODALA + WYPOZYCJONOWANIE GO START
            const modalWindowId = modalButton.dataset.target; // USTAL ID MODALA 
            const modalWindow = document.getElementById(modalWindowId); // ZNAJDŹ MODAL O TYM ID
            const modalAnimation = modalWindow.dataset.animation; // ZNAJDŹ TYP ANIMACJI MODALA
            const modalAnimationTime = modalWindow.dataset.time; // ZNAJDŹ PRĘDKOŚĆ ANIMACJI MODALA
            modalWindow.style.transform = "translateY(-" + 100 * 100 + "px)"; // DAJ MODAL 100000 NAD GORNA KRAWĘDZIĄ
            modalWindow.style.display = 'block'; // WYŚWIETL MODAL
            let modalHeight = modalWindow.offsetHeight + 300; // USTAL WYSOKOŚĆ MODALA
            modalWindow.style.transform = "translateY(-" + modalHeight + "px)"; // USTAL NOWĄ POZYCJĘ MODALA


            window.addEventListener('resize', () => { // USTAL NOWĄ WYSOKOSĆ MODALA JAK ZMIENI SIĘ WYSOKOŚĆ OKNA


                modalHeight = modalWindow.offsetHeight + 300;
                modalWindow.style.transform = "translateY(-" + modalHeight + "px)"; // USTAL NOWĄ POZYCJĘ MODALA
                if (!!modalFiltr) {
                    modalFiltr.removeAttribute('style');
                }
                modalOpenStopBody();
            });
            // URUCHOMIENIE MODALA + WYPOZYCJONOWANIE GO STOP
            // URUCHOMIENIE MODALA + WYPOZYCJONOWANIE GO STOP

            // ODNALEZIENIE W MODALU PRZYCISKOW DO ZAMYKANIA MODALA START
            const modalClose = [...modalWindow.querySelectorAll('[data-type="modal-close"]')]; // ZNAJDŹ WSZYSTKIE PRZYCISKI DO ZAMKNIĘCIA MODALA W MODALU
            modalClose.forEach((modalCloseButton) => {
                modalCloseButton.addEventListener('click', (modalCloseButtonClick) => {
                    modalAnimationStop(modalCloseButtonClick, modalWindow, modalHeight, modalAnimation, modalAnimationTime);
                });
            });
            // ODNALEZIENIE W MODALU PRZYCISKOW DO ZAMYKANIA MODALA STOP


            // WYKRYWANIE CZY MODAL POSIADA ANIMACJE ORAZ MOMENTU URUCHOMIENIA MODALU START
            if (!!modalAnimation) {
                modalButton.addEventListener('click', (clickButtonOpen) => {
                    modalOpenAnimationStart(clickButtonOpen, modalWindow, modalHeight, modalAnimation, modalAnimationTime);

                });
            } else {
                modalButton.addEventListener('click', (clickButtonOpen) => {
                    modalOpenStart(clickButtonOpen, modalWindow, modalHeight, modalAnimation, modalAnimationTime);
                });
            }
            // WYKRYWANIE CZY MODAL POSIADA ANIMACJE ORAZ MOMENTU URUCHOMIENIA MODALU STOP

        });
    }
}

modalStart(); // uruchom aplikacje modala 