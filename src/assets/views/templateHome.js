export const templateHome =()=>{

    const containerHome = document.createElement('div');

    const contentHome = `<main>
    <h1>Bienvenido a Visitors</h1>
    <div class="visitant"> 
    <button class="btn btn-outline-dark" id="register">Registro</button> 
    <button class="btn btn-outline-dark" id="login">Ingreso</button> 
    </div>
    <button class="btn btn-outline-dark" id="admin">Administrador</button>
    </main>` 
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