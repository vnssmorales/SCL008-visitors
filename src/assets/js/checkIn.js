import {templateRegister} from '../views/templateRegister.js'

export const registration = (name, lastname, mail, identityCell, phone) => {
    firebase.auth().createUserWithEmailAndPassword(mail, identityCell)
    .then(function(){
      verificar();
      eyes();
      // funcion guardarUsuarioenDatabase();
    })
    .catch(function(error) {
    // Handle Errors here.
        let errorCode =alert (error.code);
        let errorMessage = alert(error.message);
    // ...
  });
  firebase.auth().onAuthStateChanged(function(user) { // escucha de quien se creo
    if (user) { // si esta activo
      firebase.database().ref('users/' + user.uid).set({
       
      });
    }
  // observador de datos del usuario
  })
}
