
export const registration = (name, lastname, mail, identityCell, phone) => {
    firebase.auth().createUserWithEmailAndPassword(mail, identityCell)
    .then(function(){
    
    })
    .catch(function(error) {
        let errorCode =alert (error.code);
        let errorMessage = alert(error.message);
  });
  firebase.auth().onAuthStateChanged(function(user) { 
    if (user) { // si esta activo
      firebase.database().ref('users/' + user.uid).set({
       nombre : name,
       apellido : lastname,
       correo: mail,
       rut:identityCell,
       fono: phone
      });
    }
  
  })
}
