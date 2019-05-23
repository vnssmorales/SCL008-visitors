var config = {
    apiKey: "AIzaSyDC2bz-XOdK0z4L7DBJjsXpN4mFU7kVMR0",
    authDomain: "visitantes-b7d9d.firebaseapp.com",
    databaseURL: "https://visitantes-b7d9d.firebaseio.com",
    projectId: "visitantes-b7d9d",
    storageBucket: "visitantes-b7d9d.appspot.com",
    messagingSenderId: "829924763923",
    appId: "1:829924763923:web:63d82ef4b48342d8"
  };
  firebase.initializeApp(config);

 //Get a reference to the database service
 var database = firebase.database();

import {initRouter} from './route.js';

const init =()=>{
    initRouter();
}
window.addEventListener('load', init);
