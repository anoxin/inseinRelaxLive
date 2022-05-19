export class LoginService {
    getUsers() {
        return fetch('http://localhost:4545/password').then(res => res.json());
    }

}