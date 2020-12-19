import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
//Initiliaze Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAnk4dxlYQALK1JvDpch8qxYodQNy_VutI",
  authDomain: "login-firebase-with.firebaseapp.com",
  projectId: "login-firebase-with",
  storageBucket: "login-firebase-with.appspot.com",
  messagingSenderId: "1079730454412",
  appId: "1:1079730454412:web:915fa1f9c4561e8e8f60a9"
};
firebase.initializeApp(firebaseConfig);

firebase
  .firestore()
  .settings({timestampsInSnapshots: true});

  export default firebase;
