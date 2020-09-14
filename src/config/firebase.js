import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyABeCn-7gs1gAuzr9xdXf6bp3JiQU3_kwA",
    authDomain: "projeto-web-78e05.firebaseapp.com",
    databaseURL: "https://projeto-web-78e05.firebaseio.com",
    projectId: "projeto-web-78e05",
    storageBucket: "projeto-web-78e05.appspot.com",
    messagingSenderId: "552239057906",
    appId: "1:552239057906:web:2db4080930433f597f396b"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

