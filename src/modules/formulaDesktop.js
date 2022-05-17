const formulaDesktop = () => {
    const formulaItemIcon = document.querySelectorAll('.formula-item__icon');
    const formula = document.getElementById('formula');
    const cssStyle = `.formula-item-popup:before {transform: rotate(180deg); top: -15px;}
    .formula-item-popup { position: absolute; top: 115px;}
    .section-title {z-index: -1;}`;
    let width = document.documentElement.clientWidth;

    window.addEventListener('resize', () => {
        width = document.documentElement.clientWidth;
    });

    const defaultValue = () => {
        if (width > 1024) {
            formulaItemIcon.forEach((elem) => {
                elem.querySelector('.formula-item__icon-inner').style.opacity = 0;
                elem.querySelector('.formula-item-popup').style.visibility = '';
                elem.querySelector('.formula-item-popup').style.opacity = '';
                if (document.querySelector('style')) {
                    document.querySelector('style').remove();
                }  
            });
           
        }
    };

    formula.addEventListener('mouseover', (e) => {
        defaultValue();
        if (e.target.closest('.formula-item__icon') && !e.target.closest('.formula-item-popup')) {
            e.target.closest('.formula-item__icon').querySelector(`.formula-item__icon-inner`).style.opacity = 1;
            document.querySelector(`.formula-item-popup-${e.target.innerText}`).style.visibility = 'visible';
            document.querySelector(`.formula-item-popup-${e.target.innerText}`).style.opacity = 1;
            if (e.target.innerText == '03' || e.target.innerText == '05') {
                document.querySelector(`.formula-item-popup-03`).closest('.row').style.cssText = `z-index: 0`;
            } else {
                document.querySelector(`.formula-item-popup-03`).closest('.row').style.cssText = `z-index: -1`;
            }

            const top = document.querySelector(`.formula-item-popup-${e.target.innerText}`).getBoundingClientRect().top;
            if (top < 0) {
                document.querySelector('script').insertAdjacentHTML('afterend', `<style>${cssStyle}</style>`);
            }

        } else {
            defaultValue();
        }

    });
};

export default formulaDesktop;