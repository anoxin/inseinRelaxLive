import { render } from "./modules/render";
import { renderLogin } from "./modules/renderLogin";
import { addServices } from "./modules/addServices";
import { TypeService } from "./modules/typeService";
import { removeServices } from "./modules/removeServices";
import { editServices } from "./modules/editServices";
import { LoginService } from "./modules/loginService";
import { loginTable } from "./modules/loginTable";

window.typeService = new TypeService;
window.loginService = new LoginService;

typeService.getServices().then(data => {
    render(data);
});
loginService.getServices().then(data => {
    renderLogin(data);
});

loginTable();
if (document.location.pathname == '/admin/table.html' ||
document.location.pathname == '/dist/admin/table.html') {
    addServices();
    removeServices();
    editServices();

}



