const showModalWindow = () => {
    const popupPrivacy = document.querySelector('.popup-privacy');
    const closePrivacy = document.querySelector('.popup-privacy > .close');
    const body = document.body;

    console.log(popupPrivacy);
    

    body.addEventListener('click', (e) => {
        if (e.target.closest('.link-privacy')) {
            popupPrivacy.style.visibility = 'visible';
        }
        if (e.target.closest('.popup-privacy > .close')  || e.target.closest('.popup-dialog > .close')) {
            popupPrivacy.style.visibility = 'hidden';
        }

    });
};

export default showModalWindow;