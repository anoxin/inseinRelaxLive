export const render = (users) => {
    const tboby = document.querySelector('.popup-repair-types-content-table__list > tbody');
    const buttons = document.querySelector('.nav-list-popup-repair');
    let arrType = [];
   
        tboby.innerHTML = '';
        buttons.innerHTML = '';

        users.forEach(user => {
            tboby.insertAdjacentHTML('beforeend', `
                <tr class="mobile-row">
                    <td class="repair-types-name" value="${user.type}">${user.name}</td>
                    <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                    <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                    <td class="repair-types-value">${user.units}</sup></td>
                    <td class="repair-types-value">${user.cost} руб.</td>
                </tr>
                
            `);
            arrType.push(user.type);
    
        });
    
        let newArr = Array.from(new Set(arrType));
        
        newArr.forEach(elem => {
            buttons.insertAdjacentHTML('beforeend', `
                <button class="button_o popup-repair-types-nav__item">${elem}</button 
            `);
    
        });


        buttons.querySelector('button').style.cssText = "border: 3px solid rgb(244, 137, 34) !important";

        tboby.querySelectorAll('tr.mobile-row').forEach(elem => {
            if (elem.innerHTML.search(`${buttons.querySelector('button').textContent}`) == -1) {
                elem.style.display = "none";
            } else {
                elem.style.display = "";
            }
        });
    
        buttons.addEventListener('click', (e) => {
            document.querySelector('#switch-inner').textContent = e.target.textContent;
            buttons.querySelectorAll('button').forEach((item) => {
                item.style.cssText = "";
            });
            e.target.style.cssText = "border: 3px solid rgb(244, 137, 34) !important";
            tboby.querySelectorAll('tr.mobile-row').forEach(elem => {
                if (elem.innerHTML.search(`${e.target.textContent}`) == -1) {
                    elem.style.display = "none";
                } else {
                    elem.style.display = "";
                }
            });
    
        }); 

};
