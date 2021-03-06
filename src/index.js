import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app'



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





ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
