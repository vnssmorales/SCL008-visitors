export const templateHome =()=>{

    const containerHome = document.createElement('div');

    const contentHome = `
     <div class= "container id="visitorshome">
     <div class="row">
     
     <div class="col-sm-12 col-md-12 col-lg-12" id="welcome">
    <h1>Bienvenido a Visitors...</h1>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-12" id= "home">
    <div> <button class="btn btn-outline-dark" id="register">Registro</button> 
    <button class="btn btn-outline-dark" id="login">Ingreso</button>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-12" id= "administrator">
    <div> <button class="btn btn-outline-dark" id="admin">Administrador</button> </div>
    </div>
    </div>
    </div>
    </div>
    ` 
    containerHome.innerHTML=contentHome;
     const btnRegister=containerHome.querySelector('#register');
     const btnLogin=containerHome.querySelector('#login');
     const btnAdmin=containerHome.querySelector('#admin');

     btnRegister.addEventListener('click',()=>{   
        window.location.hash='#/register'; 
     })
     btnLogin.addEventListener('click',()=>{   
        window.location.hash='#/login'; 
     })
     btnAdmin.addEventListener('click',()=>{   
        console.log('Administrador') 
        
     })
    
        return containerHome;  
    }