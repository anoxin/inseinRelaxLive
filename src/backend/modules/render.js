export const render = (services) => {
    const tboby = document.getElementById('table');
    const select = document.getElementById('typeItem');
    let arrType = [];

    if (tboby) {
        tboby.innerHTML = '';
        select.innerHTML = '';

        services.forEach(service => {
            tboby.insertAdjacentHTML('beforeend', `
                <tr data-key="${service.id}" class="table__row">
                    <td class="table__id table__cell">${service.id}</td>
                    <td class="table-type table__cell">${service.type}</td>
                    <td class="table-name table__cell">
                        ${service.name}
                    </td>
                    <td class="table-units table__cell">
                        ${service.units}
                    </td>
                    <td class="table-cost table__cell">
                        ${service.cost} руб
                    </td>
                    <td>
                        <div class="table__actions table__cell">
                            <button class="button action-change"><span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>
                            </button>
                            <button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
                            </button>
                        </div>
                    </td>
                </tr>
                
            `);
            arrType.push(service.type);
    
        });
    
        let newArr = Array.from(new Set(arrType));
    
        select.insertAdjacentHTML('beforeend', `
            <option value="Все услуги">Все услуги</option>  
        `);
        
        newArr.forEach(elem => {
            select.insertAdjacentHTML('beforeend', `
                <option value="${elem}">${elem}</option>  
            `);
    
        });
    
        select.addEventListener('change', () => {
            tboby.querySelectorAll('.table__row').forEach(elem => {
                if (elem.innerHTML.search(`${select.value}`) == -1 && select.value != "Все услуги") {
                    elem.style.display = "none";
                } else {
                    elem.style.display = "";
                }
            });
    
        });
    }
    


};