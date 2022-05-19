const showModalWindow = () => {
    const popupPrivacy = document.querySelector('.popup-privacy');
    const body = document.body; 
    const consultations = document.querySelector('.popup-consultation');
    const popupThank = document.querySelector('.popup-thank');

    body.addEventListener('click', (e) => {
        // Политика конфиденциальности
        if (e.target.closest('.link-privacy')) {
            popupPrivacy.style.visibility = 'visible';
        }
        if (e.target.closest('.popup-privacy > .close') || e.target.closest('.popup-dialog > .close')) {
            popupPrivacy.style.visibility = 'hidden';
        }
        // консультация
        if (e.target.closest('button.button_wide')) {
            consultations.style.visibility = 'visible';
        }
        if (e.target.closest('.close-consultation')) {
            consultations.style.visibility = '';
        }
        // спасибо за обращение
        if (e.target.closest('.close-thank')) {
            popupThank.style.visibility = '';
        }
        // портфолио
        if (e.target.closest('.portfolio-slider__slide-frame')) {
            document.querySelector('.popup-portfolio').style.visibility = 'visible';
        }
        if (e.target.closest('.popup-portfolio > .close') || e.target.closest('.popup-dialog > .close')) {
            document.querySelector('.popup-portfolio').style.visibility = '';
        }
    
    });
};

export default showModalWindow;