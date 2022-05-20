import { render } from "./render";

export const removeServices = () => {
    const tboby = document.getElementById('table');

    tboby.addEventListener('click', (event) => {
        if (event.target.closest('.action-remove')) {
            const tr = event.target.closest('tr');
            const id = tr.dataset.key;
            
            typeService.removeService(id).then(res => {
                typeService.getServices().then(services => {
                    render(services);
                });
            })
        }
    });
}