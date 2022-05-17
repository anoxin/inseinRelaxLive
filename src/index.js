import showPhone from './modules/showPhone';
import burgerMenu from './modules/burgerMenu';
import showModalWindow from './modules/showModalWindow';
import maskPhone from './modules/maskPhone';
import sliderTypesRepairs from './modules/sliderTypesRepairs';
import formulaDesktop from './modules/formulaDesktop';
import SliderCarousel from './modules/SliderCarousel';
import { addHighlightStyle, removeHighlightStyle } from './modules/sliderFormula';


const formulaSlider = new SliderCarousel({
    main: '.formula-slider-wrap',
    wrap: '.formula-slider',
    prev: '#formula-arrow_left',
    next: '#formula-arrow_right',
    loop: true,
    showCenter: [addHighlightStyle, removeHighlightStyle],
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


showPhone();
burgerMenu();
showModalWindow();
maskPhone();
sliderTypesRepairs();
formulaDesktop();