import {validateUserActive} from '../js/validate.js'
import {userLogin} from '../js/login.js'
export const templateLogin =()=>{
    const containerLogin = document.createElement('div');
    // creamos el contenido del login
    const contentLogin = `
    <div class="container" id="loginreg">
    <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-12" id="ingusuario">
    <div> <input id="user" type="user" placeholder="ingresa usuario"> 
    <p class="error" id="errorNameActive"> </div>
    <div> <input id="pass" type="password" placeholder="ingresar contraseña">
    <p class="error" id="errorPassActive"></p></div>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-12" id="btninguser">
    <div> <button class="btn btn-outline-dark" id="userActive">Ingresar</button> 
    </div>
    </div>
    </div>
    </div>
    `
    containerLogin.innerHTML=contentLogin;
    const btnUser=containerLogin.querySelector('#userActive');
    btnUser.addEventListener('click',()=>{
        let nameActive = document.getElementById('user').value;
        let passActive = document.getElementById('pass').value;
        if (nameActive ==="") {
            document.getElementById('errorNameActive').innerHTML =`Debe ingresar un email ya registrado`
        }
        if (passActive ==="") {
            document.getElementById('errorPassActive').innerHTML = `Por favor ingrese la contraseña`
        }
        if (validateUserActive(nameActive,passActive)) {
            userLogin(nameActive,passActive);
        }   
         
     })

    return containerLogin;
} 