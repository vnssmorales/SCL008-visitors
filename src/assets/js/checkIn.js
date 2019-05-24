
export const registration = (identityCell, name,lastname, mail, phone) => {
    firebase.database().ref('users/' + identityCell).set({
       nombre : name,
       apellido : lastname,
       correo: mail,
       fono: phone
      });
    }

