import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {seedDatabase} from '../seed';


// we need some how seed database

// we need config here
const config ={
    apiKey: "AIzaSyD9d3SfBw1jk0exiE-LT1PbpsiKggn_iEM",
    authDomain: "netflix-clone-d2d74.firebaseapp.com",
    databaseURL: "https://netflix-clone-d2d74.firebaseio.com",
    projectId: "netflix-clone-d2d74",
    storageBucket: "netflix-clone-d2d74.appspot.com",
    messagingSenderId: "327807642471",
    appId: "1:327807642471:web:a0b1fd19d7f2f597229dc2"
}
const firebase =Firebase.initializeApp(config);
// seedDatabase(firebase);
export {firebase};