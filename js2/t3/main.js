const firebaseConfig = {
    apiKey: "AIzaSyCkg3m46VSVbOtOYaEgNYYWh3_vRW9B7Nk",
    authDomain: "j-9fed5.firebaseapp.com",
    projectId: "j-9fed5",
    storageBucket: "j-9fed5.appspot.com",
    messagingSenderId: "47870921141",
    appId: "1:47870921141:web:159fe638c0bca16ca831fc"
        };

    firebase.initializeApp(firebaseConfig);

    var db = firebase.firestore();

function saveUser(){
    let user = {
        name: document.getElementById(`name`).value,
        lastname: document.getElementById(`lastname`).value,
        email: document.getElementById(`email`).value,
        phone: document.getElementById(`phone`).value
    }
    db.collection("users").add(user)
    console.log(user)
}
