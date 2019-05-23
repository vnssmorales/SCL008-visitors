export const templateHome =()=>{

    const containerHome = document.createElement('div');

    const contentHome = `
     
    <div class= "card text-center id="visitors" 
    <div class= "card-header" </div>
    <h1>Bienvenido a Visitors</h1>
    <div class= "card-body" 
    <button class="btn btn-outline-dark" id="register">Registro</button> 
    <button class="btn btn-outline-dark" id="login">Ingreso</button> 
    <button class="btn btn-outline-dark" id="admin">Administrador</button>
    </div>
    </div>
    
    ` 
    containerHome.innerHTML=contentHome;
     const btnRegister=containerHome.querySelector('#register');
     const btnLogin=containerHome.querySelector('#login');
     const btnAdmin=containerHome.querySelector('#admin');

     btnRegister.addEventListener('click',()=>{   
         console.log('register') 
        window.location.hash='#/register'; 
     })
     btnLogin.addEventListener('click',()=>{   
        console.log('login') 
        window.location.hash='#/login'; 
     })
     btnAdmin.addEventListener('click',()=>{   
        console.log('Administrador') 
        
     })
    
        return containerHome;  
    }