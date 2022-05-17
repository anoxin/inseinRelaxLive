const addFormulaStyle = slide => {
      slide.querySelector('.formula-item-popup').style.cssText = `opacity: 1; visibility: visible;`;
      slide.querySelector('.formula-item__icon-inner').
        style.cssText = `background: linear-gradient(90deg, #f48922 0%, #ffb015 100%);`;
      slide.style.cssText =  `opacity: 1;`;
    },
    removeFormulaStyle = slide => {
      slide.querySelector('.formula-item-popup').style.cssText = `opacity: 0.4; visibility: hidden;`;
      slide.querySelector('.formula-item__icon-inner').style.cssText = `background: none;`;
      slide.style.cssText =  `opacity: 0.4;`;
    };
  
  export { addFormulaStyle, removeFormulaStyle };