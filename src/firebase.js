import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDT6elT9ibGslleYhBoepGCuff8iGvG0iA",
    authDomain: "whatsappclone-4a84c.firebaseapp.com",
    projectId: "whatsappclone-4a84c",
    storageBucket: "whatsappclone-4a84c.appspot.com",
    messagingSenderId: "422942512971",
    appId: "1:422942512971:web:ff3ecaa5151ccac06b3ace",
    measurementId: "G-YQ6Z7CG1LF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;