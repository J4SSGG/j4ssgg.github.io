// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDKfKMkzXnNHwr4Mi9EdDVyyhUT5xpuT7M",
    authDomain: "tu-chunche.firebaseapp.com",
    databaseURL: "https://tu-chunche.firebaseio.com",
    projectId: "tu-chunche",
    storageBucket: "tu-chunche.appspot.com",
    messagingSenderId: "552794816508",
    appId: "1:552794816508:web:41c2c5b3a65206ae6f3c79",
    measurementId: "G-MT85010R14"
};


// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
firebase.analytics();


let checkUser = (username, password) => {
    firebase.database()
        .ref('usuarios')
        .orderByChild('username')
        .equalTo(username)
        .once('value', function (snapshot) {
            checkPassword(snapshot, password)
            checkSession();
        });
}

let checkPassword = (snapshot, password) => {
    sessionStorage.user = false;
    snapshot.forEach(function (childSnapshot) {
        if (childSnapshot.val().password == password) {
            sessionStorage.user = true;
            return;
        }
    });

};

let checkSession = () => {
    if (sessionStorage.user == "true"){
        alert('Good');
    }else{
        alert('No hemos encontrado un registro de sus datos.')
    }
}

$(document).ready(function() {
    checkUser("joe", 1234);
});