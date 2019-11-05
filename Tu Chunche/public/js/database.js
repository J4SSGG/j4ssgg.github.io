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

let getStats = () => {
    firebase.database()
        .ref('calificaciones')
        .on('value', function (snapshot) {
            $("#cantidad").html(snapshot.val().cantidad);
            $("#calificacion").html((snapshot.val().acumulado / snapshot.val().calificaciones).toFixed(2));
        });
}

let updateStats = (busquedas, calificacion, calificacionValor) => {
    firebase.database()
        .ref('calificaciones/cantidad')
        .transaction(function(cantidad) {
            // If node/clicks has never been set, currentRank will be `null`.
            return (cantidad || 0) + busquedas;
          });
    firebase.database()
        .ref('calificaciones/calificaciones')
        .transaction(function(cantidad) {
            // If node/clicks has never been set, currentRank will be `null`.
            return (cantidad || 0) + calificacion;
          });
    firebase.database()
        .ref('calificaciones/acumulado')
        .transaction(function(acumulado) {
            // If node/clicks has never been set, currentRank will be `null`.
            return (acumulado || 0) + calificacionValor;
          });
}

let checkSession = () => {
    if (sessionStorage.user == "true"){
        $(".wrap").hide()
    }else{
        $(".wrap").show()
    }
}

$(document).ready(function() {
    getStats();
    checkSession();
});