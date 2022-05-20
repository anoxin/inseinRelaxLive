export class LoginService {
    getServices() {
        return fetch('http://localhost:4545/password').then(res => res.json());
    }

}