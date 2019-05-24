//function for tddregistry
export const registryEmail = (mail) => {
    //expresión regular que simula el patrón del correo electrónico
    let email = /\S+@\S+\.\S+/;
    return email.test(mail);
  }

export const registerInput = (name, lastname, mail, identityCell, phone) => {
    if(name === '' || lastname === '' || mail === '' || identityCell === '' ||phone === ''){
        return false;
    }
    else{
        return true;
    }
}

//function for tddlogin
export const loginInput = (mail, identityCell) => {
     if(mail === '' || identityCell === ''){
        return false;
    }
    else{
        return true;
    }
}