export const templateRegister =()=>{

    const containerRegister = document.createElement('div');

    const contenRegister = `<main>
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
                    <input type="text" placeholder="Nombre" class="form-control">
                    <input type="text" placeholder="Apellido" class="form-control">
                    <input type="number" placeholder="Cedúla de identidad" class="form-control">
                    <input type="mail" placeholder="example@lab.com" class="form-control">
                    <input type="number" placeholder="+56 9123 45 678" class="form-control">
                </div>
                <div id="rut">
                    
                </div>
                </div>
        </div>
    </div>
   ` 

    containerRegister.innerHTML=contenRegister;
        return containerRegister;  
    }