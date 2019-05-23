export const templateHome =()=>{

    const containerHome = document.createElement('div');

    const contentHome = `<main>
    <h1>Bienvenido a Visitors</h1>
    <div class="visitant"> 
    <button class="btn" id="register">Registro</button> 
    <button class="btn" id="login">Ingreso</button> 
    </div>
    <button class="btn" id="admin">Administrador</button>
    </main>` 

    containerHome.innerHTML=contentHome;
        return containerHome;  
    }