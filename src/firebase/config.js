import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCu_ndx9o2txpxEiZx2M7td_2Ql1b-X7HY",
    authDomain: "proj-management-c7f15.firebaseapp.com",
    projectId: "proj-management-c7f15",
    storageBucket: "proj-management-c7f15.appspot.com",
    messagingSenderId: "967203904649",
    appId: "1:967203904649:web:6944849cfc6b637f8e7a58"
  };

  firebase.initializeApp(firebaseConfig)

  const projfirestore = firebase.firestore()
  const projAuth = firebase.auth()

  const timestamp = firebase.firestore.Timestamp


  export {projfirestore,projAuth}

