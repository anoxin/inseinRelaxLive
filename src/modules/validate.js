const validate  = (formElements) => {
    const checkboxLabel = document.querySelectorAll('.checkbox__label');
    let success = true;
    
    formElements.forEach((elem) => {
        elem.setAttribute('required', '');
        elem.addEventListener('input', (e) => {
            checkValidate();
        });

        const checkValidate = () => {
            if (elem.name == "name" && (/[^а-яёА-ЯЁ\s]/g.test(elem.value) || /^[\s]+/.test(elem.value) || elem.value == '' || elem.value.length < 2 )) {
                success = false;
                elem.classList.add('validate-error'); 
                elem.value = elem.value.replace(/[^а-яёА-ЯЁ\s]/g, "");
            } else if (elem.name == "name") {
                elem.classList.remove('validate-error');
            }
            if (elem.name == "phone" && elem.value.length < 18) {
                success = false; 
                elem.classList.add('validate-error');    
            } else if (elem.name == "phone") {
                elem.classList.remove('validate-error');
            }
            if (elem.className == "checkbox__input" && !elem.checked) {
                success = false; 
                elem.classList.add('validate-error');
            } else if (elem.className == "checkbox__input") {
                elem.classList.remove('validate-error');
            }
        };

        checkValidate();

    });

    return success;
};

export { validate  };
