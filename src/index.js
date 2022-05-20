import showPhone from './modules/showPhone';
import burgerMenu from './modules/burgerMenu';
import showModalWindow from './modules/showModalWindow';
import maskPhone from './modules/maskPhone';
import sliderTypesRepairs from './modules/sliderTypesRepairs';
import formulaDesktop from './modules/formulaDesktop';
import SliderCarousel from './modules/SliderCarousel';
import questionsAccordion from './modules/questionsAccordion';
import { addFormulaStyle, removeFormulaStyle } from './modules/sliderFormula';
import {documentSliderStyles, portfolioSliderStyles, mobilePortfolioSliderStyles} from './modules/sliderStyles';
import sendForm from './modules/sendForm';
import check from './modules/check';
import sliderTransparencyModal from './modules/sliderTransparencyModal';
import { setPortfolioPosition } from './modules/setSlidersPosition';
// import dataUploading from './modules/dataUploading';
import { UserService } from "./modules/userService";
import { render } from "./modules/render";

window.userService = new UserService;

userService.getUsers().then(data => {
    render(data);
});

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

  const popupPortfolioSlider = new SliderCarousel({
    wrap: '.popup-portfolio-slider',
    prev: '#popup_portfolio_left',
    next: '#popup_portfolio_right',
    slideCounter: '#popup-portfolio-counter',
    currentCount: '.slider-counter-content__current',
    totalCount: '.slider-counter-content__total',
    position: 0,
    slidesToShow: 1,
  });
  popupPortfolioSlider.init();
  setPortfolioPosition(popupPortfolioSlider);
  const portfolioSlider = new SliderCarousel({
    wrap: '.portfolio-slider',
    prev: '#portfolio-arrow_left',
    next: '#portfolio-arrow_right',
    style: portfolioSliderStyles,
    position: 0,
    px: 352,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1140,
        slidesToShow: 2
      },
      {
        breakpoint: 900,
        slidesToShow: 1
      },
    ]
  });
  portfolioSlider.init();
  const mobilePortfolioSlider = new SliderCarousel({
    wrap: '.portfolio-slider-mobile',
    prev: '#portfolio-arrow-mobile_left',
    next: '#portfolio-arrow-mobile_right',
    slideCounter: '#portfolio-counter',
    style: mobilePortfolioSliderStyles,
    currentCount: '.slider-counter-content__current',
    totalCount: '.slider-counter-content__total',
    position: 0,
    slidesToShow: 1,
  });
  mobilePortfolioSlider.init();


showPhone();
burgerMenu();
showModalWindow();
maskPhone();
sliderTypesRepairs();
formulaDesktop();
questionsAccordion();
check();
sliderTransparencyModal();
// dataUploading();