import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCof2yrxdPgzXSnNtt-yDrrwIs0YjrRQvg",
    authDomain: "vuejs-liff.firebaseapp.com",
    databaseURL: "https://vuejs-liff.firebaseio.com",
    projectId: "vuejs-liff",
    storageBucket: "vuejs-liff.appspot.com",
    messagingSenderId: "403356732656",
    appId: "1:403356732656:web:5b505c920c607622d10635"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore();