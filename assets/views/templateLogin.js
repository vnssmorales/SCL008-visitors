export const templateLogin =()=>{
    const containerLogin = document.createElement('div');
    // creamos el contenido del login
    const contentLogin = `
    <div class="container" id="loginreg">
    <div class="row around-xs">
    <div class="foto col-xs-10 col-sm-8 col-md-8">
    <div class="input"> <input id="user" type="user" placeholder="ingresa usuario"> 
    <p class="error" id="errorNameActive"> </div>
    <div class="input"> <input id="pass" type="password" placeholder="ingresar contraseña">
    <p class="error" id="errorPassActive"></p> </div>
    <div class="btn btn-outline-dark"> <button class="btn" id="userActive">Ingresar</button> 
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
            userActive(nameActive,passActive);
            window.location.hash='#/wall';
        }   
         
     })

    return containerLogin;
} 