import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const n=document.querySelector("form");n.addEventListener("submit",f);function f(t){t.preventDefault();const e=t.target.elements.delay.value,o=t.target.elements.state.value;new Promise((r,s)=>{setTimeout(()=>{if(o==="fulfilled")return r(e);if(o==="rejected")return s(e)},e)}).then(()=>{i.success({title:"OK",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight",message:`Fulfilled promise in ${e}ms`,timeout:`${e}`})}).catch(()=>{i.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",message:`Rejected promise in ${e}ms`,timeout:`${e}`})}),t.target.reset()}
//# sourceMappingURL=commonHelpers2.js.map
