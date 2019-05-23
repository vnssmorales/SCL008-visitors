export const templateLogin =()=>{
    const containerLogin = document.createElement('div');
    // creamos el contenido del login
    const contentLogin = ` <main>
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
    </main>`
    containerLogin.innerHTML=contentLogin;
    return containerLogin;
} 