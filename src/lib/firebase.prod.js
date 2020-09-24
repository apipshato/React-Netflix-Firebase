import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// we need some how seed database

// we need config here
const config ={}
const Firebase =Firebase.initializeApp(config);

export {firebase}