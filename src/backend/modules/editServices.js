import { render } from "./render";

export const editServices = () => {
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
                
                typeService.getService(id).then(service => {
                    typeInput.value = service.type;
                    nameInput.value = service.name;
                    unitsInput.value = service.units;
                    costInput.value = service.cost;
                    form.dataset.method = id;
    
                });
            }
        });
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            if(form.dataset.method) {
                const id = form.dataset.method;
                const service = {
                    type: typeInput.value,
                    name: nameInput.value,
                    units: unitsInput.value,
                    cost: costInput.value,
         
                };
        
                typeService.editService(id, service).then(() => {
                    typeService.getServices().then(services => {
                        render(services);
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
                const service = {
                    type: typeInput.value,
                    name: nameInput.value,
                    units: unitsInput.value,
                    cost: costInput.value,
                    id: Math.floor(Math.random() * (9999999999)) + 1000000000
                };
        
                typeService.addService(service).then(() => {
                    typeService.getServices().then(services => {
                        render(services);
                        form.reset();
                    });
                });
    
            }
    
        });
    }

    
};