export class TypeService {
    getTypes() {
        return fetch('http://localhost:4545/services').then(res => res.json());
    }
}