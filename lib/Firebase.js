/**
 * Created by Ronald_Gutierrez on 28/03/2017.
 */
import * as firebase from 'firebase'

class Firebase {
    static init(){
        firebase.initializeApp({
            apiKey: "AIzaSyDJgeN9kNgcMj_KtETvb7hfEfECGJUmzow",
            authDomain: "personalprofile-2fea5.firebaseapp.com",
            databaseURL: "https://personalprofile-2fea5.firebaseio.com",
            storageBucket: "personalprofile-2fea5.appspot.com"
        });

    }
}

module.exports = Firebase;