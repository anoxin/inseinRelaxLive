import { animate } from "./helpers";
const sliderTypesRepairs = () => {
    const repairTypes = document.getElementById('repair-types');
    const repairTypesSlider = document.querySelector('.repair-types-slider');
    const sliderArrowRight = document.querySelectorAll('.slider-arrow_right')[1];
    const sliderArrowLeft = document.querySelectorAll('.slider-arrow_left')[1];
    const sliderCounterContentCurrent = document.querySelector('#repair-counter .slider-counter-content__current');
    const sliderCounterContentTotal = document.querySelector('#repair-counter .slider-counter-content__total');
    const buttons = document.querySelectorAll('.nav-list-repair > button');
    const navArrowRight = repairTypes.querySelector('.nav-arrow_right');
    const navArrowLeft = repairTypes.querySelector('.nav-arrow_left');
    let typesRepair = document.querySelector('.types-repair1');
    let repairTypesSliderSlide = typesRepair.querySelectorAll('.repair-types-slider__slide');
    let width = document.documentElement.clientWidth;  

    let lotClicks = false;
    let percentageRatio = 20;
    let change;
    let left;
    let num;

    const sliderMove = (right) => {
        let stop = false;
        buttons.forEach((elem, id) => {
            if (width < 1025) {
                if (elem.classList.contains('active')) {
                    elem.style.position = "";
                    elem.style.left = "50%";
                    elem.style.transform = "translateX(-50%)";
                    elem.style.transition = "1s";
                    repairTypes.querySelector('.nav-list-repair').style.cssText = `min-width: 100%`;
                    stop = true;
        
                } else {
                    if (!stop) {
                        elem.style.position = "absolute";
                        elem.style.left = "-100%";
                        elem.style.transform = "";
                    } 
                    if (stop) {
                        elem.style.position = "absolute";
                        elem.style.left = "100%";
                        elem.style.transform = "";
                    } 
                }

            } else {
                elem.style.position = "";
                elem.style.left = "";
                elem.style.transform = "";
            }
            

        });

    };

    const animation = (symbolEl) => {
        animate({
            duration: 500,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
                if (symbolEl) {
                    typesRepair.style.transform = `translateY(${num - (percentageRatio * progress)}%)`;
                }
                if (!symbolEl) {
                    typesRepair.style.transform = `translateY(${num + (percentageRatio * progress)}%)`;
                }
                
            }
        });
    };

    const defaultValue = () => {
        sliderCounterContentTotal.textContent = repairTypesSliderSlide.length;
        sliderArrowLeft.style.display = 'none';
        repairTypesSlider.style.transform = "rotate(-90deg)";
        typesRepair.style.transform = "translateY(0%)";
        num = 0;
        lotClicks = false;
        change = false;
        sliderCounterContentCurrent.textContent = 1;
        repairTypesSliderSlide.forEach((e) => {
            e.style.transform = "rotate(90deg)";
        }); 
    };

    repairTypes.addEventListener('click', (e) => {
        if (e.target.closest('.nav-arrow_right') || e.target.closest('.nav-arrow_left')) {
            let newActive;
            let lastActive;
            let right;
            buttons.forEach((elem, id) => {
                if (repairTypes.querySelector('.active') == elem) {
                    lastActive = id;
                    if(e.target.closest('.nav-arrow_right')) {
                        newActive = id + 1;
                        if (id == (buttons.length - 2)) {
                            navArrowRight.style.display = 'none';
                        } else {
                            navArrowLeft.style.display = '';
                        }
                        return;
                    }
                    if(e.target.closest('.nav-arrow_left')) {
                        newActive = id - 1;
                        if (id == 1) {
                            navArrowLeft.style.display = 'none';
                        } else {
                            navArrowRight.style.display = '';
                        }
                        return;
                    }      
                }
            });
            buttons[lastActive].classList.remove('active');
            buttons[newActive].classList.add('active');
            sliderMove();
            change = true;
       
        }
        if (e.target.closest('.nav-list-repair > button') || change) {
            let newElement;
            if (change) {
                newElement = repairTypes.querySelector('.active');
            } else {
                newElement = e.target;
            }
            if (e.target == buttons[0]) {
                navArrowLeft.style.display = 'none';
            } else if (e.target == buttons[buttons.length-1]) {
                navArrowRight.style.display = 'none';
            } else if (!change) {
                navArrowLeft.style.display = '';
                navArrowRight.style.display = '';
            }
            
            repairTypes.querySelector('.active').classList.remove('active');
            newElement.classList.add('active');
            buttons.forEach((elem, id) => {
                document.querySelector(`.types-repair${id + 1}`).style.display = "none";
                if (newElement == elem) {
                    typesRepair = document.querySelector(`.types-repair${id + 1}`);
                    repairTypesSliderSlide = typesRepair.querySelectorAll('.repair-types-slider__slide');
                    typesRepair.style.display = "";
                    percentageRatio = Math.floor(100/repairTypesSliderSlide.length);
                    defaultValue();
                }

            });
        }

        if (e.target.closest('.slider-arrow_right')) {
            if (lotClicks && left === false) {
                typesRepair.style.transform = `translateY(${num - percentageRatio}%)`;
            }
            
            typesRepair.style.transform.replace(/(\d+)/, (str, $1) => {
                num = +`-${$1}`;
                return num;
            });
            
            if ((repairTypesSliderSlide.length-1) > num/-percentageRatio) {
                animation(true);
                lotClicks = true;
                left = false;
                sliderCounterContentCurrent.textContent = (num - percentageRatio)/-percentageRatio + 1;

            }

        }
        if (e.target.closest('.slider-arrow_left')) {
            if (lotClicks && left === true) {
                typesRepair.style.transform = `translateY(${num + percentageRatio}%)`;
            }
            
            typesRepair.style.transform.replace(/(\d+)/, (str, $1) => {
                num = +`-${$1}`;
                return num;
            });

            if (0 > num) {
                animation(false);
                lotClicks = true;
                left = true;
                sliderCounterContentCurrent.textContent = (num + percentageRatio)/-percentageRatio  + 1;
            }

        }
        if (sliderCounterContentCurrent.textContent == repairTypesSliderSlide.length) {
            sliderArrowRight.style.display = 'none';
        } else {
            sliderArrowRight.style.display = '';
        }
        if (sliderCounterContentCurrent.textContent == 1) {
            sliderArrowLeft.style.display = 'none';
        } else {
            sliderArrowLeft.style.display = '';
        }
    });  

    window.addEventListener('resize', () => {
        width = document.documentElement.clientWidth;
        sliderMove();
    });
    
    defaultValue();
    sliderMove();
    navArrowLeft.style.display = 'none';

};


export default sliderTypesRepairs;