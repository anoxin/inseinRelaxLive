import { validate } from "./validate";

const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    statusBlock.style.color = 'red';
    const errorText = 'Ошибка...';
    
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
            form.append(statusBlock);
            sendData(formBody)
            .then(data => {
                // всплывающее окно
                document.querySelector('.popup-thank').style.visibility = 'visible';
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