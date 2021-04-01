import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
  
  var firebaseConfig = {
    apiKey: "AIzaSyBvIs9uLB7pVsiVieRUlHP-nvqvRcP3BpY",
    authDomain: "firegram-f9b03.firebaseapp.com",
    projectId: "firegram-f9b03",
    storageBucket: "firegram-f9b03.appspot.com",
    messagingSenderId: "569922430750",
    appId: "1:569922430750:web:9be60893fd1ac7cb960b0f"
  };
  
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export {projectStorage,projectFirestore};
