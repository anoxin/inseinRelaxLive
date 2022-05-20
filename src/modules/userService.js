export class UserService {
    getUsers() {
        return fetch('http://localhost:4545/users').then(res => res.json());
    }
}