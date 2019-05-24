import {registration} from '../js/checkIn.js'

export const templateRegister =()=>{
    const containerRegister = document.createElement('div');
    const contenRegister = `
    <div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12" id="photo">
            <div id="drop_zone"><h3>tu foto</h3></div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12" id="archivo">
            <input type="file" id="files" name="files[]" multiple />
           <output id="list"></output>
           </div>
        </div>
    </div>
   
    <div class="container">
    <div class="row">
        <div class="col-sm-6 col-md-8 col-lg-12" id ="inputname">
        <div class="form-group">
            <input type="text" id="nombre" placeholder="Nombre">   
            <input type="text" id="apellido" placeholder="Apellido">          
            <input type="text" id="rut" placeholder="rut, sin puntos ni guion">
            <input type="mail" id="correo" placeholder="example@lab.com"> 
            <input type="number" id="fono" placeholder="+56 9123 45 678">
         </div>
         </div>
            <div class="col-sm-6 col-md-8 col-lg-12" id ="btnregistry">
            <div><button class="btn btn-outline-dark" id="registry">Registro de visitas</button> </div>
        </div>
    </div>
</div>
 
   ` 

    containerRegister.innerHTML=contenRegister;
// manejo dom para rescatar los valores
const btnSaveRegister = containerRegister.querySelector('#registry')
const btnUploadPhoto = containerRegister.querySelector('#files')
const btnSavePhoto = containerRegister.querySelector('#photo')
btnSaveRegister.addEventListener('click', () => {
let name = document.getElementById('nombre').value;
let lastname = document.getElementById('apellido').value;
let identityCell = document.getElementById('rut').value;
let mail = document.getElementById('correo').value;
let phone = document.getElementById('fono').value;
registration(identityCell, name, lastname, mail, phone);
})

btnUploadPhoto.addEventListener('click', () => {
    function handleFileSelect(evt) {
        var files = evt.target.files; // FileList object
    
        // Loop through the FileList and render image files as thumbnails.
        for (var i = 0, f; f = files[i]; i++) {
    
          // Only process image files.
          if (!f.type.match('image.*')) {
            continue;
          }
    
          var reader = new FileReader();
    
          // Closure to capture the file information.
          reader.onload = (function(theFile) {
            return function(e) {
              // Render thumbnail.
              var span = document.getElementById('drop_zone');
              span.innerHTML = ['<img class="thumb" src="', e.target.result,
                                '" title="', escape(theFile.name), '"/>'].join('');
              document.getElementById('list').insertBefore(span, null);
            };
            
          })(f);
          console.log(f)
          // Read in the image file as a data URL.
          reader.readAsDataURL(f);
         
          
        }
      }
    
      document.getElementById('files').addEventListener('change', handleFileSelect, false);
})
btnSavePhoto.addEventListener('click', () => {
    var file = 
    ref.put(file).then(function(snapshot) {
  console.log('Uploaded a blob or file!');

})
})



return containerRegister;  
};