import{i as l}from"./assets/nok-b842b3ba.js";/* empty css                      */import{i as t}from"./assets/vendor-77e16229.js";const n="/goit-js-hw-10/assets/ok-fb8a7a60.svg",f=document.querySelector(".form");f.addEventListener("submit",m);function m(o){o.preventDefault();const e=o.target.elements.delay.value,r=o.target.elements.state.value;new Promise((s,i)=>{setTimeout(()=>r==="fulfilled"?s(e):i(e),e)}).then(()=>{t.success({iconUrl:n,title:"OK",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight",message:`Fulfilled promise in ${e}ms`,timeout:2e3})}).catch(()=>{t.error({iconUrl:l,title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",message:`Rejected promise in ${e}ms`,timeout:2e3})}),o.target.reset()}
//# sourceMappingURL=commonHelpers2.js.map
