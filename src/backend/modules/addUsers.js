import { render } from "./render";

export const addUsers = () => {
    const form = document.querySelector('.modal > form');
    const typeInput = form.querySelector('#type');
    const nameInput = form.querySelector('#name');
    const unitsInput = form.querySelector('#units');
    const costInput = form.querySelector('#cost');

    const body = document.body;

    form.querySelectorAll('input').forEach((elem) => {
        elem.setAttribute('required', '');
    });

    body.addEventListener('click', (e) => {
        if (e.target.closest('button.btn-addItem')) {
            document.querySelector('#modal').style.display = "flex";
        }
        if (e.target.closest('button.button__close')) {
            document.querySelector('#modal').style.display = "";
            form.classList.add('add-form');
            form.reset();
        }

    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if(!form.dataset.method) {
            const user = {
                type: typeInput.value,
                name: nameInput.value,
                units: unitsInput.value,
                cost: costInput.value,
                id: Math.floor(Math.random() * (9999999999)) + 1000000000
            };
    
            userService.addUser(user).then(() => {
                userService.getUsers().then(users => {
                    render(users);
                    form.reset();
                });
            });

        }

    });
};