import { validate } from "./validate";

const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';


    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        formData.forEach((val, key) => {
            if (val != '') {
                formBody[key] = val;
            }
            
        });

        if (validate(formElements)) {
            statusBlock.textContent = loadText;
            form.append(statusBlock);
            if (document.querySelectorAll('#form3 > div').length == 4) {
                document.querySelectorAll('#form3 > div')[3].style.color = 'white';
            }
            sendData(formBody)
            .then(data => {
                statusBlock.textContent = successText;
                    formElements.forEach(input => {
                        input.value = '';
                        input.checked = false;
                });
                setTimeout(() => {statusBlock.remove();}, 3000);
            })
            .catch(error => {
                statusBlock.textContent = errorText;
            });
        }

    };

    try {     
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            submitForm(); 
        });
    } catch (error) {
        console.log(error.message);
    }

};

export default sendForm;