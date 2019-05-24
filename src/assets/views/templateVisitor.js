export const templateVisitor =()=>{
    const containerVisitor = document.createElement('div');
    const contenVisitor = `
    <section>
        <h4>CONTACTO DE ENTRADA</h4>
        <input type="text" name="" placeholder="Nombre de la persona que te recibirá" id="contact">
    </section>
    <div>
        <select name="oficinas" id="office">
            <option value="0">IF Blanco</option>
            <option value="1">AguasLab</option>
            <option value="2">Brilla</option>
            <option value="3">Co-Emprendedores</option>
            <option value="4">Concuerda</option>
            <option value="5">Destilería Husares</option>
            <option value="6">Impulso Docente</option>
            <option value="7">Laboratoria</option>
            <option value="8">Mano de Chef</option>
            <option value="9">Neyun</option>
            <option value="10">ÑAM</option>
        </select>
    </div>
<div>
    <input type="mail" placeholder="example@lab.com" class="form-control">
</div>

 
   ` 

    containerVisitor.innerHTML=contenVisitor;
// manejo dom para rescatar los valores
const selectVisitor = containerVisitor.querySelector('#registry')
selectVisitor.addEventListener('change', () => {

})

    return containerVisitor;  
};