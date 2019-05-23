import {templateHome} from './assets/views/templateHome.js'
import {templateRegister} from './assets/views/templateRegister.js'
import {templateLogin} from './assets/views/templateLogin.js'


const changeRouter = (hash) =>{
    if (hash==='#/home'){
        return showTemplate(hash);
    }
    if (hash==='#/login'){
        return showTemplate(hash);
    }
    if (hash==='#/register'){
        return showTemplate(hash);
    }
}
const showTemplate = (hash) =>{
const router=hash.substring(2); //para que saque el # y tome solo login no #login
let containterRoot = document.getElementById("root");
containterRoot.innerHTML='';

switch(router){
case 'home':
containterRoot.appendChild(templateHome());
break;
case 'login':
containterRoot.appendChild(templateLogin());
break;
case 'register':
containterRoot.appendChild(templateRegister());
break;
default:
containterRoot.innerHTML = `<p>Error 408</p>`
}
}

export const initRouter=()=>{
    window.addEventListener('load',changeRouter(window.location.hash));
    if('onhashchange'in window){
        window.onhashchange=()=>{
            changeRouter(window.location.hash);
        }
    }

}