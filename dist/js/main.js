(()=>{"use strict";(()=>{const e=document.querySelector(".header-contacts__phone-number-accord"),t=document.querySelectorAll(".header-contacts__phone-number")[1],o=document.querySelector(".header-contacts__arrow");o.addEventListener("click",(()=>{""==t.style.opacity?(e.style.top="25px",t.style.opacity="1",o.style.transform="rotate(-180deg)"):(e.style.top="0",t.style.opacity="",o.style.transform="rotate(0deg)")}))})(),(()=>{const e=document.querySelector(".popup-dialog-menu"),t=document.querySelector(".popup-repair-types"),o=document.body;let s,n,l=document.documentElement.clientWidth,r="",c=0,i=0;const a=()=>{l<576?(e.style.transform="translate3d(0, -150%, 0)",e.style.transition="0s"):(e.style.transform="",e.style.transition="0s")},u=()=>{n=requestAnimationFrame(u),c<i+s-50&&(!0===r||""===r)?(c+=50,document.documentElement.scrollTop=c,r=!0):c>i+s+50&&(!1===r||""==r)?(c-=50,document.documentElement.scrollTop=c,r=!1):(document.documentElement.scrollTop=i+s,cancelAnimationFrame(n))};window.addEventListener("resize",(()=>{l=document.documentElement.clientWidth,a()})),a(),o.addEventListener("click",(o=>{if(o.target.closest(".menu__icon")&&(e.style.transition="1s",e.style.transform="translate3d(0, 0, 0)"),o.target.closest(".close-menu")&&l>576?e.style.transform="":o.target.closest(".close-menu")&&l<576&&(e.style.transition="1s",e.style.transform=""),o.target.matches(".popup-menu-nav__item > a.menu-link")||o.target.closest(".button-footer")){o.preventDefault();let t=document.querySelector(o.target.getAttribute("href"));e.style.transform="",i=t.getBoundingClientRect().top,c=document.documentElement.scrollTop,s=c,r="",u()}o.target.closest(".link-list > a")&&(o.preventDefault(),e.style.transform="",t.style.visibility="visible"),(o.target.closest(".popup-repair-types > .mobile-hide")||o.target.closest(".tablet-hide > .close"))&&(o.preventDefault(),t.style.visibility="")}))})(),(()=>{const e=document.querySelector(".popup-privacy"),t=(document.querySelector(".popup-privacy > .close"),document.body);console.log(e),t.addEventListener("click",(t=>{t.target.closest(".link-privacy")&&(e.style.visibility="visible"),(t.target.closest(".popup-privacy > .close")||t.target.closest(".popup-dialog > .close"))&&(e.style.visibility="hidden")}))})()})();