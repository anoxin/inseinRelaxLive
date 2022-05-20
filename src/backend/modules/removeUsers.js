import { render } from "./render";

export const removeUsers = () => {
    const tboby = document.getElementById('table');

    tboby.addEventListener('click', (event) => {
        if (event.target.closest('.action-remove')) {
            const tr = event.target.closest('tr');
            const id = tr.dataset.key;
            
            userService.removeUser(id).then(res => {
                userService.getUsers().then(users => {
                    render(users);
                });
            })
        }
    });
}