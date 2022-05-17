import showPhone from './modules/showPhone';
import burgerMenu from './modules/burgerMenu';
import showModalWindow from './modules/showModalWindow';
import maskPhone from './modules/maskPhone';
import sliderTypesRepairs from './modules/sliderTypesRepairs';
import formulaDesktop from './modules/formulaDesktop';
import SliderCarousel from './modules/SliderCarousel';
import questionsAccordion from './modules/questionsAccordion';
import { addFormulaStyle, removeFormulaStyle } from './modules/sliderFormula';


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


showPhone();
burgerMenu();
showModalWindow();
maskPhone();
sliderTypesRepairs();
formulaDesktop();
questionsAccordion();