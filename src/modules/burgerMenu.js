const burgerMenu = () => {
    const popupDialogMenu = document.querySelector('.popup-dialog-menu');
    const menuLink = document.querySelectorAll('.popup-menu-nav__item > a.menu-link');
    const closeМenu = document.querySelectorAll('.button-footer');
    const body = document.body;
    let width = document.documentElement.clientWidth;
 
    let BottomBlock = '';
    let num = 0;
    let count = 0;
    let temp = 300;
    let initialNum;
    let idInterval;
    let widthValue = 576;

    const menuUp = () => {
        if (width < widthValue) {
            popupDialogMenu.style.transform = 'translate3d(0, -150%, 0)';
            popupDialogMenu.style.transition = '0s';
        } else {
            popupDialogMenu.style.transform = '';
            popupDialogMenu.style.transition = '0s';
        }
    };

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

    window.addEventListener('resize', () => {
        width = document.documentElement.clientWidth;
        menuUp();
    });

    menuUp();

    body.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target.closest('.menu__icon')) {
            popupDialogMenu.style.transition = '1s';
            popupDialogMenu.style.transform = 'translate3d(0, 0, 0)';  
        }
        if (e.target.closest('.close-menu') && width > widthValue) {
            popupDialogMenu.style.transform = ''; 
        } else if (e.target.closest('.close-menu') && width < widthValue) {
            popupDialogMenu.style.transition = '1s';
            popupDialogMenu.style.transform = 'translate3d(0, -150%, 0)';
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
    });

};

export default burgerMenu;