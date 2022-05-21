const sliderTransparencyModal = () => {
    const body = document.body;
    const transparencyItem = document.querySelectorAll('.transparency-item');
    const repairTypes = document.querySelector('.popup-transparency');
    const sliderArrowLeft = document.getElementById('transparency_left');
    const sliderArrowRight = document.getElementById('transparency_right');
    let typesRepair = document.querySelector('.popup-transparency-slider');
    let repairTypesSliderSlide = typesRepair.querySelectorAll('.popup-transparency-slider__slide'); 
    const popupTransparency = document.querySelector('.popup-transparency');
    const sliderCounterContentCurrent = document.querySelector('#transparency-popup-counter .slider-counter-content__current');
    const sliderCounterContentTotal = document.querySelector('#transparency-popup-counter .slider-counter-content__total');

    const sliderMove = (close) => {
        let stop = false;
        sliderCounterContentTotal.textContent = repairTypesSliderSlide.length;
        repairTypesSliderSlide.forEach((elem, id) => {
                if (elem.classList.contains('active')) {
                    elem.style.position = "absolute";
                    elem.style.transform = '';
                    elem.style.transition = "1s";
                    sliderCounterContentCurrent.textContent = id + 1;
                    stop = true;
        
                } else {
                    if (!stop) {
                        elem.style.position = "absolute";
                        elem.style.transform = 'translateX(-100%)';
                    } 
                    if (stop) {
                        elem.style.position = "absolute";
                        elem.style.transform = 'translateX(100%)';
                    } 
                }
                if (close) {
                    elem.style.position = '';
                    elem.style.transition = '';
        
                }         
        });
    };

    body.addEventListener('click', (e) => {
        if (e.target.closest('.transparency-item')) {
            transparencyItem.forEach((elem, id) => {
                if (elem == e.target.closest('.transparency-item')) {
                    repairTypesSliderSlide[id].classList.add('active');
                    if (id == 0) {
                        sliderArrowLeft.style.display = 'none';
                    }
                    if (id == repairTypesSliderSlide.length - 1) {
                        sliderArrowRight.style.display = 'none';
                    }
                }
            });
            popupTransparency.style.visibility = 'visible';
            sliderMove();
        }
        if (e.target.closest('.popup-transparency > .close') || e.target.closest('.popup-dialog-transparency > .close')) {
            popupTransparency.style.visibility = '';
            sliderMove(true);
        }

        if (e.target.closest('#transparency_right') || e.target.closest('#transparency_left')) {
            let newActive;
            let lastActive;
            let right;
            repairTypesSliderSlide.forEach((elem, id) => {
                if (repairTypes.querySelector('.active') == elem) {
                    lastActive = id;
                    if(e.target.closest('#transparency_right')) {
                        newActive = id + 1;
                        if (id == (repairTypesSliderSlide.length - 2)) {
                            sliderArrowRight.style.display = 'none';
                        } else {
                            sliderArrowLeft.style.display = '';
                        }
                        return;
                    }
                    if(e.target.closest('#transparency_left')) {
                        newActive = id - 1;
                        if (id == 1) {
                            sliderArrowLeft.style.display = 'none';
                        } else {
                            sliderArrowRight.style.display = '';
                        }
                        return;
                    }      
                }
            });
            repairTypesSliderSlide[lastActive].classList.remove('active');
            repairTypesSliderSlide[newActive].classList.add('active');
            sliderMove();
       
        }
    });

};

export default sliderTransparencyModal;

