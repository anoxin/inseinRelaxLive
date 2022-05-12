const showPhone = () => {
    const headerContacts = document.querySelector('.header-contacts__phone-number-accord');
    const headerPhoneNumber = document.querySelectorAll('.header-contacts__phone-number')[1];
    const headerContactsArrow = document.querySelector('.header-contacts__arrow');

    console.log(headerPhoneNumber);
    
    headerContactsArrow.addEventListener('click', () => {
        if (headerPhoneNumber.style.opacity == '0') {
            headerContacts.style.top = '25px';
            headerPhoneNumber.style.opacity = '1';
            headerContactsArrow.style.transform = 'rotate(-180deg)';
        } else {
            headerContacts.style.top = '0';
            headerPhoneNumber.style.opacity = '0';
            headerContactsArrow.style.transform = 'rotate(0deg)';
        }

    });

    
};

export default showPhone;