import { render } from "./render";

export const changePermissions = () => {
    const tboby = document.getElementById('table-body');

    tboby.addEventListener('click', (event) => {
        if (event.target.closest('input[type=checkbox]')) {
            const tr = event.target.closest('tr');
            const input = tr.querySelector('input[type=checkbox]');
            const id = tr.dataset.key
            
            userService.changeUser(id, {permissions: input.checked}).then(res => {
                userService.getUsers().then(users => {
                    render(users);
                });
            })
        }
    });
}