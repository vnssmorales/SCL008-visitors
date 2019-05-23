export const templateRegister =()=>{

    const containerRegister = document.createElement('div');

    const contenRegister = `<section>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <img src="../img/icon-Ewok.png" alt="icon-Ewok" class="rounded-circle">
            </div>
        </div>
    </div>
   
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Nombre y Apellido</span>
                    </div>
                    <input type="text" id="nombre" placeholder="Nombre" class="form-control">
                    <input type="text" id="apellido" placeholder="Apellido" class="form-control">
                    <input type="number" id="rut" placeholder="Cedúla de identidad" class="form-control">
                    <input type="mail" id="correo" placeholder="example@lab.com" class="form-control">
                    <input type="number" id="fono" placeholder="+56 9123 45 678" class="form-control">
                </div>
                <div>
                <button class="btn btn-outline-dark" id="register">Registro de visitas</button>
                </div>
                </div>
        </div>
    </div>
    </section>
   ` 

    containerRegister.innerHTML=contenRegister;
// manejo dom para rescatar los valores
const btn = containerRegister.querySelector('#register')
btn.addEventListener('click', () => {
let name = document.getElementById('nombre').value;
let lastname = document.getElementById('apellido').value;
let identityCell = document.getElementById('rut').value;
let mail = document.getElementById('correo').value;
let phone = document.getElementById('fono').value;
console.log(name);
console.log(lastname);
console.log(mail);
console.log(identityCell);
console.log(phone);
registration(name, lastname, mail, identityCell, phone);
})

        return containerRegister;  
    };
    