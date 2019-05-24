export const userLogin = (nameActive, passActive) =>{
  var user = firebase.database().ref('users/');
            user.once('value').then(function(snapshot) {
              let key = Object.keys(snapshot.val());
              for (let i=0; i<key.length; i++){
                    if (key[i] === passActive){
                    alert('existe el usuario')
                     }
          
               }
            })
}
  