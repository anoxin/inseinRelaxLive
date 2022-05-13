const burgerMenu = () => {
    const popupDialogMenu = document.querySelector('.popup-dialog-menu');
    const popupRepairTypes = document.querySelector('.popup-repair-types');
    const body = document.body;
    let width = document.documentElement.clientWidth;
 
    let BottomBlock = '';
    let num = 0;
    let count = 0;
    let temp = 50;
    let initialNum;
    let idInterval;
    let widthValue = 576;

    // адаптив для меню
    const menuUp = () => {
        if (width < widthValue) {
            popupDialogMenu.style.transform = 'translate3d(0, -150%, 0)';
            popupDialogMenu.style.transition = '0s';
        } else {
            popupDialogMenu.style.transform = '';
            popupDialogMenu.style.transition = '0s';
        }
    };
    
    // плавная прокрутка
    const animation = () => { 
        idInterval = requestAnimationFrame(animation);
        if ( num < (count + initialNum - temp) && (BottomBlock === true || BottomBlock === '')) {
            num = num + temp;
            document.documentElement.scrollTop = num;
            BottomBlock = true;
        } else if (num > (count + initialNum + temp) && (BottomBlock === false || BottomBlock == '')) {
            num = num - temp;
            document.documentElement.scrollTop = num;
            BottomBlock = false;
        } else {
            document.documentElement.scrollTop = count + initialNum;
            cancelAnimationFrame(idInterval);
        }

    };
    
    // изменение размера экрана
    window.addEventListener('resize', () => {
        width = document.documentElement.clientWidth;
        menuUp();
    });

    menuUp();

    // вызов и закрытие: "Бургер меню"

    body.addEventListener('click', (e) => {
        if (e.target.closest('.menu__icon')) {
            popupDialogMenu.style.transition = '1s';
            popupDialogMenu.style.transform = 'translate3d(0, 0, 0)';  
        }
        if (e.target.closest('.close-menu') && width > widthValue) {
            popupDialogMenu.style.transform = ''; 
        } else if (e.target.closest('.close-menu') && width < widthValue) {
            popupDialogMenu.style.transition = '1s';
            popupDialogMenu.style.transform = '';
        }
        if (e.target.matches('.popup-menu-nav__item > a.menu-link') || e.target.closest('.button-footer')) {
            e.preventDefault();
            let blockId = document.querySelector(e.target.getAttribute('href'));
            popupDialogMenu.style.transform = '';
            count = blockId.getBoundingClientRect().top;
            num = document.documentElement.scrollTop;
            initialNum = num;
            BottomBlock = '';
            animation();
        } 

        // “Полный список услуг и цен”

        if (e.target.closest('.link-list > a')) {
            e.preventDefault();
            popupDialogMenu.style.transform = '';
            popupRepairTypes.style.visibility = 'visible';
        }
        if (e.target.closest('.popup-repair-types > .mobile-hide') || e.target.closest('.tablet-hide > .close')) {
            e.preventDefault();
            popupRepairTypes.style.visibility = '';
        }
    });
};

export default burgerMenu;