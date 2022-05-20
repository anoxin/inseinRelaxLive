export class TypeService {
    getServices() {
        return fetch('http://localhost:4545/services').then(res => res.json());
    }

    addService(service) {
        return fetch('http://localhost:4545/services', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(service)

        }).then(res => res.json());
    }
    removeService(id) {
        return fetch(`http://localhost:4545/services/${id}`, {
            method: 'DELETE'
        }).then(res => res.json());
    }
    changeService(id, data) {
        return fetch(`http://localhost:4545/services/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    }
    getService(id) {
        return fetch(`http://localhost:4545/services/${id}`).then(res => res.json());

    }
    editService(id, service) {
        const form = document.querySelector('.modal > form');
        if (!form.classList.contains('add-form')) {
            return fetch(`http://localhost:4545/services/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(service)
            }).then(res => res.json());

        } else {
            return fetch('http://localhost:4545/services', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(service)
    
            }).then(res => res.json());
        }
   
    }
}