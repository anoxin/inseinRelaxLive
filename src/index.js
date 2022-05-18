import showPhone from './modules/showPhone';
import burgerMenu from './modules/burgerMenu';
import showModalWindow from './modules/showModalWindow';
import maskPhone from './modules/maskPhone';
import sliderTypesRepairs from './modules/sliderTypesRepairs';
import formulaDesktop from './modules/formulaDesktop';
import SliderCarousel from './modules/SliderCarousel';
import questionsAccordion from './modules/questionsAccordion';
import { addFormulaStyle, removeFormulaStyle } from './modules/sliderFormula';
import {documentSliderStyles} from './modules/sliderStyles';
import sendForm from './modules/sendForm';
import check from './modules/check';
import sliderTransparencyModal from './modules/sliderTransparencyModal';

document.querySelectorAll('form').forEach((elem) => {
  const formElemId = elem.id;
  elem.setAttribute('novalidate', '');
  sendForm({
      formId: `${formElemId}`,
      someElem: [
          {
              type: 'block',
              id: 'total'
          }
      ]
  });
});

const formulaSlider = new SliderCarousel({
    main: '.formula-slider-wrap',
    wrap: '.formula-slider',
    prev: '#formula-arrow_left',
    next: '#formula-arrow_right',
    loop: true,
    showCenter: [addFormulaStyle, removeFormulaStyle],
    autoplay: true,
    time: 5000,
    position: -1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        slidesToShow: 1
      },
    ]
  });
  formulaSlider.init();

  const sliderReviews = new SliderCarousel({
    wrap: '.reviews-slider',
    prev: '#reviews-arrow_left',
    next: '#reviews-arrow_right',
    position: 1,
    slidesToShow: 1,
  });
  sliderReviews.init();

  const sliderDocument = new SliderCarousel({
    wrap: '.transparency-slider',
    prev: '#transparency-arrow_left',
    next: '#transparency-arrow_right',
    style: documentSliderStyles,
    position: 0,
    slidesToShow: 3,
    resetDefault: true,
    responsive: [
      {
        breakpoint: 1090,
        slidesToShow: 1
      },
    ]
  });
  sliderDocument.init();


showPhone();
burgerMenu();
showModalWindow();
maskPhone();
sliderTypesRepairs();
formulaDesktop();
questionsAccordion();
check();
sliderTransparencyModal();