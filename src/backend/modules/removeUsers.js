import { render } from "./render";

export const removeUsers = () => {
    const tboby = document.getElementById('table-body');

    tboby.addEventListener('click', (event) => {
        if (event.target.closest('.btn-remove')) {
            const tr = event.target.closest('tr');
            const id = tr.dataset.key
            
            userService.removeUser(id).then(res => {
                userService.getUsers().then(users => {
                    render(users);
                });
            })
        }
    });
}