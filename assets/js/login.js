export const userActive = (nameActive, passActive) =>{
    // let userRegistered = document.getElementById('user').value;
    // let key = document.getElementById('pass').value;
    
  // [START authwithemail]
  firebase.auth().signInWithEmailAndPassword(nameActive, passActive).catch(function(error) {
    // Handle Errors here.s
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode === 'auth/wrong-password') {
      alert('Error de password');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    document.getElementById('quickstart-sign-in').disabled = false;
    // [END_EXCLUDE]
  })
  // [END authwithemail]
    return 'Login con usuario y contraseña ok'

  };
  