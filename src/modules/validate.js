const validate  = (formElements) => {
    let success = true;
    
    formElements.forEach((elem) => {
        elem.setAttribute('required', '');
        elem.addEventListener('input', (e) => {
            checkValidate();
        });

        const checkValidate = () => {
            if (elem.name == "name" && (/[^а-яёА-ЯЁ\s]/g.test(elem.value) || /^[\s]+/.test(elem.value) || elem.value == '' || elem.value.length < 2 )) {
                success = false; 
                elem.value = elem.value.replace(/[^а-яёА-ЯЁ\s]/g, "");
                elem.closest('label').querySelector('span').style.color = 'red';
            } else if (elem.name == "name") {
                elem.closest('label').querySelector('span').style.color = '';
            }
            if (elem.name == "phone" && elem.value.length < 18) {
                success = false;
                if (elem.closest('label')) {
                    elem.closest('label').querySelector('span').style.color = 'red';
                } else {
                    elem.closest('input').style="border: 2px solid red;";    
                }
                    
            } else if (elem.name == "phone") {
                if (elem.closest('label')) {
                    elem.closest('label').querySelector('span').style.color = '';
                } else {
                    elem.closest('input').style= '';    
                }
            }
            if (elem.className == "checkbox__input" && !elem.checked) {
                success = false; 
                elem.closest('.checkbox').querySelector('label').style="border: 2px solid red;";
            } else if (elem.className == "checkbox__input") {
                elem.closest('.checkbox').querySelector('label').style="";
            }
        };

        checkValidate();

    });

    return success;
};

export { validate  };
