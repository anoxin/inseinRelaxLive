import { render } from "./modules/render";
import { renderLogin } from "./modules/renderLogin";
import { addUsers } from "./modules/addUsers";
import { UserService } from "./modules/userService";
import { removeUsers } from "./modules/removeUsers";
import { editUsers } from "./modules/editUsers";
import { LoginService } from "./modules/loginService";
import { loginTable } from "./modules/loginTable";

window.userService = new UserService;
window.loginService = new LoginService;

userService.getUsers().then(data => {
    render(data);
});
loginService.getUsers().then(data => {
    renderLogin(data);
});

loginTable();
if (document.location.pathname == '/admin/table.html') {
    addUsers();
    removeUsers();
    editUsers();

}



