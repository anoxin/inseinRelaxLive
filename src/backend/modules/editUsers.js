import { render } from "./render";

export const editUsers = () => {
    const tboby = document.getElementById('table');

    const form = document.querySelector('.modal > form');
    const typeInput = form.querySelector('#type');
    const nameInput = form.querySelector('#name');
    const unitsInput = form.querySelector('#units');
    const costInput = form.querySelector('#cost');



    if (!form.classList.contains('add-form')) {
        tboby.addEventListener('click', (event) => {
            if (event.target.closest('.action-change')) {
                document.querySelector('.modal__header').textContent = "Редактировать услугу";
                document.querySelector('#modal').style.display = "flex";
                form.classList.remove('add-form');
                const tr = event.target.closest('tr');
                const id = tr.dataset.key;
                
                userService.getUser(id).then(user => {
                    typeInput.value = user.type;
                    nameInput.value = user.name;
                    unitsInput.value = user.units;
                    costInput.value = user.cost;
                    form.dataset.method = id;
    
                });
            }
        });
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            if(form.dataset.method) {
                const id = form.dataset.method;
                const user = {
                    type: typeInput.value,
                    name: nameInput.value,
                    units: unitsInput.value,
                    cost: costInput.value,
         
                };
        
                userService.editUser(id, user).then(() => {
                    userService.getUsers().then(users => {
                        render(users);
                        form.reset();
                        form.removeAttribute('data-method');
                    });
                });
    
            }
    
        });

    } else {
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
    }

    
};