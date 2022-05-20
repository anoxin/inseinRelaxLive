(()=>{"use strict";const e=e=>{const t=document.getElementById("table"),n=document.getElementById("typeItem");let o=[];if(t){t.innerHTML="",n.innerHTML="",e.forEach((e=>{t.insertAdjacentHTML("beforeend",`\n                <tr data-key="${e.id}" class="table__row">\n                    <td class="table__id table__cell">${e.id}</td>\n                    <td class="table-type table__cell">${e.type}</td>\n                    <td class="table-name table__cell">\n                        ${e.name}\n                    </td>\n                    <td class="table-units table__cell">\n                        ${e.units}\n                    </td>\n                    <td class="table-cost table__cell">\n                        ${e.cost} руб\n                    </td>\n                    <td>\n                        <div class="table__actions table__cell">\n                            <button class="button action-change"><span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>\n                            </button>\n                            <button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>\n                            </button>\n                        </div>\n                    </td>\n                </tr>\n                \n            `),o.push(e.type)}));let a=Array.from(new Set(o));n.insertAdjacentHTML("beforeend",'\n            <option value="Все услуги">Все услуги</option>  \n        '),a.forEach((e=>{n.insertAdjacentHTML("beforeend",`\n                <option value="${e}">${e}</option>  \n            `)})),n.addEventListener("change",(()=>{t.querySelectorAll(".table__row").forEach((e=>{-1==e.innerHTML.search(`${n.value}`)&&"Все услуги"!=n.value?e.style.display="none":e.style.display=""}))}))}};window.typeService=new class{getServices(){return fetch("http://localhost:4545/services").then((e=>e.json()))}addService(e){return fetch("http://localhost:4545/services",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json()))}removeService(e){return fetch(`http://localhost:4545/services/${e}`,{method:"DELETE"}).then((e=>e.json()))}changeService(e,t){return fetch(`http://localhost:4545/services/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json()))}getService(e){return fetch(`http://localhost:4545/services/${e}`).then((e=>e.json()))}editService(e,t){return document.querySelector(".modal > form").classList.contains("add-form")?fetch("http://localhost:4545/services",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json())):fetch(`http://localhost:4545/services/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json()))}},window.loginService=new class{getServices(){return fetch("http://localhost:4545/password").then((e=>e.json()))}},typeService.getServices().then((t=>{e(t)})),loginService.getServices().then((e=>{(e=>{const t=document.getElementById("name"),n=document.querySelector('input[type="password"]'),o=document.querySelector(".main-form > form");if(o){const a=o.querySelectorAll("input");o.querySelectorAll("span")[0].style.display="none",o.querySelectorAll("span")[1].style.display="none",a.forEach((e=>{e.addEventListener("input",(e=>{o.querySelectorAll("span")[0].style.display="none",o.querySelectorAll("span")[1].style.display="none"}))})),o.addEventListener("submit",(a=>{a.preventDefault(),e.forEach((e=>{e.admin==t.value&&e.password==n.value?(t.value="",n.value="",document.location.href=`${document.location.href}table.html`,document.cookie="login = true"):(o.querySelectorAll("span")[0].style.display="",o.querySelectorAll("span")[1].style.display="",t.value="",n.value="")}))}))}})(e)})),"/admin/table.html"!=document.location.pathname&&"/dist/admin/table.html"!=document.location.pathname||/login=true/g.test(document.cookie)||(/dist/g.test(document.location.pathname)?document.location.href=`${document.location.protocol}//${document.location.host}/dist/admin/`:document.location.href=`${document.location.protocol}//${document.location.host}/admin/`),"/admin/table.html"!=document.location.pathname&&"/dist/admin/table.html"!=document.location.pathname||((()=>{const t=document.querySelector(".modal > form"),n=t.querySelector("#type"),o=t.querySelector("#name"),a=t.querySelector("#units"),s=t.querySelector("#cost"),l=document.body;t.querySelectorAll("input").forEach((e=>{e.setAttribute("required","")})),l.addEventListener("click",(e=>{e.target.closest("button.btn-addItem")&&(document.querySelector("#modal").style.display="flex"),e.target.closest("button.button__close")&&(document.querySelector("#modal").style.display="",t.classList.add("add-form"),t.reset())})),t.addEventListener("submit",(l=>{if(l.preventDefault(),!t.dataset.method){const l={type:n.value,name:o.value,units:a.value,cost:s.value,id:Math.floor(9999999999*Math.random())+1e9};typeService.addService(l).then((()=>{typeService.getServices().then((n=>{e(n),t.reset()}))}))}}))})(),document.getElementById("table").addEventListener("click",(t=>{if(t.target.closest(".action-remove")){const n=t.target.closest("tr").dataset.key;typeService.removeService(n).then((t=>{typeService.getServices().then((t=>{e(t)}))}))}})),(()=>{const t=document.getElementById("table"),n=document.querySelector(".modal > form"),o=n.querySelector("#type"),a=n.querySelector("#name"),s=n.querySelector("#units"),l=n.querySelector("#cost");n.classList.contains("add-form")?n.addEventListener("submit",(t=>{if(t.preventDefault(),!n.dataset.method){const t={type:o.value,name:a.value,units:s.value,cost:l.value,id:Math.floor(9999999999*Math.random())+1e9};typeService.addService(t).then((()=>{typeService.getServices().then((t=>{e(t),n.reset()}))}))}})):(t.addEventListener("click",(e=>{if(e.target.closest(".action-change")){document.querySelector(".modal__header").textContent="Редактировать услугу",document.querySelector("#modal").style.display="flex",n.classList.remove("add-form");const t=e.target.closest("tr").dataset.key;typeService.getService(t).then((e=>{o.value=e.type,a.value=e.name,s.value=e.units,l.value=e.cost,n.dataset.method=t}))}})),n.addEventListener("submit",(t=>{if(t.preventDefault(),n.dataset.method){const t=n.dataset.method,c={type:o.value,name:a.value,units:s.value,cost:l.value};typeService.editService(t,c).then((()=>{typeService.getServices().then((t=>{e(t),n.reset(),n.removeAttribute("data-method")}))}))}})))})())})();