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
                    <input type="text" aria-label="Nombre" class="form-control">
                    <input type="text" aria-label="Apellido" class="form-control">
                </div>
            </div>
        </div>
    </div>
    </main>` 

    containerRegister.innerHTML=contenRegister;
        return containerRegister;  
    }