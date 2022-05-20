export const renderLogin = (services) => {
    const name = document.getElementById('name');
    const password = document.querySelector('input[type="password"]');
    const form = document.querySelector('.main-form > form');

    if (form) {
        const input = form.querySelectorAll('input');

        form.querySelectorAll('span')[0].style.display = 'none';
        form.querySelectorAll('span')[1].style.display = 'none';
    
        input.forEach((elem) => {
            elem.addEventListener('input', (e) => {
                form.querySelectorAll('span')[0].style.display = 'none';
                form.querySelectorAll('span')[1].style.display = 'none'; 
            });
        });  
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            services.forEach(service => {
                if(service.admin == name.value && service.password == password.value) {
                    name.value = '';
                    password.value = '';
                    document.location.href = `${document.location.href}table.html`;
                    document.cookie = 'login = true';
    
                } else  {
                    form.querySelectorAll('span')[0].style.display = '';
                    form.querySelectorAll('span')[1].style.display = '';
                    name.value = '';
                    password.value = '';
                        
                }
            });
    
        });

    }

};