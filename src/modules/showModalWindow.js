const showModalWindow = () => {
    const popupPrivacy = document.querySelector('.popup-privacy');
    const body = document.body; 
    const consultations = document.querySelector('.popup-consultation');

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


    });
};

export default showModalWindow;