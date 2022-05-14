const showModalWindow = () => {
    const popupPrivacy = document.querySelector('.popup-privacy');
    const body = document.body;  

    body.addEventListener('click', (e) => {
        if (e.target.closest('.link-privacy')) {
            popupPrivacy.style.visibility = 'visible';
        }
        if (e.target.closest('.popup-privacy > .close')) {
            popupPrivacy.style.visibility = 'hidden';
        }

    });
};

export default showModalWindow;