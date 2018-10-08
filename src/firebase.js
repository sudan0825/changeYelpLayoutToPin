//create a firebase instance
let firebase = require('firebase');

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAv4uSkEm1BaS4SKAHWnt6N3Q8BCuTiHpU",
    authDomain: "yelpwithp.firebaseapp.com",
    databaseURL: "https://yelpwithp.firebaseio.com",
    projectId: "yelpwithp",
    storageBucket: "yelpwithp.appspot.com",
    messagingSenderId: "680990692359"
  };
firebase.initializeApp(config);


module.exports=firebase;
